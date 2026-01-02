import fs from "fs";
import path from "path";

/* ================= config ================= */

const API_FILE = "./scripts/api.json";
const OUT_DIR = "./nodes/ZenErp";
const NODE_CLASS = "ZenErp";
const NODE_NAME = "zenErp";
const REQUEST_IMPORT = "../../transport/request";

const api = JSON.parse(fs.readFileSync(API_FILE, "utf8"));

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

ensure(OUT_DIR);

/* ================= helpers ================= */

const titleCase = (s) =>
  String(s)
    .replace(/[_\-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const camelCase = (s) =>
  String(s)
    .replace(/[_\- ]+(\w)/g, (_, c) => c.toUpperCase())
    .replace(/^(\w)/, (c) => c.toLowerCase());

function write(file, content) {
  fs.writeFileSync(file, content.trim() + "\n");
}

function defaultForType(type) {
  switch (type) {
    case "number":
    case "integer":
      return 0;
    case "boolean":
      return false;
    case "json":
    case "object":
      return {};
    default:
      return "";
  }
}

function operationIdToParamPrefix(operationId) {
  return operationId.replace(/^\/+/, "").replace(/\//g, "_");
}

function resolveSchema(openapi, schema) {
  if (!schema) return null;
  if (schema.$ref) {
    const ref = schema.$ref.replace("#/components/schemas/", "");
    return openapi.components?.schemas?.[ref] ?? null;
  }
  return schema;
}

/* ================= fields generator ================= */

export function generateN8nOperationFields(openapi, operation) {
  const prefix = operationIdToParamPrefix(operation.operationId);
  const fields = [];

  /* -------- PATH -------- */
  const pathParams = (operation.parameters || []).filter(p => p.in === "path");
  if (pathParams.length) {
    fields.push({
      displayName: "Path params",
      name: `${prefix}_path`,
      type: "collection",
      default: {},
      displayOptions: { show: { operation: [operation.operationId] } },
      options: pathParams.map(p => {
        const type =
          p.schema?.type === "integer" || p.schema?.type === "number"
            ? "number"
            : "string";

        return {
          displayName: p.name,
          name: p.name,
          type,
          default: defaultForType(type),
          // required: true,
        };
      }),
    });
  }

  /* -------- QUERY -------- */
  const queryParams = (operation.parameters || []).filter(p => p.in === "query");
  if (queryParams.length) {
    fields.push({
      displayName: "Query params",
      name: `${prefix}_query`,
      type: "collection",
      default: {},
      displayOptions: { show: { operation: [operation.operationId] } },
      options: queryParams.map(p => {
        const type =
          p.schema?.type === "boolean"
            ? "boolean"
            : p.schema?.type === "integer" || p.schema?.type === "number"
              ? "number"
              : "string";

        return {
          displayName: p.name,
          name: p.name,
          type,
          default: defaultForType(type),
          // required: !!p.required,
        };
      }),
    });
  }

  /* -------- BODY -------- */
  if (operation.requestBody) {
    const schema = resolveSchema(
      openapi,
      operation.requestBody.content?.["application/json"]?.schema
    );

    const required = new Set(schema?.required || []);
    const bodyFields =
      schema?.type === "object"
        ? Object.entries(schema.properties || {}).map(([name, prop]) => {
          const type =
            prop.type === "integer" || prop.type === "number"
              ? "number"
              : prop.type === "boolean"
                ? "boolean"
                : prop.type === "object"
                  ? "json"
                  : "string";

          return {
            displayName: name,
            name,
            type,
            default: defaultForType(type),
            // required: required.has(name),
          };
        })
        : [];

    fields.push({
      displayName: "Body format",
      name: `${prefix}_bodyFormat`,
      type: "options",
      default: "fields",
      displayOptions: { show: { operation: [operation.operationId] } },
      options: [
        { name: "Fields", value: "fields" },
        { name: "JSON", value: "json" },
      ],
    });

    fields.push({
      displayName: "Body",
      name: `${prefix}_body`,
      type: "collection",
      default: {},
      displayOptions: {
        show: {
          operation: [operation.operationId],
          [`${prefix}_bodyFormat`]: ["fields"],
        },
      },
      options: bodyFields,
    });

    fields.push({
      displayName: "Body (JSON)",
      name: `${prefix}_bodyJson`,
      type: "collection",
      default: {},
      displayOptions: {
        show: {
          operation: [operation.operationId],
          [`${prefix}_bodyFormat`]: ["json"],
        },
      },
      options: [
        {
          displayName: "JSON",
          name: "json",
          type: "json",
          default: {},
        },
      ],
    });
  }

  return fields;
}

/* ================= collect endpoints ================= */

const modules = new Map();

for (const [rawPath, methods] of Object.entries(api.paths ?? {})) {
  for (const [httpMethod, def] of Object.entries(methods ?? {})) {
    const tag = def.tags?.[0] ?? "default";

    if (!modules.has(tag)) {
      modules.set(tag, {
        key: tag,
        label: titleCase(tag),
        endpoints: [],
      });
    }

    modules.get(tag).endpoints.push({
      path: rawPath,
      method: httpMethod.toUpperCase(),
      operationId: def.operationId,
      opName: camelCase(def.operationId.split("/").pop()),
      parameters: def.parameters ?? [],
      requestBody: def.requestBody,
    });
  }
}

const moduleList = [...modules.values()];

/* ================= operations.ts ================= */

const operationsTs = `
import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { request } from '${REQUEST_IMPORT}';
import {
  resolveRequestBody,
  resolveQueryParams,
  resolvePathParams,
} from '../helpers/resolveParams';

export const operations: Record<string, Record<string, (this: IExecuteFunctions, i: number) => Promise<INodeExecutionData[]>>> = {
${moduleList.map(mod => `
  "${mod.key}": {
${mod.endpoints.map(ep => {
  const prefix = operationIdToParamPrefix(ep.operationId);
  const pathExpr = ep.path.replace(/\{(\w+)\}/g, (_, p) => `\${pathParams.${p}}`);

  const resolvers = [];

  // sempre existe
  resolvers.push(`const opId = '${prefix}';`);

  // path params só se existirem no path
  if (/\{(\w+)\}/.test(ep.path)) {
    resolvers.push(
      `const pathParams = resolvePathParams(this, i, opId);`,
    );
  }

  // query params (sempre seguro chamar)
  resolvers.push(
    `const qs = resolveQueryParams(this, i, opId);`,
  );

  // headers (sempre seguro chamar)
  // resolvers.push(
  //   `const headers = resolveHeaders(this, i, opId);`,
  // );

  // body só se a operação tiver requestBody
  if (ep.requestBody) {
    resolvers.push(
      `const body = resolveRequestBody(this, i, opId);`,
    );
  }

  return `
    "${ep.operationId}": async function (this: IExecuteFunctions, i: number) {
      ${resolvers.join("\n      ")}      

      return request.call(this, {
        method: "${ep.method}",
        path: \`${pathExpr}\`,
        qs,
        ${ep.requestBody ? "body," : ""}
      });
    }`;
}).join(",")}
  }`
).join(",")}
};
`;

write(path.join(OUT_DIR, `${NODE_NAME}.operations.ts`), operationsTs);

/* ================= fields.ts ================= */

const fields = [];

/* module + operation */
fields.push({
  displayName: "Module",
  name: "module",
  type: "options",
  options: moduleList.map(m => ({ name: m.label, value: m.key })),
  default: moduleList[0].key,
});

for (const mod of moduleList) {
  fields.push({
    displayName: "Operation",
    name: "operation",
    type: "options",
    displayOptions: { show: { module: [mod.key] } },
    options: mod.endpoints.map(e => ({
      name: titleCase(e.opName),
      value: e.operationId,
    })),
    default: mod.endpoints[0].opName,
  });

  for (const ep of mod.endpoints) {
    fields.push(...generateN8nOperationFields(api, ep));
  }
}

write(
  path.join(OUT_DIR, `${NODE_NAME}.fields.json`),
  JSON.stringify(fields, null, 2),
);

/* ================= node.ts ================= */

const nodeTs = `
import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
import { operations } from './${NODE_NAME}.operations';
import { properties } from './${NODE_NAME}.fields';

export class ${NODE_CLASS} implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Zen ERP',
    description: 'Zen ERP connector node',
    name: '${NODE_NAME}',
    icon: 'file:zenErp.svg',
    group: ['transform'],
    version: 1,
    usableAsTool: true,
    defaults: { name: 'Zen ERP' },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [{ name: 'zenApi', required: true }],
    properties,
  };

  async execute(this: IExecuteFunctions) {
    const items = this.getInputData();
    const out = [];

    for (let i = 0; i < items.length; i++) {
      const module = this.getNodeParameter('module', i) as string;
      const operation = this.getNodeParameter('operation', i) as string;
      const fn = operations[module]?.[operation];

      if (!fn) {
        throw new NodeOperationError(
          this.getNode(),
          \`Invalid operation: \${module} / \${operation}\`,
          { itemIndex: i },
        );
      }

      const res = await fn.call(this, i);
      if (Array.isArray(res)) out.push(...res);
      else if (res) out.push(res);
    }

    return [out];
  }
}
`;

write(path.join(OUT_DIR, `${NODE_CLASS}.node.ts`), nodeTs);

console.log("✔ Generator refatorado usando generateN8nOperationFields");
