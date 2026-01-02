// scripts/gen-n8n-single-node.js
// Gera 1 único node (ZenApi) com seleção Module → Operation, a partir de tags OpenAPI.
// Entrada: ./scripts/api.json (OpenAPI convertido para JSON)
// Saída:   ./nodes/ZenApi/*
//
// Regras:
// - Module = tag hierárquica (ex: catalog/person/address)
// - Operation = operationId padrão Zen (normalizado para camelCase do "último segmento")
// - Organização no n8n: field "module" + field "operation" (dependente do módulo)
//
// Observação:
// - Para manter o node genérico e estável, este generator expõe campos comuns:
//   - pathParams (json)  -> substitui {param} no path
//   - qs (json)          -> querystring
//   - headers (json)     -> headers extras
//   - body (json)        -> requestBody quando existir
//
// Ajuste REQUEST_IMPORT se seu projeto tiver outro layout.

import fs from "fs";
import path from "path";

const API_FILE = "./scripts/api.json";
const OUT_DIR = "./nodes/ZenErp";
const NODE_CLASS = "ZenErp";
const NODE_NAME = "zenErp";
const ICON_FILE = "zenErp.svg";

// ajuste conforme seu projeto
const REQUEST_IMPORT = "../../transport/request";

const api = JSON.parse(fs.readFileSync(API_FILE, "utf8"));

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  fs.writeFileSync(file, content.trim() + "\n");
}

function titleCase(s) {
  return String(s)
    .replace(/[_\-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function safeIdent(s) {
  // identificador TS seguro (não inicia com número; remove chars ruins)
  let x = String(s).replace(/[^\w$]/g, "_");
  if (/^\d/.test(x)) x = "_" + x;
  return x;
}

function camelize(s) {
  const x = String(s)
    .replace(/[_\- ]+(\w)/g, (_, c) => c.toUpperCase())
    .replace(/^(\w)/, (c) => c.toLowerCase());
  return safeIdent(x);
}

/**
 * Resolve módulo pelo primeiro tag (hierárquico).
 * Ex: "catalog/person/address" -> { key, label }
 */
function resolveModuleByTags(operation) {
  const tag = operation?.tags?.find(Boolean) ?? "";
  const parts = String(tag).split("/").map((p) => p.trim()).filter(Boolean);

  if (parts.length === 0) {
    // fallback: tenta inferir pelo path do endpoint
    return { key: "default", label: "Default" };
  }

  const key = parts.join("/");
  const label = parts.map(part => titleCase(part)).join(", ");
  return { key, label };
}

/**
 * OperationId padrão Zen:
 * - Se tiver "/" pega só o último segmento
 * - Converte para camelCase
 * - Mantém estável
 */
function resolveOpName(operationId) {
  const raw = String(operationId ?? "").trim();
  if (!raw) return "operation";

  const last = raw.includes("/") ? raw.split("/").filter(Boolean).at(-1) : raw;

  // normaliza: remove prefixos comuns, se vier algo como "catalogPersonRead"
  // (não inventa demais; só deixa camelCase seguro)
  return camelize(last);
}

function buildPathTemplate(openapiPath) {
  // "{id}" -> ${pathParams.id}
  return String(openapiPath).replace(/\{(\w+)\}/g, (_, p) => `\${pathParams?.${p}}`);
}

/* ========================== collect ========================== */

const modules = new Map(); // key -> { key, label, endpoints: [] }

for (const [rawPath, methods] of Object.entries(api.paths ?? {})) {
  for (const [httpMethod, def] of Object.entries(methods ?? {})) {
    const m = resolveModuleByTags(def);
    const moduleKey = m.key;

    if (!modules.has(moduleKey)) {
      modules.set(moduleKey, { key: moduleKey, label: m.label, endpoints: [] });
    }

    const endpoint = {
      httpMethod: String(httpMethod).toUpperCase(),
      path: String(rawPath),
      operationId: def.operationId,
      opName: resolveOpName(def.operationId),
      hasBody: !!def.requestBody,
    };

    modules.get(moduleKey).endpoints.push(endpoint);
  }
}

// ordenar módulos por label
const moduleList = [...modules.values()].sort((a, b) => a.label.localeCompare(b.label));

/* ========================== de-dup ops per module ========================== */

for (const mod of moduleList) {
  const seen = new Map(); // opName -> count
  for (const ep of mod.endpoints) {
    const n = (seen.get(ep.opName) ?? 0) + 1;
    seen.set(ep.opName, n);
    if (n > 1) {
      // evita colisão dentro do mesmo módulo
      ep.opName = `${ep.opName}${n}`;
    }
  }

  // ordenar ops por opName
  mod.endpoints.sort((a, b) => a.opName.localeCompare(b.opName));
}

/* ========================== generate files ========================== */

ensure(OUT_DIR);

/* ---------- operations.ts ---------- */

const operationsTs = `
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { request } from '${REQUEST_IMPORT}';

/**
 * operations[moduleKey][opName] = executor
 *
 * Campos esperados no node:
 * - pathParams (json): usado para interpolar {param} do path
 * - qs (json): querystring
 * - headers (json): headers extras
 * - body (json): request body (quando aplicável)
 */
export const operations: Record<string, Record<string, (this: IExecuteFunctions, i: number) => Promise<any>>> = {
  ${moduleList
    .map((mod) => {
      const ops = mod.endpoints
        .map((ep) => {
          const pathTpl = buildPathTemplate(ep.path);

          const usesPathParams = /\{(\w+)\}/.test(ep.path);

          return `
    ${JSON.stringify(ep.opName)}: async function (this: IExecuteFunctions, i: number) {
      ${usesPathParams
      ? "const pathParams = this.getNodeParameter('pathParams', i, {}) as IDataObject;"
      : ""
      }

      const rawQs = this.getNodeParameter('qs', i, {}) as IDataObject;
      const qs: Record<string, string> = {};

      for (const [k, v] of Object.entries(rawQs)) {
        if (v !== undefined && v !== null) {
          qs[k] = String(v);
        }
      }

      const rawHeaders = this.getNodeParameter('headers', i, {}) as IDataObject;
      const headers: Record<string, string> = {};
      for (const [k, v] of Object.entries(rawHeaders)) {
        if (v !== undefined && v !== null) {
          headers[k] = String(v);
        }
      }
      ${ep.hasBody ? "const body = this.getNodeParameter('body', i, {}) as IDataObject;" : ""}

      return request.call(this, {
        method: ${JSON.stringify(ep.httpMethod)} as const,
        path: \`${pathTpl}\`,
        headers,
        qs,
        ${ep.hasBody ? "body," : ""}
      });
    }`;
        })
        .join(",\n");

      return `
  ${JSON.stringify(mod.key)}: {
${ops}
  }`;
    })
    .join(",\n")}
};

export function listModules() {
  return Object.keys(operations);
}

export function listOperations(moduleKey: string) {
  return Object.keys(operations[moduleKey] ?? {});
}
`;

write(path.join(OUT_DIR, `${NODE_NAME}.operations.ts`), operationsTs);

/* ---------- fields.ts ---------- */

const moduleOptions = moduleList
  .map((m) => `{ name: ${JSON.stringify(m.label)}, value: ${JSON.stringify(m.key)} }`)
  .join(",\n    ");

const defaultModule = moduleList[0]?.key ?? "default";

const operationFieldsByModule = moduleList
  .map((m) => {
    const opOptions = m.endpoints
      .map((ep) => {
        // label: tenta usar operationId (último segmento) para ficar humano
        const raw = String(ep.operationId ?? "");
        const last = raw.includes("/") ? raw.split("/").filter(Boolean).at(-1) : raw;
        const label = titleCase(last || ep.opName);
        return `{ name: ${JSON.stringify(label)}, value: ${JSON.stringify(ep.opName)} }`;
      })
      .join(",\n        ");

    const defaultOp = m.endpoints[0]?.opName ?? "";

    return `
  {
    displayName: 'Operation',
    description: 'API do Zen ERP',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        module: [${JSON.stringify(m.key)}],
      },
    },
    options: [
        ${opOptions}
    ],
    default: ${JSON.stringify(defaultOp)},
  }`;
  })
  .join(",\n");

const fieldsTs = `
import type { INodeProperties } from 'n8n-workflow';

export const properties: INodeProperties[] = [
  {
    displayName: 'Module',
    name: 'module',
    type: 'options',
    noDataExpression: true,
    options: [
    ${moduleOptions}
    ],
    default: ${JSON.stringify(defaultModule)},
  },

${operationFieldsByModule},

  {
    displayName: 'Path params',
    name: 'pathParams',
    type: 'json',
    default: {},
    description: 'Valores para interpolar {param} no path (ex: {"id": 123}).',
  },
  {
    displayName: 'Querystring',
    name: 'qs',
    type: 'json',
    default: {},
    description: 'Parâmetros de querystring (ex: {"page": 1, "size": 50}).',
  },
  {
    displayName: 'Headers',
    name: 'headers',
    type: 'json',
    default: {},
    description: 'Headers adicionais (ex: {"X-Trace-Id": "abc"}).',
  },
  {
    displayName: 'Body',
    name: 'body',
    type: 'json',
    default: {},
    description: 'Request body (quando aplicável).',
  },
];
`;

write(path.join(OUT_DIR, `${NODE_NAME}.fields.ts`), fieldsTs);

/* ---------- node.ts ---------- */

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
    defaults: { name: '${NODE_CLASS}' },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'zenApi',
        required: true,
      },
    ],    
    properties,
  };

  async execute(this: IExecuteFunctions) {
    const items = this.getInputData();
    const out = [];

    for (let i = 0; i < items.length; i++) {
      const moduleKey = this.getNodeParameter('module', i) as string;
      const opName = this.getNodeParameter('operation', i) as string;

      const fn = operations[moduleKey]?.[opName];

      if (!fn) {
        throw new NodeOperationError(
          this.getNode(),
          \`Operação inválida: module="\${moduleKey}" operation="\${opName}"\`,
          { itemIndex: i },
        );
      }

      const res = await fn.call(this, i);

      // n8n aceita array de items ou item único vindo do helper.
      // Preserva o comportamento do seu request() atual.
      if (Array.isArray(res)) {
        out.push(...res);
      } else if (res != null) {
        out.push(res);
      }
    }

    return [out];
  }
}
`;

write(path.join(OUT_DIR, `${NODE_CLASS}.node.ts`), nodeTs);

/* ---------- icon ---------- */

// const iconPath = path.join(OUT_DIR, ICON_FILE);
// if (!fs.existsSync(iconPath)) {
//   write(
//     iconPath,
//     `<?xml version="1.0" encoding="UTF-8"?>
// <svg width="512" height="512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
//  <path d="m354.32 10.197c13.596 13.596 13.596 35.565 0 49.161l-73.741 73.741 98.321 98.321 73.741-73.741c13.596-13.596 35.565-13.596 49.161 0 13.596 13.596 13.596 35.565 0 49.161l-73.741 73.741 49.161 49.161c13.596 13.596 13.596 35.565 0 49.161-13.596 13.596-35.565 13.596-49.161-1e-5l-49.161 49.161c-73.05 73.05-186.89 80.577-268.31 22.506l-51.235 51.235c-13.596 13.596-35.565 13.596-49.161 0-13.596-13.596-13.596-35.565 0-49.161l51.235-51.235c-58.071-81.422-50.543-195.26 22.506-268.31l49.161-49.161c-13.596-13.596-13.596-35.565-1e-5 -49.161 13.596-13.596 35.565-13.596 49.161 0l49.161 49.161 73.741-73.741c13.596-13.596 35.565-13.596 49.161 2e-6z" stroke-width="1.0863"/>
// </svg>`
//   );
// }

console.log(`✔ Node único gerado em ${OUT_DIR}`);
console.log(`- ${NODE_CLASS}.node.ts`);
console.log(`- ${NODE_NAME}.fields.ts`);
console.log(`- ${NODE_NAME}.operations.ts`);
console.log(`- ${ICON_FILE}`);
