const { schema, imports, dependencies, environment, expressions, endpoints } = program;

schema.type('Root')
  .computed('dolar', 'Dolar')

schema.type('Dolar')
  .field('dolartoday', 'Float')
  .field('bitcoin', 'Float')
