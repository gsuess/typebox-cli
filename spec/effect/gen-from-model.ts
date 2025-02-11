import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type MyBoolean = ET.Type<typeof MyBoolean>
export const MyBoolean = ES.Boolean

export type MyLiteral = ET.Type<typeof MyLiteral>
export const MyLiteral = ES.Literal('literal')

export type MyNumber = ET.Type<typeof MyNumber>
export const MyNumber = ES.Number

export type MyObject1 = ET.Type<typeof MyObject1>
export const MyObject1 = ES.Struct({
  prop1: ES.String,
  prop2: ES.String
})

export type MyObject2 = ET.Type<typeof MyObject2>
export const MyObject2 = ES.Struct({
  prop3: ES.Number
})

export type MyString = ET.Type<typeof MyString>
export const MyString = ES.String

export type MyUnion = ET.Type<typeof MyUnion>
export const MyUnion = ES.Union(
  ES.Number,
  ES.Literal('someliteral'),
  ES.Record(ES.String, ES.Number)
)

