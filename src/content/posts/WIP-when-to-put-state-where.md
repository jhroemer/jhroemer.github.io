---
slug: when to put state where
title: "When to put state where?"
tags: [Web development]
pubDate: 2023-12-27
draft: true
---

It is difficult to know if state should go into the URL, be local (temporary) state or persist (w. local storage for example)

### URL state

- Often the best choice
- Integrating with the browser chrome is often the right thing to do
- "guts-out", so you have to design it nicely
- Simple model, URL simply maps to state
- Can be tricky if the system isn't stateless, then you cannot simply map the url to state, but have to consider what the previous state was.

### Persistent state: Github PR review example

- Some use cases
- Can be confusing/unclear

### Local state

- ephemeral
- Something temporary
- Typically not the best choice
