import fs from "fs";
import path from "path";

/* ================= config ================= */

const API_FILE = "./scripts/api.json";
const OUT_DIR = "./nodes/ZenErp";
const NODE_CLASS = "ZenErp";
const NODE_NAME = "zenErp";
const REQUEST_IMPORT = "../../transport/request";

const api = JSON.parse(fs.readFileSync(API_FILE, "utf8"));

/* ================= helpers ================= */

const titleCase = (s) =>
  String(s).replace(/[_\-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const camelize = (s) =>
  String(s)
    .replace(/[_\- ]+(\w)/g, (_, c) => c.toUpperCase())
    .replace(/^(\w)/, (c) => c.toLowerCase());

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  fs.writeFileSync(file, content.trim() + "\n");
}

function defaultForType(type) {
  switch (type) {
    case "number": return 0;
    case "boolean": return false;
    case "json": return {};
    default: return "";
  }
}

/* ================= schema helpers ================= */

function resolveSchema(schema) {
  if (!schema) return null;
  if (schema.$ref) {
    const ref = schema.$ref.replace("#/components/schemas/", "");
    return api.components?.schemas?.[ref] ?? null;
  }
  return schema;
}

function schemaToCollection(schema) {
  if (!schema || schema.type !== "object") return [];

  // const required = new Set(schema.required ?? []);

  return Object.entries(schema.properties ?? {}).map(([name, prop]) => {
    let type = "string";
    if (prop.type === "integer" || prop.type === "number") type = "number";
    else if (prop.type === "boolean") type = "boolean";
    else if (prop.type === "object") type = "json";

    return {
      displayName: titleCase(name),
      name,
      type,
      default: defaultForType(type),
      // required: required.has(name),
      ...(name.toLowerCase().includes("password")
        ? { typeOptions: { password: true } }
        : {}),
    };
  });
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
      opName: camelize(def.operationId.split("/").pop()),
      parameters: def.parameters ?? [],
      requestBody: def.requestBody,
    });
  }
}

const moduleList = [...modules.values()];

/* ================= generate operations.ts ================= */

ensure(OUT_DIR);

function opKey(modKey, opName) {
  return camelize(`${modKey} ${opName}`);
}

const operationsTs = `
import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '${REQUEST_IMPORT}';

export const operations: Record<
  string,
  Record<string, (this: IExecuteFunctions, i: number) => Promise<any>>
> = {
${moduleList.map(mod => {
  return `
  "${mod.key}": {
${mod.endpoints.map(ep => {
    const usesPathParams = /\{(\w+)\}/.test(ep.path);
    const pathExpr = ep.path.replace(/\{(\w+)\}/g, (_, p) =>
      usesPathParams ? `\${pathParams.${p}}` : `{${p}}`
    );

    const key = opKey(mod.key, ep.opName);

    return `
      "${ep.opName}": async function (this: IExecuteFunctions, i: number) {
      ${usesPathParams
        ? `const pathParams = this.getNodeParameter('pathParams_${key}', i, {}) as IDataObject;`
        : ""
      }

      const rawQs = this.getNodeParameter('qs_${key}', i, {}) as IDataObject;
      const qs: Record<string, string> = {};
      for (const [k, v] of Object.entries(rawQs)) {
        if (v !== undefined && v !== null) qs[k] = String(v);
      }

      const rawHeaders = this.getNodeParameter('headers_${key}', i, {}) as IDataObject;
      const headers: Record<string, string> = {};
      for (const [k, v] of Object.entries(rawHeaders)) {
        if (v !== undefined && v !== null) headers[k] = String(v);
      }

      ${ep.requestBody
        ? `const body = this.getNodeParameter('body_${key}', i, {}) as IDataObject;`
        : ""
      }

      const options: any = {
        method: "${ep.method}",
        path: \`${pathExpr}\`,
      };

      if (Object.keys(qs).length > 0) {
        options.qs = qs;
      }

      if (Object.keys(headers).length > 0) {
        options.headers = headers;
      }

      ${ep.requestBody ? `
      if (body && Object.keys(body).length > 0) {
        options.body = body;
      }
      ` : ""}

      return request.call(this, options);
    }
`;
}).join(",")}
  }`;
}).join(",")}
};
`;

write(path.join(OUT_DIR, `${NODE_NAME}.operations.ts`), operationsTs);

/* ================= generate fields.ts ================= */

const fields = [];

/* module */
fields.push({
  displayName: "Module",
  name: "module",
  type: "options",
  options: moduleList.map(m => ({ name: m.label, value: m.key })),
  default: moduleList[0].key,
});

/* operation */
for (const mod of moduleList) {
  fields.push({
    displayName: "Operation",
    name: "operation",
    type: "options",
    displayOptions: { show: { module: [mod.key] } },
    options: mod.endpoints.map(e => ({
      name: titleCase(e.opName),
      value: e.opName,
    })),
    default: mod.endpoints[0].opName,
  });
}

/* ---------- PER-OPERATION FIELDS (UNIQUE NAMES) ---------- */

for (const mod of moduleList) {
  for (const ep of mod.endpoints) {
    const show = { module: [mod.key], operation: [ep.opName] };
    const key = opKey(mod.key, ep.opName);

    const pathParams = ep.parameters.filter(p => p.in === "path");
    if (pathParams.length) {
      fields.push({
        displayName: "Path params",
        name: `pathParams_${key}`,
        type: "collection",
        default: {},
        displayOptions: { show },
        options: pathParams.map(p => ({
          displayName: titleCase(p.name),
          name: p.name,
          type: p.schema?.type === "integer" ? "number" : "string",
          default: defaultForType(p.schema?.type),
          // required: true,
        })),
      });
    }

    const queryParams = ep.parameters.filter(p => p.in === "query");
    if (queryParams.length) {
      fields.push({
        displayName: "Query params",
        name: `qs_${key}`,
        type: "collection",
        default: {},
        displayOptions: { show },
        options: queryParams.map(p => ({
          displayName: titleCase(p.name),
          name: p.name,
          type: p.schema?.type === "boolean" ? "boolean" : "string",
          default: defaultForType(p.schema?.type),
        })),
      });
    }

    fields.push({
      displayName: "Headers",
      name: `headers_${key}`,
      type: "collection",
      default: {},
      displayOptions: { show },
      options: [],
    });

    if (ep.requestBody) {
      const schema = resolveSchema(
        ep.requestBody.content?.["application/json"]?.schema
      );

      fields.push({
        displayName: "Body",
        name: `body_${key}`,
        type: "collection",
        default: {},
        // required: ep.requestBody.required === true,
        displayOptions: { show },
        options: schemaToCollection(schema),
      });
    }
  }
}

const fieldsTs = `
import type { INodeProperties } from 'n8n-workflow';
export const properties: INodeProperties[] = ${JSON.stringify(fields, null, 2)};
`;

write(path.join(OUT_DIR, `${NODE_NAME}.fields.ts`), fieldsTs);

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

    function keyFor(module: string , operation: string) {
      return String(module)
        .concat(" ")
        .concat(String(operation))
        .replace(/[_\\-]+/g, " ")
        .replace(/\\s+(\\w)/g, (_, c) => c.toUpperCase())
        .replace(/^(\\w)/, (c) => c.toLowerCase())
        .replace(/[^\\w$]/g, "_");
    }

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

      // compat: operations.ts expects unique param names per op
      (this.getNodeParameter as any).origGetNodeParameter ??= this.getNodeParameter;
      (this as any).__zenKey = keyFor(module, operation);

      const res = await fn.call(this, i);
      if (Array.isArray(res)) out.push(...res);
      else if (res) out.push(res);
    }

    return [out];
  }
}
`;

write(path.join(OUT_DIR, `${NODE_CLASS}.node.ts`), nodeTs);

console.log("✔ Generator completo: fields únicos por operação (sem displayOptions em child) ✔");
