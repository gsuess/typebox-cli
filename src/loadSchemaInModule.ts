import path from "node:path";
import { createJiti } from "jiti";
import { TypeGuard } from "@sinclair/typebox";
import { TypeBoxModel } from "@sinclair/typebox-codegen";

export function loadSchemaInModule(
  modulePath: string,
  jiti = createJiti(process.cwd(), {
    extensions: [".ts", ".js"],
    interopDefault: true,
  }),
): TypeBoxModel {
  const absolutePath = path.resolve(process.cwd(), modulePath);
  const module = jiti(absolutePath) as unknown;

  if (typeof module !== "object" || module === null) {
    throw new Error("Module must be an object");
  }

  return {
    types: Object.entries(module)
      .filter((exp): exp is [string, TypeBoxModel["types"][number]] =>
        TypeGuard.IsSchema(exp[1]),
      )
      .map(([$id, schema]) => ({ $id, ...schema })),
  };
}
