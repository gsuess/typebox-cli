import * as v from 'valibot'

export type MyBoolean = v.InferOutput<typeof MyBoolean>
export const MyBoolean = v.boolean()

export type MyLiteral = v.InferOutput<typeof MyLiteral>
export const MyLiteral = v.literal('literal')

export type MyNumber = v.InferOutput<typeof MyNumber>
export const MyNumber = v.number()

export type MyObject1 = v.InferOutput<typeof MyObject1>
export const MyObject1 = v.object({
  prop1: v.string(),
  prop2: v.string()
})

export type MyObject2 = v.InferOutput<typeof MyObject2>
export const MyObject2 = v.object({
  prop3: v.number()
})

export type MyString = v.InferOutput<typeof MyString>
export const MyString = v.string()

export type MyUnion = v.InferOutput<typeof MyUnion>
export const MyUnion = v.union([
  v.number(),
  v.literal('someliteral'),
  v.record(v.string(), v.number())
])

