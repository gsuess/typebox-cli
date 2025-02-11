// @ts-nocheck

export const MyBoolean = (() => { 
        function check_MyBoolean(value) {
  return (
    (typeof value === 'boolean')
  )
}
return function check(value) {
  return check_MyBoolean(value)
} 
      })()

export const MyLiteral = (() => { 
        function check_MyLiteral(value) {
  return (
    (value === 'literal')
  )
}
return function check(value) {
  return check_MyLiteral(value)
} 
      })()

export const MyNumber = (() => { 
        function check_MyNumber(value) {
  return (
    Number.isFinite(value)
  )
}
return function check(value) {
  return check_MyNumber(value)
} 
      })()

export const MyObject1 = (() => { 
        function check_MyObject1(value) {
  return (
    (typeof value === 'object' && value !== null && !Array.isArray(value)) &&
    (typeof value.prop1 === 'string') &&
    (typeof value.prop2 === 'string')
  )
}
return function check(value) {
  return check_MyObject1(value)
} 
      })()

export const MyObject2 = (() => { 
        function check_MyObject2(value) {
  return (
    (typeof value === 'object' && value !== null && !Array.isArray(value)) &&
    Number.isFinite(value.prop3)
  )
}
return function check(value) {
  return check_MyObject2(value)
} 
      })()

export const MyString = (() => { 
        function check_MyString(value) {
  return (
    (typeof value === 'string')
  )
}
return function check(value) {
  return check_MyString(value)
} 
      })()

export const MyUnion = (() => { 
        const local_0 = /^(.*)$/
function check_MyUnion(value) {
  return (
    ((Number.isFinite(value)) || ((value === 'someliteral')) || ((typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date) && !(value instanceof Uint8Array)) && (Object.entries(value).every(([key, value]) => (local_0.test(key) ? (Number.isFinite(value)) : true)))))
  )
}
return function check(value) {
  return check_MyUnion(value)
} 
      })()
