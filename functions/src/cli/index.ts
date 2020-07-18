// Idea:
// Load commands like functions.
// Allow for listing of commands

import load from "../load";

interface Command {
  (...args: string[]): Promise<unknown>;
}

function list(commands: { [key: string]: Command }) {
  console.log("Available commands are:");
  Object.keys(commands).forEach(function (command) {
    console.log(`  - ${command}`);
  });
}

async function run([name, ...rest]: string[]) {
  const commands = load(__dirname, "c.js");

  if (!name) {
    console.log(`You must specify a command.`);
    return list(commands);
  }

  const command = commands[name];

  if (!command) {
    console.log(`Command ${name} not found.`);
    return list(commands);
  }

  await command(...rest);
}

run(process.argv.slice(2));
