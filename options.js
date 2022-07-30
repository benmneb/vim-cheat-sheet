import { printLines, searchWithin } from "./helpers.js";
import * as data from "./data.js";

export function basics(term) {
  if (term?.length) {
    const result = printLines(searchWithin(data.basics, term));

    if (!result) {
      return console.log(`
  No commands with "${term}" in Basics
      `);
    }

    return console.log(`
  Commands with "${term}" in Basics:

    ${result}`);
  }

  return console.log(`
  Basics:
  
    ${printLines(data.basics)}`);
}

export function modes(term) {
  if (term?.length) {
    const result = printLines(searchWithin(data.modes, term));

    if (!result) {
      return console.log(`
  No commands with "${term}" in Modes
      `);
    }

    return console.log(`
  Commands with "${term}" in Modes:

    ${result}`);
  }

  return console.log(`
  Modes:  

    ${printLines(data.modes)}`);
}
