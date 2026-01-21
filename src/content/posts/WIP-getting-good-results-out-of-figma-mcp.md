---
slug: "getting-good-results-out-of-figma-mcp"
title: "Getting good results out of Figma MCP"
tags: [AI]
pubDate: 2025-12-20
draft: true
---

# Framing

- Disposable prototype for early feedback on a bigger upcoming project where lots of things are not yet set in stone.
- You might thinkAI is probably able to build things correctly, if given correct specification, proper guardrails and so on. So what we're working on here is an artifact that will allow us to come up with the correct specification of this product. 

I'm personally in favor of low-fidelity designs for this purpose.
Like a quick idea sketched out onto a napkin. Or rough drawing on a whiteboard. 
Mainly because I find them more likely to yield the kind of feedback you're looking for. 
Instead of getting feedback along the lines of "the color on this button should be darker", or whatever.
I might be a bit biased due to having worked with technical users for a few products, who are used to filling out the blanks.
So I acknowledge that this might be hard or distracting for non-technical users to relate to.
But I also find that the middle ground, having something that is like the real thing, but very rough around the edges might be the worst of both worlds. 
This is what I've seen from Figma make for example. It's quite close, but there's imperfections all over the place, which are distracting. 

So this experiment is about getting to the other end of the spectrum, to something that really feels like the real thing, and testing with that.

# ..

- https://modelcontextprotocol.io/docs/tools/inspector
- https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents

Out of the box behaviour of claude code and Figma will give you a very general response, which in many cases is likely to be much more innaccurate than it needs to be.

```jsx
// Example return from get_design_context
const Button = () => {
    return (
    <button>hey</button>
    )
}
// + comments to agent
```

Design context quite bloated, feels very redundant/lossy for large pieces of work
Get metadata more useful, but is needs augmenting. 

# Running claude in a loop

- combine with the ralph wiggum technique
Hyped a lot RN, to the point of having a memecoin
Haven't actually seen anything built with it. Saw Matt Pocock's video, among other things, but he only showcases running a single interactive session with a very simple feature.
- run CC as a cli https://code.claude.com/docs/en/cli-reference
You will need a few flags, like --permission-mode acceptEdits and --output-format stream-json (in combination with --verbose)
TODO: might make sense to write output to terminal (to monitor that stuff's happening) + to file, so that you can later analyze what actually happened.
- data, results, precision, errors?
