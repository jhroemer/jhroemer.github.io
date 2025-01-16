---
slug: my-current-thoughts-on-frontend-testing
title: "My (current) thoughts on frontend testing"
tags: [Testing, Software development]
pubDate: 2025-01-16
draft: true
---

I work primarily with large complex web applications, with lots of logic and moving parts. Testing is a crucial component in this work, since it's your primary way of ensuring quality, and allows you to keep moving forward at a reasonable pace as the application grows.

I'll go through different test classes and considerations in this post, and I'll do so by looking at tests as investments (which they are). Tests have an initial cost (time), recurring fees along the way (maintenance) and are expected to provide a return (caught bugs, development velocity).

### Integration / End-to-end testing (E2) vs Unit testing

Firstly, I largely subscribe to Kent C. Dodds' approach to testing, the [Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications), which breaks with the more traditional [Testing Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html). Basically, there's a much higher emphasis on (more expensive) integration and e2e tests over unit tests, due to their higher return on investment. Here's what I've witnessed over the past five years: a large suite of integration/e2e tests that tests the main workflows in the application has caught a high number of bugs and regressions. And, maybe even more importantly, has been able to provide us with the confidence to move forward with large changes. I've made very fundamental and invasive changes to an application, like completely redoing client side routing, and been able to merge and move on as soon as I've made the test suite green.

The issue with integration and e2e tests is that they're expensive, both to write, run and maintain, whereas unit tests on the other hand are cheap. Though in terms of investment, I might not have identified a single regression with unit tests over the past five years. I'm not saying unit tests don't have their place, but for the type of work I do currently their value has been extremely negligible. Mostly they just endlessly succeed, in which case they often can be deleted. In the rare case that one of them fails? Well, it's probably because you changed the function/component that was tested, in which case the unit tests needs to be rewritten anyway. The most value I've gotten from them is when doing test-driven development. To sum up, from my experience integration/e2e tests ensure quality and allow you to maintain development velocity in a way unit tests don't, because they verify the flows that users actually go through in the application. Users aren't running individual functions in isolation. They're clicking through your interface, which is ultimately the thing that needs to work flawlessly.

Regarding the distinction between integration and E2E: I personally don't sweat too hard over which category tests belong to. Most of those I currently write aren't exactly true E2E, since running the backend with our tests too would be extremely expensive. So we rely on mocking (which has its benefits and drawbacks, I might do a post specifically on mocking at some point), and therefore we end up with tests that are written like E2E tests, but aren't truly.

### Static testing

Next up is static testing, which is sort of frontend specific, since Javascript doesn't ship with types by default. This box includes type safety and linting, both things that statically analyze your code in the background. For many developers, including myself, these tools are indispensable for frontend development. Yes, there's a learning curve, but TypeScript is very good these days, and should be familiar to many developers with another first language. Linting will introduce a learning curve too, but a much wanted one if you ask me, unless you really wanna continue writing bad code.

I don't really see any projects where you wouldn't want to include static testing, besides hackathon projects or similar. It's a cheap way of doing testing but with an enormous return on investment.

### Visual regression testing

Lately I've really enjoyed having visual regression tests. Their importance, like other tests too, depends very much on the type of application you're working with. This page, for example, is primarily tested with visual regression tests. That's because it's a content-focused website, without any interactivity. Consider that you just updated your component library to the latest major version - while you're not getting type errors and the application workflows work as expected, you would like to validate that no UI regressions snuck in with the update. This can take a long time to validate in certain applications.

Visual regression testing is offered as a SaaS product, making it easy and quick to set up. You can also set it up manually, with something like [Playwright](https://playwright.dev/), which is what I have experience with. I find that it integrates nicely with PR's on Github, where the updated screenshots are included in the file changes, with a nice image diff viewer. In that way, a reviewer can easily validate any visual changes too by looking at the screenshot diff(s).

Now visual regression testing isn't free, especially if you set it up on your own. Firstly, you need to take the screenshots in a deterministic environment, otherwise you can get false-negatives. You solve this by [using Docker](https://playwright.dev/docs/docker) when running and taking the screenshots, which ensures that the exact same environment, resolution etc. is used.
You might also run into storage issues, since image files take up a lot of space. This can be solved by using [Git LFS](https://git-lfs.com/), which stores references to image in the repo, rather than the images themselves.

Lastly, visual regression testing is quite sensitive to small changes, which is by design, and needs a bit of tweaking in some cases to run reliably. You need to make sure that screenshots are taken when the UI has finished rendering, and animations can make it hard to get reproducible results. Modern testing tooling, like Playwright, have ways to get around these things, but it takes a bit of work.
