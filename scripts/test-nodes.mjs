import { generateN8nOperationParams } from "./generate-nodes.mjs";

const openapi = {
    openapi: "3.0.3",
    paths: {
        "/catalog/product/product/{path1}/{path2}": {
            post: {
                tags: ["catalog/product"],
                operationId: "/catalog/product/productOperation",
                parameters: [
                    {
                        name: "path1",
                        in: "path",
                        required: true,
                        schema: {
                            type: "integer",
                        },
                    },
                    {
                        name: "path2",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                    {
                        name: "query1",
                        in: "query",
                        required: false,
                        schema: {
                            type: "integer",
                        },
                    },
                    {
                        name: "query2",
                        in: "query",
                        required: false,
                        schema: {
                            type: "boolean",
                        },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/catalog.ProductCreateBody",
                            },
                        },
                    },
                },
            },
        },
    },
    components: {
        schemas: {
            "catalog.ProductCreateBody": {
                type: "object",
                required: ["body1"],
                properties: {
                    body1: {
                        type: "string",
                    },
                    body2: {
                        type: "number",
                    },
                    metadata: {
                        type: "object",
                        properties: {},
                    },
                },
            },
        },
    },
};

const json = generateN8nOperationParams(openapi, openapi.paths["/catalog/product/product/{path1}/{path2}"].post);
console.log(JSON.stringify(json, null, 2));