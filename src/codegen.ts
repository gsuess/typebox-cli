import * as Codegen from "@sinclair/typebox-codegen";
import fs from "node:fs";
import { loadSchemaInModule } from "./loadSchemaInModule.js";
import { TypeBoxModel, TypeScriptToTypeBox } from "@sinclair/typebox-codegen";

type GetModelName<ConverterName extends string> =
  ConverterName extends `ModelTo${infer M}` ? M : never;

type Models = {
  [M in GetModelName<keyof typeof Codegen>]: `ModelTo${M}`;
};

export type ModelName = keyof Models;

export const modelNames = Object.keys(Codegen)
  .filter((key): key is `ModelTo${ModelName}` => key.startsWith("ModelTo"))
  .map(
    (key): GetModelName<typeof key> =>
      key.substring("ModelTo".length) as GetModelName<typeof key>,
  ) satisfies ModelName[];

export interface CodegenOptions {
  module?: string;
  source?: string;
  modelName: ModelName;
}

export function codegen({ source, module, modelName }: CodegenOptions): string {
  const ts = source ? fs.readFileSync(source, { encoding: "utf8" }) : undefined;

  if (modelName === "TypeBox" && ts) {
    return TypeScriptToTypeBox.Generate(ts);
  }

  const model: TypeBoxModel | undefined = module
    ? loadSchemaInModule(module)
    : ts
      ? Codegen.TypeScriptToModel.Generate(ts)
      : undefined;

  if (!model) {
    throw new Error(
      "No source model specified. Either specify a typescript source or a typescript module with TypeBox schema",
    );
  }

  const generator = Codegen[`ModelTo${modelName}`];

  if (!generator) {
    throw new Error(`Could not find generator for model ${modelName}`);
  }

  return generator.Generate(model);
}
