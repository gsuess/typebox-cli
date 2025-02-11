import { Argument, Command, Option, OptionValues } from "commander";
import { loadSchemaInModule } from "./loadSchemaInModule.js";
import {
  codegen,
  CodegenOptions as CodegenCodegenOptions,
  ModelName,
  modelNames,
} from "./codegen.js";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkg: unknown = require("../package.json");

export const program = new Command("typebox");

export const extractCommand = new Command("extract");

export const extractJsonCommand = new Command("json");

export const codgenCommand = new Command("codegen");

export const listModelsCommand = new Command("list");

const extract = {
  json(module: string, exportName: string) {
    return JSON.stringify(
      loadSchemaInModule(module).types.find(({ $id }) => $id === exportName),
      null,
      2,
    );
  },
} as const;

export interface ExtractionOptions extends OptionValues {
  module: string;
  export: string;
}

export interface CodegenOptions
  extends OptionValues,
    Pick<CodegenCodegenOptions, "modelName"> {}

program
  .description(
    "A CLI Tool to extract TypeBox JSON schema and TypeScript types.",
  )
  .version((pkg as { version: string }).version)
  .addCommand(listModelsCommand)
  .addCommand(extractCommand)
  .addCommand(codgenCommand);

extractCommand
  .description("Extract TypeBox schema from a TypeScript source file")
  .addCommand(extractJsonCommand);

const moduleOption = new Option(
  "-m, --module [module]",
  "Path to a TypeScript source file to be loaded as a module. This will be used as a source.",
);

const sourceOption = new Option(
  "-s, --source [source]",
  "Path to a TypeScript source file that contains TypeScript types to be parsed",
);

sourceOption.conflicts(moduleOption.name());
moduleOption.conflicts(sourceOption.name());

const exportNameOption = new Option(
  "-e, --export [name]",
  "Name of the exported variable to be extracted from the given module. This is only applicable with the `--module` option.",
);

exportNameOption.default("default", "The default export is used");

const codegenModelArg = new Argument(
  "<modelName>",
  `Name of the model to use for codegen.}`,
).choices(modelNames);

extractJsonCommand
  .description("Extract JSON schema from an exported TypeBox Schema")
  .addOption(moduleOption)
  .addOption(exportNameOption)
  .action(({ module, export: exportName = "default" }: ExtractionOptions) => {
    console.log(extract.json(module, exportName));
  });

listModelsCommand
  .description("Outputs a list of available models")
  .option("--json", "Outputs list in JSON format")
  .action(({ json }: OptionValues) =>
    console.log(json ? JSON.stringify(modelNames) : modelNames.join(" ")),
  );

codgenCommand
  .description("Generate code from TypeScript using typebox-codegen")
  .addArgument(codegenModelArg)
  .addOption(moduleOption)
  .addOption(sourceOption)
  .action(
    (
      modelName: ModelName,
      { source, module }: { source?: string; module?: string },
    ) => {
      console.log(codegen({ modelName, source, module }));
    },
  );
