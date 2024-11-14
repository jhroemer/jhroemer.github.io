---
slug: my-current-thoughts-on-frontend-testing
title: "My (current) thoughts on frontend testing"
tags: [Testing, Software development]
pubDate: 2024-11-14
draft: true
---

Tests are an investment, so it’s very relevant to look at it as such. They have an initial cost (time), recurring fee's along the way (maintenance) and are expected to provide a return (caught bugs, development velocity). Tests are crucial to software development, since (at best) they allow you to maintain development velocity and quality in increasingly complex systems.

<!-- TODO: improve -->

There's a few different kinds of testing of relevance.

### Integration / E2E

- Test what the user is actually interacting with. Unit tests don't guarantee quality.

### Visual regression testing

- Some setup
- DOM snapshot testing
- Git LFS

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
