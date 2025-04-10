---
slug: solid-rendered-bluesky-comments
title: "Solid-rendered Bluesky comments"
tags: [Bluesky, SolidJS, Astro]
pubDate: 2025-04-09
bskyPostId: "3lmeylzhfh22w"
---

I've been having a great time on [Bluesky](https://bsky.app/) lately, and recently came across [Emily Lui's blog post](https://emilyliu.me/blog/comments) on integrating Bluesky post comments with your blog. I think it's a really cute and fun idea, so I decided to put my own little spin on it.

[Emily's implementation](https://gist.github.com/emilyliu7321/19ac4e111588bdc0cb4e411c88d9c79a) is React/Next based, but since I'm using [Astro](https://astro.build/) for my site I have some flexibility in terms of the type of framework to use. So I decided to try something different which I'll outline in the sections below.

## Bluesky

We need some comment data from Bluesky, that's our first step. And it's surprisingly easy. Bluesky has a fairly comprehensive [API](https://docs.bsky.app/docs/category/http-reference), and many of the endpoints don't require authentication, let alone setting up a developer account. Here's the endpoint for getting the post thread corresponding to this post for example - and try calling it:

> https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/3ljpikbdvts2o

The fact that this works without any prior setup, is one of the reasons why Bluesky is said to be open (their [marketing page](https://bsky.social/about) mentions the word _open_ 9 times).

Let's just break down the endpoint, the [app.bsky.feed.getPostThread](https://docs.bsky.app/docs/api/app-bsky-feed-get-post-thread) endpoint, real quick.

First there's the API path:

> https://public.api.bsky.app

Then there's the specific path for the endpoint to get the thread data:

> app.bsky.feed.getPostThread

And at the end you have a single URL param called `uri`.

> at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/3ljpikbdvts2o

The URI params consists of a few different pieces. First there's the `at://`-part, which describes the protocol, in this case Bluesky's [AT-Protocol](https://atproto.com/).
The next part is an identifier for the user, which can either be a DID (decentralized identifier) or a user handle. While the latter is more readable, it may also change, which the DID won't.
The next part is `app.bsky.feed.post` which is the [record type](https://atproto.com/guides/lexicon).
And lastly we have an identifier for the post in question, in this case `3ljpikbdvts2o`.
And that's all we need.

## Astro

As mentioned this site is built with Astro, and all blog posts are written as simple markdown files (there's various ways to [integrate with a CMS](https://docs.astro.build/en/guides/cms/), but that's overkill for me right now). The first thing to figure out is how to make the connection between a blog post and a Bluesky post, which is a manual step. In my case, I'll create a new blog post, share it on Bluesky and then copy the Bluesky post ID into my blog post Frontmatter (metadata). That ID can then be read in my [layout component](https://docs.astro.build/en/basics/layouts/#markdown-layouts) used for blog posts, and can be passed to a component that will handle rendering of the comments.

There's a few manual steps involved, and you might be able to set up an automated pipeline for this (publish blog post, pipeline programmatically posts to Bluesky and pushes the id to the blog post metadata). But I'm ok with this, since I don't really want to post on Bluesky programmatically, but want to use the editor experience in the app.

Now with this out of the way, we still need to actually fetch the data and render it. So far, I haven't ever needed more than what Astro provides out of the box, which is [static site generation](https://en.wikipedia.org/wiki/Static_site_generator) based on a JSX-like template expression syntax. There's obvious benefits to this, it's fast and it feels very familiar to anyone with React experience. But the drawbacks become clear when you need more dynamic and interactivity.

In this case we don't want the comments to be rendered statically. If we do that, then the comments section will only update when the site is re-build and deployed. Astro supports [Client-Side scripts](https://docs.astro.build/en/guides/client-side-scripts/#client-side-scripts), so we _could_ fetch data when the page loads, but then we hit a secondary issue: reactive rendering. Astro components may _look_ like JSX and React, but Astro components aren't actually reactive. So we could (re)fetch our data in a client-side script, but we would have to imperatively (re)render the markup. Luckily Astro is ([officially](https://docs.astro.build/en/guides/framework-components/#official-front-end-framework-integrations)) compatible with some of the most popular frontend frameworks, and this is how we're going to solve the data-fetching and rendering challenge.

One last thing regarding Astro: By default, UI framework components are not [hydrated](<https://en.wikipedia.org/wiki/Hydration_(web_development)>) (i.e. being made dynamic), when rendered from an Astro component. We want our component to be client-side rendered, and fetch data when the page loads, which can be solved by using [client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives). In our case we make sure that our framework component is rendered client-side like this:

```astro
<Comments client:only="solid-js ..." />
```

## Solid JS

For the last piece, the framework component, I ended up reaching for [Solid JS](https://www.solidjs.com/). There's a few reasons for this. Firstly, I like the framework and its creator Ryan Carniato, who's an amazing resource for the web community. Also, I covered Solid's approach to signals almost two years ago, in my [post](/posts/fine-grained-reactivity/) about fine grained reactivity.

<!-- TODO: get a good reference for this + HOW is solid faster -->

Secondly, Solid is both smaller and faster than React. I would probably still pick React in a work environment, but for a small personal project going with Solid is both low risk and presents a good learning opportunity.

Thirdly, Solid actually comes with a built-in primitive for data fetching, [createResource](https://docs.solidjs.com/reference/basic-reactivity/create-resource), which React (infamously) doesn't. I could of course also add the ever-awesome [TanStack Query](https://tanstack.com/query/latest), but having to maintain a smaller list of dependencies is definitely a plus for me.

<!-- TODO: Solid stats: https://dev.to/this-is-learning/javascript-framework-todomvc-size-comparison-504f -->

With the motivation out of the way, let's look at a few parts of the Solid implementation.

I've included a small code-example further down, and as you might see Solid initially looks very similar to React, since it also the idea of components as functions that return JSX. But it is quite different, most fundamentally in how the render function in Solid only runs once (whereas React components continuously rerender when their props/state change, or when their parent re-renders). This has quite a few implications for how you can structure your components.

What you might also notice is how `createResource` looks and feels similar to TanStack Query, which [according to the changelog is on purpose](https://github.com/solidjs/solid/blob/main/CHANGELOG.md#updated-resource-api). It's more basic than TanStack Query, and doesn't do caching on its own, but it's still a very nice tool to have out of the box.

Lastly, conditional and list rendering is done with specific Solid components. In the example below a switch component that will render one of three sections based on the resource state. And a for-component that will render a list of PostComments. There's different ways to render the post comments, but I used a recursive component for this (`<PostComment>` component renders its own list of `<PostComment>`), which worked well for this type of data structure.

```jsx
const PostComments = (props: PostCommentsProps) => {
  // Looks and feels quite similar to TanStack Query
  const [commentsResource] = createResource(
    // You cannot destructure props since they are wrapped in Object getters
    () => props.postId,
    (postId) => fetchData(postId)
  );

  // This only runs once!

  return (
    <Switch>
      <Match when={commentsResource.loading}>
        {/* Loading state */}
      </Match>
      <Match when={commentsResource.error}>
        {/* Error state */}
      </Match>
      {/* The getter is an actual function */}
      <Match when={commentsResource()}>
        {/* No need to remember keys when mapping..
          .. though you can forget to use the <For> component.. */}
        <For each={commentsResource()?.replies}>
          {(comment) => {
            return <PostComment post={comment} />;
          }}
        </For>
      </Match>
    </Switch>
  );
};
```

Now, if you want to see your name and comment displayed below, just click the comment stats to go to the post, and reply away. See you there!
