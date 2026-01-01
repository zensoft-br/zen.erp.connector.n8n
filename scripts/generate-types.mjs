import fs from "fs";
import path from "path";
import openapiTS from "openapi-typescript";

const OPENAPI_FILE = "./scripts/api.json";
const OUT_FILE = "./src/types/openapi.ts";

const schema = fs.readFileSync(OPENAPI_FILE, "utf-8");

let openapi = JSON.parse(schema);
openapi = patchMissingRefs(openapi);

const types = await openapiTS(openapi, {
  alphabetize: true,
});

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, types);

console.log("✔ OpenAPI types generated:", OUT_FILE);

import yaml from "yaml";

/**
 * Substitui $ref quebrado por { type: "object" }
 */
export function patchMissingRefs(openapi) {
  const schemas = openapi.components?.schemas ?? {};

  function refExists(ref) {
    if (!ref.startsWith("#/components/schemas/")) return true;
    const name = ref.replace("#/components/schemas/", "");
    return Boolean(schemas[name]);
  }

  function walk(node, path = []) {
    if (!node || typeof node !== "object") return;

    // $ref direto
    if (node.$ref && !refExists(node.$ref)) {
      console.warn("⚠ missing $ref patched:", node.$ref, "at", path.join("."));
      delete node.$ref;
      node.type = "object";
      return;
    }

    // arrays (allOf, oneOf, anyOf, items, etc)
    if (Array.isArray(node)) {
      node.forEach((n, i) => walk(n, [...path, i]));
      return;
    }

    // objetos
    for (const [key, value] of Object.entries(node)) {
      walk(value, [...path, key]);
    }
  }

  walk(openapi);
  return openapi;
}

/**
 * Helper para carregar YAML ou JSON
 */
export function loadOpenApi(source) {
  return source.trim().startsWith("{")
    ? JSON.parse(source)
    : yaml.parse(source);
}
