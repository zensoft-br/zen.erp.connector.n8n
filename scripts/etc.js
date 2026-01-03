// Extrair a relação de módulos e operações de um array de campos n8n
resource = fields.filter(f => f.name === "resource")[0]
operations = resource.options.map(o => ({ name: o.name, operations: fields.filter(f => f.name === "operation" && f.displayOptions.show.resource[0] === o.value)?.[0].options}))
result = [];
for (const item of operations) {
  for (const operation of item.operations) {
	  result.push(item.name + ", " + operation.name);
	}
}

OR

// Extrair a relação de módulos e operações de um array de campos n8n
const result = fields.find(f => f.name === "resource").options.flatMap(resource => {
  const operationField = fields.find(
    f =>
      f.name === "operation" &&
      f.displayOptions?.show?.resource?.[0] === resource.value
  );

  return operationField
    ? operationField.options.map(op => `${resource.name}, ${op.name}`)
    : [];
});
