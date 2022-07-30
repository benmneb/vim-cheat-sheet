import chalk from "chalk";
import * as data from "./data.js";

function line(keys, description) {
  return `${chalk.bgGray.bold(` ${keys} `)} ${description}`;
}

export function printLines(data) {
  return Object.entries(data)
    .map(([key, value]) => line(key, value))
    .join(`\n`);
}

export function searchWithin(data, term) {
  return Object.fromEntries(
    Object.entries(data).filter(
      ([key, value]) => key.includes(term) || value.includes(term)
    )
  );
}

function searchEverything(term) {
  const mergedData = Object.assign({}, ...Object.values(data));
  return Object.fromEntries(
    Object.entries(mergedData).filter(
      ([key, value]) => key.includes(term) || value.includes(term)
    )
  );
}

export function globalSearch(term) {
  const result = printLines(searchEverything(term));

  if (!result) {
    return console.log(`No Vim commands contain "${term}"`);
  }

  return console.log(`Vim commands containing "${term}":

${result}`);
}

export function getOptions(mode, term) {
  if (term?.length) {
    const result = printLines(searchWithin(data[mode], term));

    if (!result) {
      return console.log(`No Vim commands contain "${term}" in ${mode} mode`);
    }

    return console.log(`Vim commands containing "${term}" in ${mode} mode:

${result}`);
  }

  return console.log(`Vim commands in ${mode} mode:
  
${printLines(data[mode])}`);
}
