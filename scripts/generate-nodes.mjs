import fs from "fs";
import { readFile } from "fs/promises";
import path from "path";

const OUT_DIR = "./nodes/ZenErp";

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

const api = await loadApi("../zen.erp.ws/src/main/webapp/api/schema.json");
// const api = await loadApi("https://api.zenerp.app.br/api/schema.json");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

ensureDir(OUT_DIR);

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

function generateN8nOperationFields(openapi, operation) {
  const result = [];

  const prefix = operationIdToParamPrefix(operation.operationId);

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
    result.push({
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
    result.push({
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

    result.push({
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

    result.push({
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

    result.push({
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

  return result;
}

const resources = new Map();

for (const [rawPath, methods] of Object.entries(api.paths ?? {})) {
  for (const [httpMethod, def] of Object.entries(methods ?? {})) {
    const tag = def.tags?.[0] ?? "default";

    if (!resources.has(tag)) {
      resources.set(tag, {
        key: tag,
        label: titleCase(tag),
        endpoints: [],
      });
    }

    const security = resolveSecurityFlags(def);

    resources.get(tag).endpoints.push({
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

const resourceList = [...resources.values()];
resourceList.sort((a, b) => a.key.localeCompare(b.key));
for (const resource of resourceList) {
  resource.endpoints.sort((a, b) => a.operationId.localeCompare(b.operationId));
}

const metaOperation = {};
for (const resource of resourceList) {
  const resourceObj = (metaOperation[resource.key] = {});
  for (const operation of resource.endpoints) {
    resourceObj[operation.operationId] = {
      operationId: operation.operationId,
      method: operation.method,
      path: operation.path,
      hasBody: !!operation.requestBody,
      security: {
        auth: operation.security.auth,
        tenant: operation.security.tenant
      }
    }
  }
}

write(path.join(OUT_DIR, `ZenErp.meta.operations.json`), JSON.stringify(metaOperation, null, 2));

const metaFields = [];

metaFields.push({
  displayName: "Resource",
  name: "resource",
  type: "options",
  options: resourceList.map(m => ({
    name: m.label,
    value: m.key
  })),
  default: resourceList[0].key,
});

for (const resource of resourceList) {
  metaFields.push({
    displayName: "Operation",
    name: "operation",
    type: "options",
    displayOptions: { show: { resource: [resource.key] } },
    options: resource.endpoints.map(e => ({
      name: titleCase(e.opName),
      value: e.operationId,
    })),
    default: resource.endpoints[0].opName,
  });

  for (const ep of resource.endpoints) {
    metaFields.push(...generateN8nOperationFields(api, ep));
  }
}

write(path.join(OUT_DIR, `ZenErp.meta.fields.json`), JSON.stringify(metaFields, null, 2));

console.log("✔ Generator executed successfully");
