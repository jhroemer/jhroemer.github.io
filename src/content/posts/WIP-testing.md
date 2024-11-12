---
slug: frontend-testing
title: "My (current) thoughts on frontend testing"
tags: [Testing]
pubDate: 2024-07-24
draft: true
---

Tests are an investment, so it’s very relevant to look at it as such. How much is the initial cost? What’s the expected return of investment? Are there recurring fee’s along the way?

...

### Integration

- Test what the user is actually interacting with. Unit tests don't guarantee quality.

### Visual regression testing

- Some setup

### Static testing

- Cheap to run
- Learning curve obviously
- Large return on investment

### Unit

- Past many years I haven't really caught any regressions with unit tests.
- Write and then throw out (the test always succeeds anyway - if you change the function it tests you have to update the test also) - of course testing for regressions in test cases might be helpful. Again, might.

### Links

- Testing pyramid
- Testing trophy
