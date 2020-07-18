import run, { Command } from "./run";
import load from "../load";

// Load commands at runtime
const commands = load<Command>(__dirname, "c.js");
run(process.argv.slice(2), commands);
