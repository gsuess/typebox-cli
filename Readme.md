# TypeBox CLI
[![Test](https://github.com/gsuess/typebox-cli/actions/workflows/test.yml/badge.svg)](https://github.com/gsuess/typebox-cli/actions/workflows/test.yml)
[![Package Publication](https://github.com/gsuess/typebox-cli/actions/workflows/publish_package.yml/badge.svg)](https://github.com/gsuess/typebox-cli/actions/workflows/publish_package.yml)

## Description

CLI tool for various [TypeBox](https://github.com/sinclairzx81/typebox) and JSON Schema operations.

## Install

```bash
npm install -g typebox-cli
```

### Usage

#### Convert TypeScript types to TypeBox Schema

Input file (i.e. `types.ts`):
```ts
export type T = "test";
```
Run TypeBox Codegen:

```bash
typebox codegen TypeBox --source types.ts
```
Outputs:

```ts 
import { Type, Static } from '@sinclair/typebox'

export type T = Static<typeof T>
export const T = Type.String()
```

#### Convert TypeBox Schema into JSON schema

Input file (i.e. `typebox.ts`):
```ts 
import { Type } from "@sinclair/typebox";
export const T = Type.String();
```
Run JSON Schema extraction:

```bash 
typebox extract json --module typebox.ts -e T
```

Outputs:
```json 
{
  "$id": "T",
  "type": "string"
}
```

## Reference

### Commands

```bash 
# Extract - Extract JSON schema from exported TypeBox variables:
typebox extract json --module <module path>

# Codegen -- Generate Schema from either TypeScript types (using --source) or TypeBox schema (using --module):
typebox codegen <model-name> --source <source file> # Generate from TypeScript Types.
typebox codegen <model-name> --module <module path> # Generate from exported TypeBox Schema values.

# List available Codegen models:
typebox list

# Misc
typebox --version # Display current typebox version.
typebox --help # Help
```

### Dependencies

`typebox-cli` is based on these packages:

- [TypeBox](https://github.com/sinclairzx81/typebox) - Json Schema Type Builder with Static Type Resolution for TypeScript
- [TypeBox Codegen](https://github.com/sinclairzx81/typebox-codegen) - Code Generation Tools for TypeBox
- [jiti](https://github.com/unjs/jiti) - Module Loading
- [Commander](https://github.com/tj/commander.js) - CLI Interface

## License 

[MIT](LICENSE)