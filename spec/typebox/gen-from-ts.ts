import { Type, Static } from '@sinclair/typebox'


export type MyString = Static<typeof MyString>
export const MyString = Type.String()

export type MyNumber = Static<typeof MyNumber>
export const MyNumber = Type.Number()

export type MyBoolean = Static<typeof MyBoolean>
export const MyBoolean = Type.Boolean()

export type MyLiteral = Static<typeof MyLiteral>
export const MyLiteral = Type.Literal("literal")

export type MyUnion = Static<typeof MyUnion>
export const MyUnion = Type.Union([
Type.Number(),
Type.Literal("someliteral"),
Type.Record(Type.String(), Type.Number())
])

export type MyObject1 = Static<typeof MyObject1>
export const MyObject1 = Type.Object({
prop1: Type.String(),
prop2: Type.String()
})

export type MyObject2 = Static<typeof MyObject2>
export const MyObject2 = Type.Object({
prop3: Type.Number()
})
