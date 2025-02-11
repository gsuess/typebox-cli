export const MyString = {
  $id: 'MyString',
  type: 'string'
}
export const MyNumber = {
  $id: 'MyNumber',
  type: 'number'
}
export const MyBoolean = {
  $id: 'MyBoolean',
  type: 'boolean'
}
export const MyLiteral = {
  $id: 'MyLiteral',
  const: 'literal',
  type: 'string'
}
export const MyUnion = {
  $id: 'MyUnion',
  anyOf: [
    {
      type: 'number'
    },
    {
      const: 'someliteral',
      type: 'string'
    },
    {
      type: 'object',
      patternProperties: {
        '^(.*)$': {
          type: 'number'
        }
      }
    }
  ]
}
export const MyObject1 = {
  $id: 'MyObject1',
  type: 'object',
  properties: {
    prop1: {
      type: 'string'
    },
    prop2: {
      type: 'string'
    }
  },
  required: ['prop1', 'prop2']
}
export const MyObject2 = {
  $id: 'MyObject2',
  type: 'object',
  properties: {
    prop3: {
      type: 'number'
    }
  },
  required: ['prop3']
}

