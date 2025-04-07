---
slug: bluesky-comments-astro-solid
title: "Bluesky comments x Astro x Solid"
tags: [Software development, SolidJS, Astro]
pubDate: 2025-03-31
draft: true
---

- Inspiration:
  - https://emilyliu.me/blog/comments
  - https://graysky.app/blog/2024-02-05-adding-blog-comments

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
- Fundamental difference - render function only runs once
- Feeling: React is easy but not necessarily simple, Solid is simple but not necessarily easy.
- createResource ~ useQuery
- Simply add a recursive comment component (you might be able to add a nicer one)
- No props.destructuring
- <Show>, <For>, <Switch>, <Match>
- Get used to missing () on getters
- Conditionally rendering an element based on its existence follows a fairly specific pattern - use <Show> component and access the ancestor with a function inside of it.
