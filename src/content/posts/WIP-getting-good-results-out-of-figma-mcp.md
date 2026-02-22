---
slug: "on-generating-prototypes-in-2026"
title: "On generating prototypes in 2026"
tags: [AI]
pubDate: 2026-02-21
draft: true
---

I've been sitting on this post for months now. It's about AI and prototypes, but I havent' really been able to find the correct angle. As I'm writing this, the current draft is 500+ line long dump of different thoughts and references. Good stuff in between - not a blog post, but a frustrating mess of slightly organized content. Today the angle was staring into my face as I was chilling with my faithful Nintendo Switch.

I play a computer game called "Slay The Spire" sometimes. It's amazingly good, but also addictive, so I'm not sure I would recommend it. It's a type of game called a "[Roguelike](https://en.wikipedia.org/wiki/Roguelike)", which among other things means that if your character dies at some point you have to start all over. That sounds more rough than it is since you can finish a run of the game in 60-90 minutes. It's a card game, and you have to play against increasingly difficult opponents, receiving new cards along the way which you assemble to an optimal deck. The game is hard. And beating the game on normal mode is one thing, but it's only after beating the normal mode that the real fun starts. Now you can start playing "ascensions". There's 20 and you can start with level 1. Each level makes the game slightly (or much) harder. Safe to say ascension 20 is incredibly difficult to beat.

You might be asking yourself why I'm rambling about a computer game on a developer blog? 
<!-- TODO: improve -->
I'll tell you why. I think the game is a pretty helpful parallel to the current AI situation.

If you want to beat ascension 20 there's something very difficult you need to learn. The different characters in the game have optimal decks you can put together. Often having fewer cards is better, since it becomes easier to play cards together that have synergies. So you quickly learn to spot these optimal decks and collecting towards them, leaving less desirable cards that are not good later in the game uncollected. But on the harder ascensions this is no longer viable. The game is difficult right from the beginning, and collecting for a good end-game deck means you die quickly, and have to start all over. So what you need to do is to balance the act of having some optimal deck in mind, but also collect cards that are good at exactly the current stage of the game. And that's actually very difficult.

# ai

The original post was about trying out some of the recent AI hype. I've been using Claude Code/Opencode for quite a while now. Powerful tools, that are very helpful at analyzing large amounts of text, onboarding new codebases, and making you type less stuff by hand. I don't vibe-code, in the sense that you don't read the code you're generating. I've used it with myself in the loop always. 

Now in my current team we're kicking off a new project. We have a fairly comprehensive Figma design with a new app in it. It's 6 pages and a fair amount of functionality, and we don't really know how much of it we'll end up building. I'm very much into early-feedback and very iterative development with very continous releases and a short feedback loop. Without AI we would probably have gone a traditional route of testing mockups or a clickable prototype with users. 

<!-- where do napkin sketches fit in? -->

But now I saw a good opportunity of doing something with somewhat longer running agents than what I've otherwise done. Have the agent run in a Ralph Wiggum loop, and generate something functionally solid and design-accurate, to be able to solicit very real feedback from users. 

Now I'll just stop for a minute here for two reasons. Firstly, can we agree that the Ralph Wiggum name is simply an abomination? And the guy is surely much smarter than I am, but I don't think that means he should claim to have single-handedly "killed software engineering", nor should he probably be supporting pump and dump memecoins.
Secondly, I've worked with products that had very technical users, and for that we actually found low-fidely/napkin-type sketches (as opposeded to more detailed mockups/prototypes) very effective. High-fidelity (pixel-perfect if you will) prototypes often takes quite some effort to produce. And it can have the annoying consequence that the feedback you get is also high-fidelety and detail-oriented as opposed to fundamental. 
<!-- TODO: find reference -->
You're rarely interested in feedback about the colors you picked, and drawing and testing UI's drawn like this is likely to give you that kind of feedback, at a lower price and in a form that's much easier to manipulate and pivot.

Now back to whatever imaginary script I believe I'm following. Here was an oportunity to 'let it rip' and see for myself. I got the bash loop going, Figma MCP runnong on the desktop app, Claude Code ready to run as a CLI with the correct arguments and logging, and a PRD document ready for it to work through. 
<!-- better word for unimpressive -->
And it turned out to be equally impressive and unimpressive at the same time.
All of this new tech is crazy. Whoever tells you this has no utility and it will go away soon after the bubble burst is not telling you the truth. Some bubble might burst, but neural networks on steroids have very real utility and will not go away anytime soon. That doesn't mean things are simply inevitable. This stuff's pretty damn wild, and I'm just out here generating frontend applications. I'm sitting there working on different tickets, while this thing autonomously opens up chrome to compare screenshots from the dev server with the Figma designs, and does all kinds of adjustments to make sure even the margins and padding are correct. After a few trial runs we were able to get a fully-functioning, close to pixel perfect prototype with a faked API layer w. data persistence generated consistently. In 20-30 minutes and 5-10$ worth of tokens you have something that feels completely like the real thing to test out with users.


Unimpressive because at the end of the day I don't think this all is incremental improvements so far.
Prompt/context engineering is boring, tiring and feels like a complete waste of time to me.
I still like napkin sketches more.
The process of doing these things is not that enjoyable.

<!-- TODO: add reference to leaflet post about context -->
<!-- Link to Primeagans take on getting more time to what you care about? -->
<!-- TODO: comment about not building a new browser? -->

So that's how we end back up at Slay The Spire on ascension 20. There's no questioning that things are changing, and dramatically so. But it doesn't seem to change as fast as we sometimes think. And there are lots of things that don't change that much, or that quickly. Much of what a good software engineer should be able to do hasn't changed much, and might not.  

<!-- TODO: comment about not stopping to learn how things work, not now and not in the future. Comment about Cluely -->

# Section about recent articles

Now in closing, I've read a list of great articles lately.
<!-- TODO: add reference -->
Article about death of SDLC: I think this is quite similar to other hype-takes on AI, that attributes development to AI when in fact it already started happening.

----

- about to kick off new project, came across the Ralph Wiggum idea. I don't know about this guy to be honest, re-inventing a while loop, claiming to have "[killed programming](https://ghuntley.com/loop/)" and then [helping crypto grifters for a few pennies](https://www.seangoedecke.com/gas-and-ralph/).
- napkin sketch, technical users that can fill the gaps
- wild to see this thing roam away, opening browser on its own and so forth
- lots of tooling, dependencies and complexity, opposite of the napkin sketch. I don't necessarily enjoy working with these things, the indeterminism is frustrating
- at the end of the day I'm weirdly still unsure about the gains, which is somewhat crazy. i don't believe for one second that agi is just around the corner, or that most of white-collars are going to go away. go read that hype on linkedin. at the same time there is such obvious utility in LLMs and agents, so why the hell am I still in doubt? https://lucumr.pocoo.org/2026/2/13/the-final-bottleneck/

---

# The idea

There's a lot of takes and ideas about 

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
- Trying to add more to prompting, adding skills, tweaking wording and so on feels extremely unsatisfying and unrewarding to me. And I think it's possible to spend a very long time on these things. I like the perspective in [this article](TODO: ref to leaflet post), and spend much more time on guardrails and consistency which would also make a human perform well in the codebase. With prompting I feel like you're doing things that can be thrown away anyway. Investing into sane testing, good readme/contributing docs and code consistency strikes me as a very safe and sensible bet.

# On "AI"

- My first post on the subject
- I would like to be in a position where I can call "bullshit" on hype, and where I can recognize the real value add.
- Not interested in leaving transformative tech to the crypto-bros
- Show me the code/product, unfortunately that's just not possible in this case. I don't fault you for taking this post with a grain of salt.

# Framing

I really dislike the ralph name. 
The meme aspect bothers me. 
Making all of it into a joke.
The memecoin crypto pump'n'dump schemes certainly haven't improved my view on it. 
So in this article I'll simply refer to the technique as The Expensive Loop (TEL). 
- long running tasks can also be solved with compaction, but I opted against it for the following reasons: TODO
- This all gets wishy-washy pretty quickly. Did this work better because of this or that? Should I use compaction in the agent, or outside of it? Before you know it you're setting up evals to test what might work better than the other thing. It really is quite frustrating to work with things this indeterministic.
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
- I'm also not entirely won over. AI pendulum, a lot of the work you do feels 'wasted' in a way I don't feel when doing something by hand. I don't know if that's just something I'm making up.
- Seeing the agent open up the browser, fixe subtle layout issues, then write about its progress and checking off tasks. There's no questioning that this tech has come a long way in a very short timespan.

# ..

- https://modelcontextprotocol.io/docs/tools/inspector
- MCP Jam
- https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- Which optimizations do agents already do, w. caching and so forth?
- https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents

Out of the box behaviour of claude code and Figma will give you a very general response, which in many cases is likely to be much more innaccurate than it needs to be.
- It would be great to not having to use pre-defined tools
- Syntax 41:00, MCP not composable, like shell scripts.
- Would be great to just be able to programmatically get what you want from Figma, and be able to compose it as you wish
- Even being able to turn off some tools. I'd rather just have metadata and screenshots for example, I don't necessarily need the rest. Especially tools that I simply cannot use such as code-connect related tools.

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
