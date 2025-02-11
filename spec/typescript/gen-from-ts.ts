export type MyString = string
export const MyString = (() => {
  function check_MyString(value: any): boolean {
    return typeof value === 'string'
  }
  return function check(value: any): value is MyString {
    return check_MyString(value)
  }
})()

export type MyNumber = number
export const MyNumber = (() => {
  function check_MyNumber(value: any): boolean {
    return Number.isFinite(value)
  }
  return function check(value: any): value is MyNumber {
    return check_MyNumber(value)
  }
})()

export type MyBoolean = boolean
export const MyBoolean = (() => {
  function check_MyBoolean(value: any): boolean {
    return typeof value === 'boolean'
  }
  return function check(value: any): value is MyBoolean {
    return check_MyBoolean(value)
  }
})()

export type MyLiteral = 'literal'
export const MyLiteral = (() => {
  function check_MyLiteral(value: any): boolean {
    return value === 'literal'
  }
  return function check(value: any): value is MyLiteral {
    return check_MyLiteral(value)
  }
})()

export type MyUnion = number | 'someliteral' | Record<string, number>
export const MyUnion = (() => {
  const local_0 = /^(.*)$/
  function check_MyUnion(value: any): boolean {
    return (
      Number.isFinite(value) ||
      value === 'someliteral' ||
      (typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        !(value instanceof Date) &&
        !(value instanceof Uint8Array) &&
        Object.entries(value).every(([key, value]) =>
          local_0.test(key) ? Number.isFinite(value) : true
        ))
    )
  }
  return function check(value: any): value is MyUnion {
    return check_MyUnion(value)
  }
})()

export type MyObject1 = {
  prop1: string
  prop2: string
}
export const MyObject1 = (() => {
  function check_MyObject1(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.prop1 === 'string' &&
      typeof value.prop2 === 'string'
    )
  }
  return function check(value: any): value is MyObject1 {
    return check_MyObject1(value)
  }
})()

export type MyObject2 = {
  prop3: number
}
export const MyObject2 = (() => {
  function check_MyObject2(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.prop3)
    )
  }
  return function check(value: any): value is MyObject2 {
    return check_MyObject2(value)
  }
})()

