#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import * as availableOptions from "./options.js";
import { globalSearch } from "./helpers.js";

console.log(chalk.bgBlue("✌️ Vim Cheat Sheet for Noobs"));

program
  .option("-b, --basics [term]", "Basic commands")
  .option("-m, --modes [term]", "Mode selections")
  .parse();

const options = program.opts();
const passedOptions = Object.keys(options);
const searchingGlobally = program.args.length;

if (!passedOptions.length) {
  if (searchingGlobally) {
    globalSearch(program.args[0]);
  } else {
    // show welcome message / instructions? or list all commands by default?
    availableOptions.basics();
    availableOptions.modes();
  }
}

passedOptions.map((currentOption) =>
  availableOptions[currentOption](options[currentOption])
);
