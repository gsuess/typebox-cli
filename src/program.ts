import { Command } from "commander";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkg: unknown = require("../package.json");

export const program = new Command("typebox");

program
  .description(
    "A CLI Tool to extract TypeBox JSON schema and TypeScript types.",
  )
  .version((pkg as { version: string }).version);
