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

The really cool thing about signals is that it's a fairly simple concept, and that it can be implemented with runtime features and the (normal) DOM quite easily. In fact, the most basic implementation can be done in around 20 lines of code, as demonstrated by Ryan in [this interview with Kelvin Omereshone](https://www.youtube.com/watch?v=N-Y32BqhoYQ&ab_channel=KelvinOmereshone). While that wouldn't be production-ready by any means, it's still quite fascinating to me how the magic of reactivity can be implemented with so little code.

Let's dive in.

```typescript
interface Subscriber {
  execute: () => void
}

const context: any[] = []

const createSignal = (value: any): [() => any, (nextValue: any) => void] => {
  const subscribers = new Set<Subscriber>()

  // When value is read, make sure observer is subscribed to future updates
  // This ensures that observer is notified when value updates
  const read = () => {
    const observer = context[context.length - 1]
    if (observer) {
      subscribers.add(observer)
    }
    return value
  }

  // Whenever a value is changed, the subscribers/observers are notified
  // and when they are they will execute their execute function,
  // which is registered when the effect is created
  const write = (newValue: any) => {
    value = newValue
    for (const sub of subscribers) {
      sub.execute()
    }
  }

  return [read, write]
}

// Register a new observer with an execute function
// The observer is pushed onto the context stack: TODO: why?
const createEffect = (fn: () => void) => {
  const observer = {
    execute() {
      context.push(this)
      fn()
      context.pop()
    },
  }

  observer.execute()
}
```

- Solid has a lot of tricks and things to prevent bad things to happen

- https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf
- https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob
- https://dev.to/this-is-learning/making-the-case-for-signals-in-javascript-4c7i
- https://www.solidjs.com/guides/reactivity
- https://www.youtube.com/watch?v=N-Y32BqhoYQ&ab_channel=KelvinOmereshone

- Solid, Preact, Angular
- State binding and dependency tracking
- Sell: Eliminates state management footguns - VS vdom
- Signals w. Vanilla https://twitter.com/wesbos/status/1650589973215584260
