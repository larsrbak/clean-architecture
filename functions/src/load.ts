// Load modules in a directory.
// Used for cli and functions.
// Could very well be a package.

import glob from "glob";
import { resolve } from "path";
import camelcase from "camelcase";

/**
 * Deterministically name modules based on their path
 * @param file - path to file containing a module
 * @param extension
 * @returns {string}
 */
function createModuleName(file: string, extension: string) {
  return camelcase(
    file
      .split(extension) /* strip extension */
      .join("")
      .split("/") /* snake case */
      .join("_")
      .replace(".", "")
  );
}

/**
 * Create function that at runtime loads a module and deterministically assigns a name to it
 */
function createModuleLoader(folder: string, extension: string) {
  return function (exports: object, file: string) {
    const name = createModuleName(file, extension);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const module = require(resolve(folder, file));
    return { ...exports, [name]: module.default || module };
  };
}

/**
 * Load all modules in the folder with the extension
 * @returns an object of named modules with the specified extension
 */
export default function (folder: string, extension = ".f.js") {
  const files = glob.sync(`./**/*${extension}`, {
    cwd: resolve(folder),
    ignore: "./node_modules/**",
  });

  return files.reduce(createModuleLoader(folder, extension), {});
}
