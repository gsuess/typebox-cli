import { scope } from 'arktype'

export const types = scope({
  MyString: 'string',
  MyNumber: 'number',
  MyBoolean: 'boolean',
  MyLiteral: '"literal"',
  MyUnion: 'number | "someliteral" | never',
  MyObject1: {
    prop1: 'string',
    prop2: 'string'
  },
  MyObject2: {
    prop3: 'number'
  }
}).export()

export type MyString = typeof MyString.infer
export const MyString = types.MyString
export type MyNumber = typeof MyNumber.infer
export const MyNumber = types.MyNumber
export type MyBoolean = typeof MyBoolean.infer
export const MyBoolean = types.MyBoolean
export type MyLiteral = typeof MyLiteral.infer
export const MyLiteral = types.MyLiteral
export type MyUnion = typeof MyUnion.infer
export const MyUnion = types.MyUnion
export type MyObject1 = typeof MyObject1.infer
export const MyObject1 = types.MyObject1
export type MyObject2 = typeof MyObject2.infer
export const MyObject2 = types.MyObject2

