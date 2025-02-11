import t from 'io-ts'

export type MyString = t.TypeOf<typeof MyString>
export const MyString = t.string

export type MyNumber = t.TypeOf<typeof MyNumber>
export const MyNumber = t.number

export type MyBoolean = t.TypeOf<typeof MyBoolean>
export const MyBoolean = t.boolean

export type MyLiteral = t.TypeOf<typeof MyLiteral>
export const MyLiteral = t.literal('literal')

export type MyUnion = t.TypeOf<typeof MyUnion>
export const MyUnion = t.union([
  t.number,
  t.literal('someliteral'),
  t.record(t.string, t.number)
])

export type MyObject1 = t.TypeOf<typeof MyObject1>
export const MyObject1 = t.type({
  prop1: t.string,
  prop2: t.string
})

export type MyObject2 = t.TypeOf<typeof MyObject2>
export const MyObject2 = t.type({
  prop3: t.number
})

