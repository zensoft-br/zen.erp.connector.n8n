import fs from "fs";
import path from "path";

const api = JSON.parse(fs.readFileSync("./scripts/api.json", "utf8"));
const OUT = "./nodes";

const pascal = (s) =>
  s.replace(/(^\w|\/\w)/g, (m) => m.replace("/", "").toUpperCase());

const camel = (s) =>
  s.replace(/\/(\w)/g, (_, c) => c.toUpperCase());

const title = (s) =>
  s.replace(/\b\w/g, (c) => c.toUpperCase());

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  fs.writeFileSync(file, content.trim() + "\n");
}

/**
 * tag: catalog/person/address/contact
 *
 * root: catalog
 * path: [person, address, contact]
 * service: contact
 * fullPath: [catalog, person, address, contact]
 */
function resolveHierarchy(operation) {
  const parts = operation.tags[0].split("/").filter(Boolean);

  if (parts.length === 0) {
    throw new Error(`Invalid tag for path ${operation.operationId}`);
  }

  return {
    root: parts[0],
    path: parts.slice(1),
    service: parts.at(-1),
    fullPath: parts,
  };
}

/* ================= grouping ================= */

const modules = {};

for (const [rawPath, methods] of Object.entries(api.paths)) {
  for (const [httpMethod, def] of Object.entries(methods)) {
    const h = resolveHierarchy(def);
    const key = h.fullPath.join("/");

    modules[key] ??= {
      hierarchy: h,
      endpoints: [],
    };

    modules[key].endpoints.push({
      httpMethod: httpMethod.toUpperCase(),
      path: rawPath,
      operationId: def.operationId,
      parameters: def.parameters ?? [],
      requestBody: def.requestBody,
    });
  }
}

/* ================= generation ================= */

for (const { hierarchy: h, endpoints } of Object.values(modules)) {
  const dir = path.join(OUT, ...h.fullPath);
  ensure(dir);

  const serviceName = pascal(h.service) + "Service";
  const baseFile = camel(h.service) + ".service";

  const depth = h.fullPath.length;
  const requestImport = "../" + "../".repeat(depth) + "transport/request";

  /* ---------- operations ---------- */

  const ops = endpoints
    .map((e) => {
      const fn = e.operationId?.split("/").pop();
      if (!fn) return "";

      const hasBody = !!e.requestBody;
      const pathExpr = e.path.replace(
        /\{(\w+)\}/g,
        (_, p) => `\${this.getNodeParameter('${p}', i)}`
      );

      return `
export async function ${fn}(this: IExecuteFunctions, i: number) {
  ${hasBody ? "const body = this.getNodeParameter('body', i) as IDataObject;" : ""}

  const options = {
    method: '${e.httpMethod}' as const,
    path: \`${pathExpr}\`,
    ${hasBody ? "body" : ""}
  };
  return request.call(this, options);
}`;
    })
    .join("\n");

  const hasBody = endpoints.some((e) => !!e.requestBody);

  const operationImports = [
    'IExecuteFunctions',
    ...(hasBody ? ['IDataObject'] : []),
  ];

  write(
    `${dir}/${baseFile}.operations.ts`,
    `
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { ${operationImports.join(', ')} } from 'n8n-workflow';
import { request } from '${requestImport}';
${ops}
`
  );

  /* ---------- fields ---------- */

  const operationOptions = endpoints
    .map((e) => {
      const fn = e.operationId?.split("/").pop();
      return fn ? `{ name: '${title(fn)}', value: '${fn}' }` : null;
    })
    .filter(Boolean);

  operationOptions.sort();

  const defaultOp =
    operationOptions[0]?.match(/value: '(.+)'/)?.[1] ?? "";


  write(
    `${dir}/${baseFile}.fields.ts`,
    `
import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    ${operationOptions.join(",\n    ")}
  ],
  default: '${defaultOp}',
}];

export const fields: INodeProperties[] = [
  {
    displayName: 'ID',
    name: 'id',
    type: 'number',
    default: null,
  },
  {
    displayName: 'Body',
    name: 'body',
    type: 'json',
    default: {},
  },
];
`
  );

  /* ---------- node ---------- */

  write(
    `${dir}/${serviceName}.node.ts`,
    `
import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as ops from './${baseFile}.operations';
import { operations, fields } from './${baseFile}.fields';

export class ${serviceName} implements INodeType {
  description: INodeTypeDescription = {
    displayName: '${serviceName}',
    description: '${serviceName} operations',
    name: '${camel(h.service)}Service',
    icon: 'file:${h.service}.service.svg',
    group: ['output'],
    version: 1,
    usableAsTool: true,
    defaults: { name: '${serviceName}' },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      ...operations,
      ...fields,
    ],
  };

  async execute(this: IExecuteFunctions) {
    const items = this.getInputData();
    const out = [];

    for (let i = 0; i < items.length; i++) {
      const op = this.getNodeParameter('operation', i) as keyof typeof ops;
      out.push(...await ops[op].call(this, i));
    }

    return [out];
  }
}
`
  );

  /* ---------- icon ---------- */

  const iconFile = `${dir}/${h.service}.service.svg`;
  if (!fs.existsSync(iconFile)) {
    write(
      iconFile,
      `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
 <path d="m354.32 10.197c13.596 13.596 13.596 35.565 0 49.161l-73.741 73.741 98.321 98.321 73.741-73.741c13.596-13.596 35.565-13.596 49.161 0 13.596 13.596 13.596 35.565 0 49.161l-73.741 73.741 49.161 49.161c13.596 13.596 13.596 35.565 0 49.161-13.596 13.596-35.565 13.596-49.161-1e-5l-49.161 49.161c-73.05 73.05-186.89 80.577-268.31 22.506l-51.235 51.235c-13.596 13.596-35.565 13.596-49.161 0-13.596-13.596-13.596-35.565 0-49.161l51.235-51.235c-58.071-81.422-50.543-195.26 22.506-268.31l49.161-49.161c-13.596-13.596-13.596-35.565-1e-5 -49.161 13.596-13.596 35.565-13.596 49.161 0l49.161 49.161 73.741-73.741c13.596-13.596 35.565-13.596 49.161 2e-6z" stroke-width="1.0863"/>
</svg>`
    );
  }
}

console.log("✔ All Service nodes generated (hierarchical, tag-driven)");
