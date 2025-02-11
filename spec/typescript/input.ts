export type MyString = string;
export type MyNumber = number;
export type MyBoolean = boolean;
export type MyLiteral = "literal";
export type MyUnion =  number | "someliteral" | Record<string, number>;
export type MyObject1 = {
    prop1: string;
    prop2: string;
};
export type MyObject2 = {
    prop3: number;
};