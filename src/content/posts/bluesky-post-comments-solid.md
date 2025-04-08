---
slug: astro-bluesky-solid
title: "Astro, Bluesky and Solid"
tags: [Bluesky, SolidJS, Astro]
pubDate: 2025-04-08
draft: true
---

I've been having a great time on [Bluesky](https://bsky.app/) lately, and recently came across [Emily Lui's blogpost](https://emilyliu.me/blog/comments) on integrating Bluesky post comments with your blog. I think it's a really cute and fun idea, and decided to do my own little spin on it. [Emily's implementation](https://gist.github.com/emilyliu7321/19ac4e111588bdc0cb4e411c88d9c79a) is React/Next based, but since I'm using [Astro](https://astro.build/) for my site I have some flexibility in terms of the type of framework to use. So I decided to try going with [Solid](https://docs.solidjs.com/) instead.

### Bluesky

We need some comment data from Bluesky, that's our first step. And it's surprisingly easy. Bluesky has a fairly comprehensive [API](https://docs.bsky.app/docs/category/http-reference), and many of the endpoints don't even need authentication, not to speak of having to set up a developer account. Here's the endpoint for getting the post thread corresponding to this post for example:

> https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/3ljpikbdvts2o

So the fact that this works without any prior setup is one of the reasons why Bluesky claim to be 'open'.

Let's just break down the endpoint, the [app.bsky.feed.getPostThread](https://docs.bsky.app/docs/api/app-bsky-feed-get-post-thread) endpoint, real quick.

- First there's the path: https://public.api.bsky.app
- Then there's the endpoint path: app.bsky.feed.getPostThread

And at the end you have a single URL param called uri.
The URI params consists of a few different pieces. First there's the `at://`-part, which describes the protocol, in this case Bluesky's [AT-Protocol](https://atproto.com/).
The next part is an identifier for the user, which can either be a DID (decentralized identifier) or a user handle. While the latter is more readable, it may also change, which the DID won't.
TODO: The next part is `app.bsky.feed.post`.
And lastly we have an identifier for the post in question, in this case `3ljpikbdvts2o`.
And that's all we need.

### Astro

- Component script is server-side (everything within the code fence --- ---), data would be static
- Client-side scripts
- JSX but no reactivity
- Client directives

### SolidJS

- Solid is fast, small, does pretty well on benchmarks
- Trying something new
- Fond of Ryan Carniato.
- Fundamental difference - render function only runs once. You cannot expect things in the function body to update- or be reactive, unless they're hooked up with a signal, effect etc.
- So for React: props/state change and render re-runs. For Solid, props/state changes and everything that subscribes will re-evaluate.
- Feeling: React is easy but not necessarily simple, Solid is simple but not necessarily easy.
- createResource ~ useQuery
- Simply add a recursive comment component (you might be able to add a nicer one)
- No props.destructuring
- <Show>, <For>, <Switch>, <Match>
- Get used to missing () on getters
- Conditionally rendering an element based on its existence follows a fairly specific pattern - use <Show> component and access the ancestor with a function inside of it.
