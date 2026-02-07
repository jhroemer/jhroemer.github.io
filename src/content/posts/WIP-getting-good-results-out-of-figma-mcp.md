---
slug: "getting-good-results-out-of-figma-mcp"
title: "Getting good results out of Figma MCP"
tags: [AI]
pubDate: 2025-12-20
draft: true
---

Alternative titles:
- The truly expensive nested for-loop
- Prototyping with Figma MCP and the nested agent loop

- Using agents for throwaway prototypes is one of the things most people agree on being useful. The idea here was to have a fairly comprehensive project in Figma, and be able to spin it up quite quickly. And potentially in a different permutation the following week/day.
- in very simplified terms, agent = llm in a for-loop
    - Add section around different agentic patterns
- The technique is pretty dumb, but in software terms dumb is not necessarily a bad thing. It's very simple that's for sure. It doesn't try to make agents do things in parallel, which is something I don't have much faith in. It's certainly not something I would run and pay for out of my own pocket, but I also have a family to feed. 
- Ralph is then the extra layer around the agent
- Lots of hype around things like this. I'm still not really sure
- Iterations around these things are frustrating due to the non-deterministic nature
    - Evals is the way to solve it, but restarting this fuzzy machine doesn't necessarily teach you that much


# Framing

I really dislike the ralph name. 
The meme aspect bothers me. 
Making all of it into a joke.
The memecoin crypto pump'n'dump schemes certainly haven't improved my view on it. 
So in this article I'll simply refer to the technique as The Expensive Loop (TEL). 

- Disposable prototype for early feedback on a bigger upcoming project where lots of things are not yet set in stone.
- You might thinkAI is probably able to build things correctly, if given correct specification, proper guardrails and so on. So what we're working on here is an artifact that will allow us to come up with the correct specification of this product.
- We're not building a compiler or a browser engine here. But frontend is not necessarily that easy to get right down to the pixel either. 
- Experimenting with generating the PRD file from Figma. One source of truth, and also saving time. You're generating a prototype, if it's not fast then you loose the whole idea behind it.

I'm personally in favor of low-fidelity designs for this purpose.
Like a quick idea sketched out onto a napkin. Or rough drawing on a whiteboard. 
Mainly because I find them more likely to yield the kind of feedback you're looking for. 
Instead of getting feedback along the lines of "the color on this button should be darker", or whatever.
I might be a bit biased due to having worked with technical users for a few products, who are used to filling out the blanks.
So I acknowledge that this might be hard or distracting for non-technical users to relate to.
But I also find that the middle ground, having something that is like the real thing, but very rough around the edges might be the worst of both worlds. 
This is what I've seen from Figma make for example. It's quite close, but there's imperfections all over the place, which are distracting. 

So this experiment is about getting to the other end of the spectrum, to something that really feels like the real thing, and testing with that.

# Outcome

- Start at the beginning, with the outcome
- We got very accurate results, could generate the thing in ~15 min
- Code quality depends on the codebase. The agent will pick up on existing patterns, this is not new.

# ..

- https://modelcontextprotocol.io/docs/tools/inspector
- MCP Jam
- https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- Which optimizations do agents already do, w. caching and so forth?
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
- Sensible idea. I don't really believe much in running things in parallel anyway. It might be smart in some cases, but I think the amount of problems that might qualify for such an approach are few, and besides some of this stuff has to go through a human brain at some point anyway. 
- run CC as a cli https://code.claude.com/docs/en/cli-reference
You will need a few flags, like --permission-mode acceptEdits and --output-format stream-json (in combination with --verbose)
TODO: might make sense to write output to terminal (to monitor that stuff's happening) + to file, so that you can later analyze what actually happened.
- data, results, precision, errors?
