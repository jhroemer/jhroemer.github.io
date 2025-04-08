---
slug: astro-bluesky-solid
title: "Astro, Bluesky and Solid"
tags: [Bluesky, SolidJS, Astro]
pubDate: 2025-04-08
draft: true
---

I've been having a great time on [Bluesky](https://bsky.app/) lately, and recently came across [Emily Lui's blogpost](https://emilyliu.me/blog/comments) on integrating Bluesky post comments with your blog. I think it's a really cute and fun idea, and decided to do my own little spin on it.

<!-- TODO: improve wording here -->

[Emily's implementation](https://gist.github.com/emilyliu7321/19ac4e111588bdc0cb4e411c88d9c79a) is React/Next based, but since I'm using [Astro](https://astro.build/) for my site I have some flexibility in terms of the type of framework to use. So I decided to try going with [Solid](https://docs.solidjs.com/) instead.

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

As mentioned this site is built with Astro, and all blog posts are written as simple markdown files (there's various ways to [integrate with a CMS](https://docs.astro.build/en/guides/cms/), but I don't really need it). The first thing to figure out is how to make the connection between a blog post and a Bluesky post, which is a manual step. In my case, I'll create a new blog post, create a post about it on Bluesky and then copy the Bluesky post ID into my blog post Frontmatter (metadata). That ID can then be read in my [layout component](https://docs.astro.build/en/basics/layouts/#markdown-layouts) used for blog posts, and can be passed to a component that will handle rendering of the comments.

There's a good deal of manual steps to this, and you might be able to set up an automated pipeline for this (publish blog post, pipeline programmatically posts to Bluesky and pushes the id to the blog post metadata). But I'm ok with this, since I don't really want to post to Bluesky programmatically, but want to use the editor experience in the app.

Now with this out of the way, we still need to actually fetch the data and render it. So far, I haven't ever needed more than what Astro provides out of the box, which is [static site generation](https://en.wikipedia.org/wiki/Static_site_generator) based on a JSX-like template expression syntax. There's obvious benefits to this, it's fast and it feels very familiar to anyone with React experience. But the drawbacks become clear when you need more dynamic and interactivity.

In this case we don't want the comments to be rendered statically. If we do that, then the comments section will only update when the site is re-build and deployed. Astro supports [Client-Side script](https://docs.astro.build/en/guides/client-side-scripts/#client-side-scripts), so we could fetch data when the page loads, but we will hit a secondary issue, which is reactive rendering. Astro components look deceptively like JSX and React, but there's no reactivity. So we could (re)fetch our data in a client-side script, but we would have to imperatively (re)render the markup. Luckily Astro is ([officially](https://docs.astro.build/en/guides/framework-components/#official-front-end-framework-integrations)) compatible with some of the most popular frontend frameworks, and this is how we're going to solve the rendering challenge.

One last thing regarding Astro: UI framework components are by default not [hydrated](<https://en.wikipedia.org/wiki/Hydration_(web_development)>) (i.e. being made dynamic), when rendered from an Astro component. We want out component to be client-side rendered, and fetch data when the page loads, which can be solved by using [client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives). In our case we make sure that our framework component is rendered client-side like this:

```astro
<Comments client:only="solid-js> ..." />
```

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
