---
slug: fine-grained-reactivity
title: "Fine grained reactivity"
tags: [Reactivity, Signals, SolidJS]
pubDate: 2023-06-23
---

Reactivity within frontend development has been dominated by React and its Virtual DOM approach for many years now. But there are other approaches out there. Let's have a look at SolidJS, its fine-grained reactivity model and a very basic implementation of signals.

Reactivity and reactive programming isn't a new concept in general. In the context of modern Javascript-based frontend development, it started around 2010, when frameworks like [RxJS](https://rxjs.dev/), [Knockout.js](https://knockoutjs.com/), [Backbone.js](https://backbonejs.org/), [AngularJS](https://angularjs.org/) and [Ember.js](https://emberjs.com/) came out. All these libraries are now somewhat dated, or even deprecated, but they were at the absolute forefront at the time.

Coincidentally, I did my own baby-steps in frontend development around this time, completely ignorant about the ongoing framework innovation. I ended up abandoning frontend development in favour of other things, and would return almost a decade later. Safe to say things have changed, but as it turns out frontend development might have a thing or two in common with fashion, where old trends suddenly come back in style.

## Signals

So what's getting back in style exactly? Well, the new kid on the block these days is signals. But signals isn't actually a new concept. The author of Solid.js, Ryan Carniato, dates it back as far as the [1960's](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob). The underlying software engineering concept that most should be familiar with is the [Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern), which is also what's referenced in the [Solid.js docs](https://www.solidjs.com/guides/reactivity#introducing-primitives). The basic idea is that you have an object (subject) that maintains a list of dependents (observers). When state changes the observers are notified, and they can react accordingly. In frontend terms the subject would be a piece of state, and the dependents would be DOM elements.

## A very basic implementation

The really cool thing about signals is that it's a fairly simple concept, and that it can be implemented with runtime features and the (normal) DOM quite easily. In fact, the most basic implementation can be done in around 20 lines of code, as demonstrated by Ryan in [this interview with Kelvin Omereshone](https://www.youtube.com/watch?v=N-Y32BqhoYQ&ab_channel=KelvinOmereshone). While that wouldn't be production-ready by any means, it's still quite fascinating to me how the magic of reactivity can be implemented with so little code.

Let's start with the signal itself:

```javascript
const context = [];

const createSignal = (value) => {
  const subscribers = new Set();

  const read = () => {
    const observer = context[context.length - 1];
    if (observer) {
      subscribers.add(observer);
    }
    return value;
  };

  const write = (newValue) => {
    value = newValue;
    for (const sub of subscribers) {
      sub.execute();
    }
  };

  return [read, write];
};
```

A signal is created with a `createSignal` function, that returns a tuple with a `read` and `write` function. As expected, the read function returns the value and the write function updates it, just like a getter and a setter. Additionally, when the read function is invoked, it looks for any observers from the context stack, and if here is one, adds it to a list of subscribers. The context stack is a way of tracking observers/dependencies, and the subscriber list is an internal list in the signal used to keep track of what to update if the value changes. What the `write` function does in addition to updating the value, is to go through this list of subscribers/observers, and to run their `execute` function.

In other words, with the `read` function you can get a value and at the same time sign up to be notified about updates to the value (in an `effect` or a `render` function for example). With the `write` function you make sure that whoever depends on the value is notified, and _reacts_ appropriately, when the value is updated

One thing to mention here, the naming convention in Solid is slightly confusing, since it resembles the one by React's `useState` function, that returns a stateful value `state` and a function to update it `setState`. The difference here is that `state` is a value and not a function, like `read` is. `read` needs to be called as a function when you use it, but its naming convention makes it seem similar to a value. We'll have a look at this later.

Fine, now we have a function that can store a value, keep track of dependencies, and to run a function for dependencies of the function. How do we use it then? Let's have a look at an effect:

```javascript
const createEffect = (fn) => {
  const observer = {
    execute() {
      context.push(this);
      fn();
      context.pop();
    },
  };

  observer.execute();
};
```

The signal will be used together with functions that return jsx. This could be in a `render` function, or in this simple example; an effect. We can create an effect with the `createEffect` function, that creates a new observer (object with an execute function). The execute function is run once as part of the `createEffect` call, and pushes the observer into the context stack, runs the supplied function, and pops the observer off the stack again.

At this point you might not really see how pieces fit together. So let's have a look at how they can be used together, with a silly example of an H1 element that changes it's text based on a few buttons:

```javascript
const [greet, setGreet] = createSignal("Hi");
const [name, setName] = createSignal("Harry");

const greetButton = document.createElement("button");
greetButton.textContent = "Change greet";
greetButton.addEventListener("click", () => {
  setGreet("Yo");
});

const harryButton = document.createElement("button");
harryButton.textContent = "Change name to Anders";
harryButton.addEventListener("click", () => {
  setName("Harry");
});

const lloydButton = document.createElement("button");
lloydButton.textContent = "Change name to Anders";
lloydButton.addEventListener("click", () => {
  setName("Lloyd");
});

const h1 = document.createElement("h1");

document.body.append(h1);
document.body.append(harryButton);
document.body.append(lloydButton);
document.body.append(greetButton);

createEffect(() => {
  h1.textContent = `${greet()} ${name()}`;
});
```

The example start by defining two signals, and for a greeting and one for a name. Then we create a few buttons that call the write functions, so that we can change the values. We then a heading element and the buttons to the dom. Finally, we call `createEffect` and supply a function that set the text content on the heading to a template string that calls `greet` and `name`.

What happens is that when you press one of the buttons, the button will call the `write` function on the signal, which will run the `execute` function of any observers. The effect that updates the text content on the heading is a subscriber, due to it's use of the read function. Hence, when the value is changed the H1 text content will change accordingly.

And there we have it, a very simple reactivity implementation that works without any black magic. You can go ahead and copy paste the individual pieces into your console, and you should have a heading and a few buttons that use reactivity to do the DOM updates.

Thanks to [Ryan Carniato](https://twitter.com/RyanCarniato) and [Kelvin Omereshone](https://twitter.com/Dominus_Kelvin) for the inspiration.
