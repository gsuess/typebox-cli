import { z } from 'zod'

export type MyString = z.infer<typeof MyString>
export const MyString = z.string()

export type MyNumber = z.infer<typeof MyNumber>
export const MyNumber = z.number()

export type MyBoolean = z.infer<typeof MyBoolean>
export const MyBoolean = z.boolean()

export type MyLiteral = z.infer<typeof MyLiteral>
export const MyLiteral = z.literal('literal')

export type MyUnion = z.infer<typeof MyUnion>
export const MyUnion = z.union([
  z.number(),
  z.literal('someliteral'),
  z.record(z.number())
])

export type MyObject1 = z.infer<typeof MyObject1>
export const MyObject1 = z.object({
  prop1: z.string(),
  prop2: z.string()
})

export type MyObject2 = z.infer<typeof MyObject2>
export const MyObject2 = z.object({
  prop3: z.number()
})

