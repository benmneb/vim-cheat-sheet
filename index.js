#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import { basics, modes } from "./options.js";
import { globalSearch } from "./helpers.js";

console.log(chalk.bgBlue("✌️ Vim Cheat Sheet for Noobs"));

program
  .option("-b, --basics [term]", "Basic commands")
  .option("-m, --modes [term]", "Mode selections")
  .parse();

const options = program.opts();
const hasPassedOptions = Object.keys(options).length;
const searchingGlobally = program.args.length;

if (!hasPassedOptions) {
  if (searchingGlobally) {
    globalSearch(program.args[0]);
  } else {
    basics();
    modes();
  }
}

if (options.basics) basics(options.basics);
if (options.modes) modes(options.modes);
