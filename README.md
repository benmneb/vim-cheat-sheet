# VIMCS

#### Vim Cheat Sheet / Vim Convenient Search

Features:
- Search for commands
- Search for commands by mode
- View all commands
- View commands by mode

...all without leaving your terminal 🤯

## Install

`npm i -g vimcs` or `yarn global add vimcs` etc
(_...NodeJS is a dependency_)

## Usage

Search:
- `vimcs [term]` returns all commands that contain [term]
- `vimcs [term] --visual` returns all commands that contain [term] in visual mode
- `vimcs --visual [term]` returns all commands that contain [term] in visual mode

Browse:
- `vimcs --visual` returns all commands for visual mode
- `vimcs --visual --normal` returns all commands for visual and normal modes (chain as many as you like)

Search & Browse:
- `vimcs [term] --visual --normal` returns all commands containing [term] in visual and normal modes
- `vimcs --visual [term] --normal [anotherTerm]` returns all commands from visual mode containing [term] and all commands from normal mode contianing [anotherTerm]

API:
`vimcs [term?] [<option [term?]>...?]`

`term` can be a single word or "multiple words quoted"

`option` can be...

## Liscense

MIT License

Copyright (c) 2022 [benmneb](https://github.com/benmneb)

