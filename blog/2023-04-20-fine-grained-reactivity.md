---
slug: fine-grained-reactivity
title: 'Fine grained reactivity'
tags: [Reactivity, Signals, SolidJS]
draft: true
---

Reactivity within frontend development has been dominated by React and its Virtual DOM approach for many years now. But there are other approaches out there. Let's have a look at SolidJS, its fine-grained reactivity model and a very basic implementation of signals.

### Reactivity

Reactivity and reactive programming isn't a new concept in general. In the context of more modern Javascript-based frontend development, it started around 2010, when frameworks like [RxJS](https://rxjs.dev/), [Knockout.js](https://knockoutjs.com/), [Backbone.js](https://backbonejs.org/), [AngularJS](https://angularjs.org/) and [Ember.js](https://emberjs.com/) came out. All these libraries are now somewhat dated, or even deprecated, but they were at the absolute forefront at the time.

I did my own baby-steps in frontend development around this time, completely ignorant about the ongoing framework innovation. I ended up abandoning frontend development in favour of other things, and would return almost a decade later. Safe to say things have changed, but as it turns out frontend development might have a thing or two in common with fashion, where old trends suddenly come back in style.

### Signals

So what's getting back in style exactly? Well, the new kid on the block these days, or so it seems, is signals. But signals isn't actually a new concept. In fact the author of Solid.js, Ryan Carniato, dates it back as far as the [1960's](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob). The underlying software engineering concept that most should be familiar with is the [Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern), which is what's referenced in the [Solid.js docs](https://www.solidjs.com/guides/reactivity#introducing-primitives). The basic idea is that you have an object (subject) that maintains a list of dependents (observers). When state changes the observers are notified, and they can react accordingly. In frontend terms the subject would be a piece of state, and the dependents would be dom elements.

### A very basic implementation

- Source and inspiration: https://www.youtube.com/watch?v=N-Y32BqhoYQ&ab_channel=KelvinOmereshone
- Example
- Explanation
- Only x lines of code
- Solid has a lot of tricks and things to prevent bad things to happen