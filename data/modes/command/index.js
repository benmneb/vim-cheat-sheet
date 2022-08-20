export const command = {
  "CTRL-A":
    "do completion on the pattern in front of the cursor and insert all matches",
  "CTRL-B": "cursor to begin of command-line",
  "CTRL-C": "same as <Esc>",
  "CTRL-D": "list completions that match the pattern in front of the cursor",
  "CTRL-E": "cursor to end of command-line",
  "CTRL-F":
    "default value for 'cedit': opens the command-line window; otherwise not used",
  "<BS>": "delete the character in front of the cursor",
  "{char1} <BS> {char2}": "enter digraph when 'digraph' is on",
  "CTRL-H": "same as <BS>",
  "<Tab>":
    "if 'wildchar' is <Tab>: Do completion on the pattern in front of the cursor",
  "<S-Tab>": "same as CTRL-P",
  wildchar:
    "Do completion on the pattern in front of the cursor (default: <Tab>)",
  "CTRL-I": "same as <Tab>",
  "<NL>": "same as <CR>",
  "CTRL-J": "same as <CR>",
  "CTRL-K {char1} {char2}": "enter digraph",
  "CTRL-L":
    "do completion on the pattern in front of the cursor and insert the longest common part",
  "<CR>": "execute entered command",
  "CTRL-M": "same as <CR>",
  "CTRL-N":
    "after using 'wildchar' with multiple matches: go to next match, otherwise: same as <Down>",
  "CTRL-P":
    "after using 'wildchar' with multiple matches: go to previous match, otherwise: same as <Up>",
  "CTRL-Q": "same as CTRL-V, unless it's used for terminal control flow",
  'CTRL-R {0-9a-zh"%#*:= CTRL-F CTRL-P CTRL-W CTRL-A}':
    "insert the contents of a register or object under the cursor as if typed",
  'CTRL-R CTRL-R {0-9a-z"%#*:= CTRL-F CTRL-P CTRL-W CTRL-A}':
    "insert the contents of a register or object under the cursor literally",
  "CTRL-S": "(used for terminal control flow)",
  "CTRL-U": "remove all characters",
  "CTRL-V":
    "insert next non-digit literally, insert three digit decimal number as a single byte.",
  "CTRL-W": "delete the word in front of the cursor",
  "CTRL-Y": "copy (yank) modeless selection",
  "<Esc>": "abandon command-line without executing it",
  "CTRL-[": "same as <Esc>",
  "CTRL-\\ CTRL-N": "go to Normal mode, abandon command-line",
  "CTRL-\\ CTRL-G":
    "go to mode specified with 'insertmode', abandon command-line",
  "CTRL-\\ e {expr}": "replace the command line with the result of {expr}",
  "CTRL-]": "trigger abbreviation mappings",
  "CTRL-_": "when 'allowrevins' set: change language (Hebrew, Farsi)",
  "<Del>": "delete the character under the cursor",
  "<Left>": "cursor left",
  "<S-Left>": "cursor one word left",
  "<C-Left>": "cursor one word left",
  "<Right>": "cursor right",
  "<S-Right>": "cursor one word right",
  "<C-Right>": "cursor one word right",
  "<Up>":
    "recall previous command-line from history that matches pattern in front of the cursor",
  "<S-Up>": "recall previous command-line from history",
  "<Down>":
    "recall next command-line from history that matches pattern in front of the cursor",
  "<S-Down>": "recall next command-line from history",
  "<Home>": "cursor to start of command-line",
  "<End>": "cursor to end of command-line",
  "<PageDown>": "same as <S-Down>",
  "<PageUp>": "same as <S-Up>",
  "<Insert>": "toggle insert/overstrike mode",
  "<LeftMouse>": "cursor at mouse click",
};
