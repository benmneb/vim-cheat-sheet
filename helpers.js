import chalk from "chalk";
import * as allData from "./data.js";

function line(keys, description) {
  return `${chalk.bgGray(` ${keys} `)} ${description}`;
}

export function printLines(data) {
  return Object.entries(data)
    .map(([key, value]) => line(key, value))
    .join(`\n    `);
}

export function searchWithin(data, term) {
  return Object.fromEntries(
    Object.entries(data).filter(
      ([key, value]) => key.includes(term) || value.includes(term)
    )
  );
}

function searchEverything(term) {
  const mergedData = Object.assign({}, ...Object.values(allData));
  return Object.fromEntries(
    Object.entries(mergedData).filter(
      ([key, value]) => key.includes(term) || value.includes(term)
    )
  );
}

export function globalSearch(term) {
  const result = printLines(searchEverything(term));

  if (!result) {
    return console.log(`
  No commands with "${term}"`);
  }

  return console.log(`
  Commands with "${term}":

    ${result}`);
}
