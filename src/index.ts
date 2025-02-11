import process from "node:process";
import { program } from "./program.js";

export default function main(argv = process.argv) {
  return program.parse(argv);
}
