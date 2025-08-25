---
slug: ux-cli-tui-design
title: "UX in text-based and command-line applications"
tags: [UX, CLI, TUI]
pubDate: 2025-06-26
draft: true
---

Command-line applications (CLI), text-based user interfaces (TUI), terminal applications. There's a bunch of ways to refer to programs that run and live in your terminal. They've been around for almost as long as computers, are easier than ever to develop and are fairly hot topic right now, with LLM providers and tech companies releasing coding agents as CLI's. Claude Code, OpenAI Codex, Sourcegraph Cody and Opencode to name a few.

I've spend a considerable part of my programming career building user interfaces, and as such care quite a lot about UX and usability. And terminal applications is quite an interesting example, and a bit of a corner case here.

## Terminology

I'm not sure if there's an agreed-upon umbrella for applications that run in your terminal. And as with many things, there might not even exist a 100% correct answer. But for the purpose of this article:

- Terminal applications -> 'all of them'
- TUI -> Terminal applications that have an interface, are interactive (continue running until you quit them) as TUI (The terminal-nerds at [SST](https://sst.dev/) label OpenCode as a TUI fwiw)
- CLI -> Programs and scripts that run in the terminal. TODO: examples.

## CLI

<!-- TODO: improve wording -->

Let's start with talking about CLI's then. UX and CLI might feel somewhat at odds, contradictory or misplaced to some people ('some people' let's be honest is probably just developers). UX is a very misunderstood field, and is often wrongly used to describe things purely of a graphical- or visual nature (an app has 'good ux', when the meaning conveyed is 'your app looks good'). Defining UX is an entire post in itself, so I'll just go simple here; if something has 'good ux', it's easy/simple and joyful to use.

CLI's might not overlap very much with your typical web application, but there's still a huge difference in their ease of use.

- UNIX philosophy
- Common patterns; --help, --version, --verbose etc.
- Examples: parallel, GH,

## TUI

- make it intuitive to learn and use, documentation/manual should't be necessary (TIG example)
- instead of view-specific hotkeys, think in reusable patterns
- a for add, s for submit, d for delete, back/forward/enter, c for 'commit'? Reorder?
- consider just a single section: ux for interactive CLI's; either: 1. show hotkeys directly in UI 2 (open code, terminal shop). `/` section that displays available commands (like claude code) 3. reusable pattern, like I went with (+ small help section) - similar to tig. Tig doesn't display the hotkey to help though, and the section is huge (2 pages at least on a mac 13")
- Most general UX principles still hold true; add friction on delete project for example (type project name)

## Building CLI's today

- React-ink
- https://github.com/sst/opentui
- Go
- Navigation? Router? Stack-based approach?

## Links

- https://clig.dev/
- https://en.wikipedia.org/wiki/Unix_philosophy "expect the output of every program to become the input to another, as yet unknown, program."
- https://terminaltrove.com/
- http://www.catb.org/esr/writings/taoup/html/
- https://github.com/lirantal/nodejs-cli-apps-best-practices

<!-- TODO: if I mention own work -->
<!-- - Always good to do dog feeding -->
