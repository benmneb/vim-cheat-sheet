#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import { globalSearch, getOptions, text } from "./helpers.js";

program
  .option("-n, --normal [term]", "Normal mode")
  .option("-v, --visual [term]", "Visual mode")
  .option("-V, --visual-line [term]", "Visual-line mode")
  .option("-^v, --visual-block [term]", "Visual-block mode")
  .option("-gh, --select [term]", "Select mode")
  .option("-gH, --select-line [term]", "Select-line mode")
  .option("-R, --replace [term]", "Replace mode")
  .option("-:, --command-line [term]", "Command-line mode")
  .option("-Q, --ex [term]", "Ex mode")
  .option("-i, --insert [term]", "Insert mode")
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
      `${text.primary(
        "VIMCS"
      )} Search and browse Vim commands straight from the terminal`
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
