import chalk from "chalk";
import * as data from "./data/index.js";
import { theme } from "./theme/index.js";

export const text = Object.fromEntries(
  Object.entries(theme).map(([name, hex]) => [
    name,
    (text) => chalk.bgHex(hex).bold.black(` ${text} `),
  ])
);

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
  const amountOfResults = Object.keys(searchEverything(term)).length;

  if (!result) {
    return console.log(`${text.error("Zero")} Vim commands contain "${term}"`);
  }

  return console.log(`${text.success(
    amountOfResults
  )} Vim commands contain "${term}":
${result}`);
}

export function getOptions(mode, term) {
  if (term?.length) {
    const result = printLines(searchWithin(data[mode], term));
    const amountOfResults = Object.keys(searchWithin(data[mode], term)).length;

    if (!result) {
      return console.log(
        `${text.error("Zero")} Vim commands contain "${term}" in ${mode} mode`
      );
    }

    return console.log(`${text.success(
      amountOfResults
    )} Vim commands contain "${term}" in ${mode} mode:
${result}`);
  }

  return console.log(`${text.success(
    Object.keys(data[mode]).length
  )} Vim commands in ${mode} mode:
${printLines(data[mode])}`);
}
