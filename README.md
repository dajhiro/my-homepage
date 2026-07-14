[한국어](https://github.com/dajhiro/obsidian-simple-homepage/blob/master/README.ko.md) | English

# Simple Homepage

A simple homepage plugin that behaves like a web browser.

## Motivation

I use an index note as my homepage. I wanted this homepage feature to work the same way a web browser does, paired with a keyboard shortcut. A new tab and the homepage are separate concerns.

[obsidian-homepage](https://github.com/novov/obsidian-homepage) by novov likely already covers what most people need. This plugin, however, was built as one piece of a larger workflow I have in mind.

## Installation

### From within Obsidian

1. Open **Settings → Community plugins**.
2. Select **Browse** and search for "Simple Homepage".
3. Select **Install**, then **Enable**.

### Manual installation

1. Download `main.js` and `manifest.json` from the [latest release](https://github.com/dajhiro/obsidian-simple-homepage/releases).
2. Create a folder named `simple-homepage` inside your vault's `.obsidian/plugins/` folder.
3. Copy the downloaded files into that folder.
4. Reload Obsidian, then enable **Simple Homepage** in **Settings → Community plugins**.

## Usage

1. Open **Settings → Simple Homepage**.
2. Set **Path** to the note you want to use as your homepage.
3. Optionally, enable **Startup** to open the homepage automatically when Obsidian starts with an empty tab.
4. Use the **Open homepage** command (via the command palette or a keyboard shortcut) to open the homepage at any time.

## Features

### Current

- **Command** — Provides a command to open the homepage.
  - Running this command opens the homepage regardless of whether a tab with the homepage already open exists.
- **Startup** — Automatically opens the homepage when starting Obsidian with only an empty tab present.

### Deprecated

- ~~Ribbon icon~~
  - Since I use a keyboard shortcut, I felt the ribbon icon was unnecessary.

## Todo: Done

- [x] Open the homepage when starting with an empty tab
- [x] Improve open performance

## Acknowledgements

Inspired by [obsidian-homepage](https://github.com/novov/obsidian-homepage) by novov. As this is my first Obsidian plugin, I referenced novov's code quite a bit.
