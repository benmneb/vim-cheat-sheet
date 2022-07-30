#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import { basics, modes } from "./options.js";
import { printLines, searchEverything } from "./helpers.js";

console.log(chalk.bgBlue("✌️ Vim Cheat Sheet for Noobs"));

program
  .option("-b, --basics [term]", "Basic commands")
  .option("-m, --modes [term]", "Mode selections")
  .parse();

const options = program.opts();

if (!Object.keys(options).length) {
  if (program.args.length) {
    const term = program.args[0];
    const result = printLines(searchEverything(term));

    if (!result) {
      console.log(`
  No commands with "${term}"`);
    } else {
      console.log(`
  Commands with "${term}":

    ${result}`);
    }
  } else {
    basics();
    modes();
  }
}

if (options.basics) basics(options.basics);
if (options.modes) modes(options.modes);
