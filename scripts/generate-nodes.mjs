import fs from "fs";
import { readFile } from "fs/promises";
import path from "path";

/* ================= config ================= */

const OUT_DIR = "./nodes/ZenErp";
const NODE_NAME = "zenErp";

async function loadApi(source) {
  if (source.startsWith("http://") || source.startsWith("https://")) {
    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`Failed to fetch API: ${res.status}`);
    }
    return res.json();
  }

  return JSON.parse(await readFile(source, "utf8"));
}

const api = await loadApi("./scripts/schema.json");
// const api = await loadApi("https://api.zenerp.app.br/api/schema.json");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

ensureDir(OUT_DIR);

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

function defaultForN8nType(type) {
  switch (type) {
    case "string":
      return "";

    case "number":
      return 0;

    case "boolean":
      return false;

    case "json":
      return {};

    case "options":
      return undefined;

    case "collection":
    case "fixedCollection":
      return {};

    default:
      throw new Error(`Unsupported n8n type: ${type}`);
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

function resolveSecurityFlags(operation) {
  const sec = operation.security;
  if (!sec || !sec.length) {
    return { auth: false, tenant: false };
  }

  // OR rule
  if (sec.length > 1) {
    throw new Error('OR security rules not supported');
  }

  // AND rule
  const rule = sec[0];
  return {
    auth: !!rule.Auth,
    tenant: !!rule.Tenant,
  };
}

/* ================= fields generator ================= */

export function generateN8nOperationFields(openapi, operation) {
  const prefix = operationIdToParamPrefix(operation.operationId);
  const fields = [];

  const parameters = (operation.parameters || []).map((parameter) => {
    if (parameter.$ref) {
      const ref = parameter.$ref.replace(
        "#/components/parameters/",
        "",
      );
      return openapi.components?.parameters?.[ref] ?? null;
    } else {
      return parameter;
    }
  });

  /* -------- PATH -------- */
  const pathParams = parameters.filter(p => p.in === "path");
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
          default: defaultForN8nType(type),
          // required: true,
        };
      }),
    });
  }

  /* -------- QUERY -------- */
  const queryParams = parameters.filter(p => p.in === "query");
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
          default: defaultForN8nType(type),
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
            default: defaultForN8nType(type),
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

    const security = resolveSecurityFlags(def);

    modules.get(tag).endpoints.push({
      path: rawPath,
      method: httpMethod.toUpperCase(),
      operationId: def.operationId,
      opName: camelCase(def.operationId.split("/").pop()),
      parameters: def.parameters ?? [],
      requestBody: def.requestBody,
      security,
    });
  }
}

const moduleList = [...modules.values()];

/* ================= operations.ts ================= */

const operationsTs = `
import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { createHandler } from './helpers';

export const operations: Record<string, Record<string, (this: IExecuteFunctions, i: number) => Promise<INodeExecutionData[]>>> = {
${moduleList.map(mod => `  "${mod.key}": {${mod.endpoints.map(ep => {
  const prefix = operationIdToParamPrefix(ep.operationId);

  return `
    "${ep.operationId}": createHandler({
      operationId: "${ep.operationId}",
      method: "${ep.method}",
      path: "${ep.path}",
      hasBody: ${!!ep.requestBody},
      security: {
        auth: ${ep.security.auth},
        tenant: ${ep.security.tenant},
      },
    })`;
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
  displayName: "Resource",
  name: "resource",
  type: "options",
  options: moduleList.map(m => ({ name: m.label, value: m.key })),
  default: moduleList[0].key,
});

for (const mod of moduleList) {
  fields.push({
    displayName: "Operation",
    name: "operation",
    type: "options",
    displayOptions: { show: { resource: [mod.key] } },
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

console.log("✔ Generator refatorado usando generateN8nOperationFields");
