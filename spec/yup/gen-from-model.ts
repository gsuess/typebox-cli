import y from 'yup'

export type MyBoolean = y.InferType<typeof MyBoolean>
export const MyBoolean = y.boolean().required()

export type MyLiteral = y.InferType<typeof MyLiteral>
export const MyLiteral = y
  .mixed((value): value is 'literal' => value === 'literal')
  .required()

export type MyNumber = y.InferType<typeof MyNumber>
export const MyNumber = y.number().required()

export type MyObject1 = y.InferType<typeof MyObject1>
export const MyObject1 = y.object({
  prop1: y.string().required(),
  prop2: y.string().required()
})

export type MyObject2 = y.InferType<typeof MyObject2>
export const MyObject2 = y.object({
  prop3: y.number().required()
})

export type MyString = y.InferType<typeof MyString>
export const MyString = y.string().required()

export type MyUnion = y.InferType<typeof MyUnion>
export const MyUnion = y
  .mixed()
  .oneOf([
    y.number().required(),
    y
      .mixed((value): value is 'someliteral' => value === 'someliteral')
      .required(),
    y.mixed(/* unsupported */)
  ])
  .required()

