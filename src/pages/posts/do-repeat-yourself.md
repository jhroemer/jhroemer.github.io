---
layout: ../../layouts/MarkdownPostLayout.astro
slug: do-repeat-yourself
title: "Do Repeat Yourself"
tags: [Software development, DRY, WET, AHA]
pubDate: 2022-03-18
description: "TODO."
---

One of the first software development principles we learn is _Don’t repeat yourself_ (DRY). It’s the principle that leads to cleaner, more compact and readable code bases. Or, is it the principle that leads computer science students and misguided programmers into redundant (over)abstractions, and code which is hard and complex to refactor?

<!--truncate-->

With the suggestive title, and questioning subtitle, you can probably already see where this is going. Avoiding duplication is one of the central techniques we have for managing and reasoning about large code bases. But it's also extremely hard to get right, and can often lead to more harm than good. If you're like me, you're probably lazy once in a while - which is a bad combination with software principles with prescriptive names. It's a similar issue to the _Minimum Viable Product_ concept, which I wrote about in my [previous post](https://jensroemer.com/minimum-viable-product). The name is catchy and prescriptive, so we think we know what it's about, even if we have not actually invested enough time in researching it. If I ever come up with a software principle on my own, I'll name it something absurd to counteract this. "_Let's use the **pineapple** principle for this_" might prompt a bit more curiosity from unknowing peers. On second thought; it the world a better place with absurdly named software principles from myself? I'm not so sure...

Let's look at the DRY principle along with two other related principles that can be used to support it.

## DRY

As the name suggests, it's all about avoiding duplication. I remember when I had my first introductory programming course, and IntelliJ would alert me of duplicate code, which I would zealously put into reusable functions, and pat myself on the back afterwards. But don't fool yourself, this is one of the harder aspect of building up a good codebase.
Let's look at the definition, from it's original formulation in [The Programatic Programmer](https://en.wikipedia.org/wiki/The_Pragmatic_Programmer) by Andy Hunt and Dave Thomas:

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system

So simply reusing bits of duplicate code isn't really the right way. Rather, we need to correctly identify what constitutes a piece of knowledge in our application. This is the difficult part. My

## WET

One related term/principle is WET, which is most often brought up as the opposite of- and a violation of DRY. It stands for:

> Write everything twice

WET is typically bad - nobody wants to work in a very wet codebase. But it can actually also be used as a principle, to help creating a dry codebase correctly.
The problem with rushing ahead to ensure a DRY codebase is two-fold: firstly, if you're turning a piece of functionality into a reusable function, but you're actually only using it in two (or even one) place, you're not really getting much benefit. I'm a big fan of Extreme Programming, and one of the principles is to always do continuous refactoring. Like the boy scout principle: leave your campsite in a better condition than we you arrived. So you have 4 lines of code that are identical in two places? That's fine, the codebase should be easy to refactor, and that duplication should be easy to correct later if the need arises. The solution will probably be even better.

Secondly, getting the abstraction right for reusable logic is not always trivial, but can be very hard. If you're just getting started on something, you might not have the required overview of the problem you're solving, which is needed in order to get the abstraction right. This leads me into the third principle.

## AHA

Avoid Hasty Abstraction (AHA) is a newer principle, formulated by Kent C. Dodds, one of the co-founders of the hyped Next.js competitor [Remix](https://remix.run/). It's one of the better named principles I find, because it doesn't try to prescribe how to solve a problem, but rather to give you a notion and a technique that will help you avoid making mistakes. Because while duplication is the enemy of a good codebase, wrong abstractions are often much worse.
There's two important sources here:

- [The Wrong Abstraction](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction) by Sandi Metz: "_prefer duplication over the wrong abstraction_"
- .. and [Kent's own post](https://kentcdodds.com/blog/aha-programming) on the subject: "_Optimize for change first_"

It's important that we remember that code is read far more than it is written. Wrong abstractions are difficult to understand and reason about, and they tend to stick around for a long time. Avoid them at all cost!

I will do a follow-up post later about how I got this principle wrong on a previous project, and how it eventually got cleaned up into a better solution.

**Edit**: and [here](2022-05-09-typing-your-api-routes-with-template-literal-types.md) it is.
