---
slug: astro-bluesky-solid
title: "Astro, Bluesky and Solid"
tags: [Bluesky, SolidJS, Astro]
pubDate: 2025-04-08
draft: true
---

I've been having a great time on [Bluesky](https://bsky.app/) lately, and recently came across [Emily Lui's blogpost](https://emilyliu.me/blog/comments) on integrating Bluesky post comments with your blog. I think it's a really cute and fun idea, and decided to do my own little spin on it. [Emily's implementation](https://gist.github.com/emilyliu7321/19ac4e111588bdc0cb4e411c88d9c79a) is React/Next based, but since I'm using [Astro](https://astro.build/) for my site I have some flexibility in terms of the type of framework to use. So I decided to try going with [Solid](https://docs.solidjs.com/) instead.

### Bluesky

- AT Protocol
- API is quite open, much of it unauthorized
- at:// is the schema
- Endpoint to get post data
- Endpoint to get?
- Handle vs did

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
