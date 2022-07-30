#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import { globalSearch, getOptions } from "./helpers.js";

program
  .option("-i, --insert [term]", "Insert mode")
  .option("-v, --visual [term]", "Visual mode")
  .option("-V, --line [term]", "Visual-line mode")
  .option("-^v, --block [term]", "Visual-block mode")
  .option("-R, --replace [term]", "Replace mode")
  .option("-n, --normal [term]", "Normal mode")
  .option("-:, --command [term]", "Command-line mode")
  .parse();

const options = program.opts();
const passedOptions = Object.keys(options);
const isSearching = program.args.length;
const searchTerm = program.args?.[0];

if (!passedOptions.length) {
  if (isSearching) {
    globalSearch(searchTerm);
  } else {
    console.log(
      chalk.bgGreen.bold(" VIMCS "),
      "Search and browse Vim commands straight from the terminal"
    );
  }
}

if (passedOptions.length) {
  if (isSearching) {
    passedOptions.map((currentOption) => getOptions(currentOption, searchTerm));
  } else {
    passedOptions.map((currentOption) =>
      getOptions(currentOption, options[currentOption])
    );
  }
}
