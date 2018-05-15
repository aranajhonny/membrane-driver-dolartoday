const { schema, imports, dependencies, environment, expressions, endpoints } = program;

schema.type('Root')
  .computed('dolar', 'Dolar')

schema.type('Dolar')
  .field('USD', 'USD')
  .field('EUR', 'EUR')

schema.type('USD')
  .field('dolartoday', 'String')
  .field('bitcoin', 'String')

schema.type('EUR')
  .field('dolartoday', 'String')

