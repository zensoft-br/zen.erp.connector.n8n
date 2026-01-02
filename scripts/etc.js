// Extrair a relação de módulos e operações de um array de campos n8n
module = fields.filter(f => f.name === "module")[0]
operations = module.options.map(o => ({ name: o.name, operations: fields.filter(f => f.name === "operation" && f.displayOptions.show.module[0] === o.value)?.[0].options}))
result = [];
for (const item of operations) {
  for (const operation of item.operations) {
	  result.push(item.name + ", " + operation.name);
	}
}

OR

// Extrair a relação de módulos e operações de um array de campos n8n
const result = fields.find(f => f.name === "module").options.flatMap(mod => {
  const operationField = fields.find(
    f =>
      f.name === "operation" &&
      f.displayOptions?.show?.module?.[0] === mod.value
  );

  return operationField
    ? operationField.options.map(op => `${mod.name}, ${op.name}`)
    : [];
});
