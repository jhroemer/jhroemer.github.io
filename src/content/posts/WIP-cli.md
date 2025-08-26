---
slug: ux-in-terminal-applications
title: "UX in terminal applications"
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
- CLI -> Programs and scripts that run in the terminal. Hard to get around them if you're a developer, the Git-, Docker- or npm CLI for example.

## CLI

<!-- TODO: improve wording -->

Let's start with talking about CLI's then. UX and CLI might feel somewhat at odds, contradictory or misplaced to some people ('some people' let's be honest is probably just developers). UX is a very misunderstood field, and is often wrongly used to describe things purely of a graphical- or visual nature (an app has 'good ux', when the meaning conveyed is 'your app looks good'). Defining UX is an entire post in itself, so I'll just stay simple here; if something has 'good ux', it's intuitive and sometimes even joyful to use.

CLI's might not overlap very much with your typical web application, but there's still a difference in their ease of use. As with UX there's common, familiar patterns you can lean on to make things intuitive. For example, instead of relying on args you should use flags. You should include common flags that help users navigate and understand the application, such as `--help` and `--version`.

When discussing CLI's we often end up talking about the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy). A huge topic worthy of books. A core idea is that you should build your program as a lego brick. It should be limited to solving one thing, and the way to solve more complex tasks is to pipe it together with other lego bricks. Allowing your program to accept text input and making it emit text output facilitates tis.

Overall, CLI's are well-documented and a well understood subject. As such there's lots of very good and extensive documentation, which I will simply reference here:

- https://clig.dev/
- http://www.catb.org/esr/writings/taoup/html/

## TUI

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
