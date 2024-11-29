---
slug: my-current-thoughts-on-frontend-testing
title: "My (current) thoughts on frontend testing"
tags: [Testing, Software development]
pubDate: 2024-11-14
draft: true
---

Tests are an investment, so it’s very relevant to look at it as such. They have an initial cost (time), recurring fee's along the way (maintenance) and are expected to provide a return (caught bugs, development velocity). Tests are crucial to software development, since (at best) they allow you to maintain development velocity and quality in increasingly complex systems.

<!-- TODO: improve, mention my context -->

There's a few different kinds of testing of relevance.

### Integration / E2E

- Test what the user is actually interacting with. Unit tests don't guarantee quality.
- How do you write a good test?
- Don't test for what shouldn't happen (testing error states is fine).

### Visual regression testing

- Some setup and investment
- Need to install, run and work with docker. Which is not a bad skill to have anyway.
- DOM snapshot testing
- Git LFS
- Some snags along the way typically, like timing of when the screenshot is ready (has the page fully rendered). Plenty of ways to get around this, but there is some amount of learning to do here.
- Hard (impossible?) to do with views that aren't deterministic - animations and such.

### Static testing

- Cheap to run
- Learning curve obviously
- Large return on investment

### Unit

- Past many years I haven't really caught any regressions with unit tests.
- Write and then throw out (the test always succeeds anyway - if you change the function it tests you have to update the test also) - of course testing for regressions in test cases might be helpful. Again, might.

### Flake

### Links

- Testing pyramid
- Testing trophy
- One more?
- https://rauchg.com/2020/develop-preview-test
- https://www.youtube.com/watch?v=jmPcVTHmdVo&t=1s&ab_channel=TestDouble
