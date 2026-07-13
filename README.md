[한국어](README.ko.md) | English

# Simple Homepage
A simple homepage plugin that behaves like a web browser.

## Motivation
I use an index note as my homepage. I wanted this homepage feature to work the same way a web browser does, paired with a keyboard shortcut. A new tab and the homepage are separate concerns.

[obsidian-homepage](https://github.com/novov/obsidian-homepage) by novov likely already covers what most people need. This plugin, however, was built as one piece of a larger workflow I have in mind.

## Features

### Current
- **Command**: Provides a command to open the homepage.
  - Running this command opens the homepage regardless of whether a tab with the homepage already open exists.
- **Startup**: Automatically opens the homepage when starting Obsidian with only an empty tab present.

### Deprecated
- ~~Ribbon icon~~
  - Since I use a keyboard shortcut, I felt the ribbon icon was unnecessary.

## Todo: Done
- [x] Open the homepage when starting with an empty tab
- [x] Improve open performance

## Acknowledgements
Inspired by [obsidian-homepage](https://github.com/novov/obsidian-homepage) by novov. As this is my first Obsidian plugin, I referenced novov's code quite a bit.
