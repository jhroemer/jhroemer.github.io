---
slug: ux-and-terminal-applications
title: "UX and terminal applications"
tags: [UX, CLI, TUI, terminal]
pubDate: 2025-08-28
draft: true
---

Command-line applications (CLI), text-based user interfaces (TUI), terminal applications. There's a bunch of ways to refer to programs that run and live in your terminal. They've been around for almost as long as computers, are easier than ever to develop and are fairly hot topic right now, with LLM providers and tech companies releasing terminal UI's that let you manage coding agents. [Claude Code](https://www.anthropic.com/claude-code) (Anthropic), [Codex](https://openai.com/codex/) (OpenAI), [Cody](https://sourcegraph.com/cody) (SourceGraph) and [opencode](https://opencode.ai/) (SST) to name a few.

I care a lot about UX and usability, I enjoy using terminal applications, and I believe the UX angle on terminal UI's is somewhat underappreciated and sparingly covered. "Wouldn't you call that developer experience (DX)?" you might say, but frankly I think DX, while overlapping, is a somewhat different topic.

## Terminology

Some terminology for the purpose of this article.

**Terminal applications**: 'all of them'

**Command Line Application (CLI)**: Programs and scripts that run in the terminal. Hard to get around them if you're a developer, the Git-, Docker- or npm CLI for example.

**Terminal/Text-based User Interface (TUI)**: Terminal applications that have an interface, are interactive (continue running until you quit them)

I also found [this](https://itsfoss.com/gui-cli-tui/) article on itsfoss.com quite helpful at explaining the differences.

## CLI

UX and CLI's might feel somewhat at odds, contradictory or misplaced. UX is a very misunderstood field, and is often wrongly used to describe things purely of a graphical- or visual nature (an app has 'good ux', when the meaning conveyed is 'your app looks good'). Defining UX is an entire post in itself, so I'll just stay simple and dumb it down here; if something has 'good ux', it's intuitive and sometimes even joyful to use.

CLI's might not overlap very much with your typical web application, but there's still a difference in their ease of use. As with UX there's common, familiar patterns you can lean on to make things intuitive. As an example, you should include common flags that help users navigate and understand the application, such as `--help` and `--version`. You should rely on [flags over args](https://clig.dev/#arguments-and-flags). And so forth.

When discussing CLI's we often end up talking about the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy). A huge topic worthy of books. A core idea is that you should build your program as a lego brick. It should be limited to solving one thing, and the way to solve more complex tasks is to pipe it together with other lego bricks. Allowing your program to accept text input and making it emit text output facilitates this.

Overall, CLI's are well-documented and a well understood subject. As such there's lots of very good and extensive documentation. I found [clig.dev](https://clig.dev/) particularly well made.

## TUI

<!-- TODO: terminal.shop "screenshot" -->

Text-based user interfaces (TUI) are significantly less documented. In contrary to web interfaces, they also rely entirely (mostly at least) on keyboard interaction, as opposed to point-and-click interaction, which is much more intuitive.

Again, Good design practice still apply. Obviously. Use contrast (color, size) to guide users and highlight importance. Position in a way that makes it easy to find what users are looking for. Add friction around destructive actions, and remove it when it makes things cumbersome. This all doesn't change, it's just applied in a different context.

Now the more unique challenge to TUI's is navigation. The absence of point-and-click means that users need to know which of the 80-100 (plus combinations) of keys to press. I've used (the awesome) [Tig](https://jonas.github.io/tig/) daily for years, but I probably only use 20% of what it can do because my mind cannot hold all the keybindings (admittedly, maybe I'm just slow, unwilling to go much beyond defaults or a combination). I only recently found out that Tig has a help section with the keybindings, which conveniently opens on pressing 'h' (reusable pattern, great!). On the flip side there's around 100 keybindings, so information overload kicks in for a non-power user like me.

So what I'm getting at? TUI can be intuitive to use, in terms of navigation and overall usage, and there's great examples of how to do that. I've tried boiling navigation down to three different patterns that you can use, sometimes in combination to achieve exactly that:

**Put it right there where you need it**

You can simply show the hotkey where it's needed. [Terminal.shop](https://www.terminal.shop/) is a great example of this: the 'header' links simply have the hotkey next to the section: 's' for shop, 'a' for account, 'c' for cart, 'r' to change region, 'q' for quit. Both simple and effective. It fits really well, since the TUI is an online shop, and you already asked users to ssh into it instead of simply opening it in your browser, so you don't want to add even more friction. What a cool project. Check it out if you haven't already.

This approach clearly has its limitations though. Showing the hotkeys next to what they activate only works if they map to something directly in the interface, which is not always the case. The approach might also not scale for something more complex. But for something like terminal.shop it works perfectly.

**Reusable patterns**

This one's sort of obvious when you think about it. If an entity or 'link' is highlighted in a TUI and you click enter, what then happens? Well you 'select' it, navigate there, or something along those lines, right? This is the obvious example, but we should use reusable patterns as much as we can. I'm building a small application right now for example, and many of the views have actions in common: you can often add an entity in a view, so let's use 'a' for that. Deletion is also common, let's use 'd' for that. Completion -> 'd'. "Go back" -> 'q'. And so forth. You have the chance to build up some kind of vocabulary here, so that users don't have to learn something new across different views. Use it to your advantage.

**Help/hotkey section**

- Already mentioned Tig's "h for help", which is great, but there's a much better variant (help section, but per view - shorter list, relevant shortcuts).
- All shortcuts listed at the bottom: Nano, HTOP
- consider just a single section: ux for interactive CLI's; either: 1. show hotkeys directly in UI 2 (open code, terminal shop). `/` section that displays available commands (like claude code) 3. reusable pattern, like I went with (+ small help section) - similar to tig. Tig doesn't display the hotkey to help though, and the section is huge (2 pages at least on a mac 13")

## Building CLI's today

- React-ink
- https://github.com/sst/opentui
- Go
- Navigation? Router? Stack-based approach?

## Links

- https://en.wikipedia.org/wiki/Unix_philosophy "expect the output of every program to become the input to another, as yet unknown, program."
- https://terminaltrove.com/
- http://www.catb.org/esr/writings/taoup/html/
- https://github.com/lirantal/nodejs-cli-apps-best-practices

<!-- TODO: if I mention own work -->
<!-- - Always good to do dog feeding -->
