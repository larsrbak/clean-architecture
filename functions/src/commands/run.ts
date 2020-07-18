export interface Command {
  (...args: string[]): Promise<unknown>;
}

/**
 * List available commands
 * @param commands
 */
function list(commands: { [key: string]: Command }) {
  console.log("Available commands are:");
  Object.keys(commands).forEach(function (command) {
    console.log(`  - ${command}`);
  });
}

/**
 * Given a list of arguments run the corresponding command
 * @param name
 * @param rest
 * @param commands
 */
export default async function run(
  [name, ...rest]: string[],
  commands: { [key: string]: Command }
): Promise<void> {
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
