---
slug: prevent-impossible-states-with-union-types
title: "Prevent impossible states with union types"
tags: [TypeScript, Elm]
pubDate: 2022-07-13
---

For complex frontend applications, state management is often one of the main challenges. One common problem is to end up in erroneous states, that should not be possible to be in. Luckily we can alleviate type systems to prevent the unwanted states, and catch the errors at compile-time.

I'm not sure where the idea originated, but it has a lot of mentions in the [Elm](https://elm-lang.org/) community, for example in the [Making Impossible States Impossible](https://www.youtube.com/watch?v=IcgmSRJHu_8&ab_channel=elm-conf) by Richard Feldman, or in the [elm-patterns](https://sporto.github.io/elm-patterns/basic/impossible-states.html). Also, it seems whenever I come up with an interesting theme to blog about, [Kent C. Dodds already blogged about it](https://kentcdodds.com/blog/make-impossible-states-impossible). I take that as a good sign.

Here is a useful pattern that uses Typescript types to prevent impossible states.

## Example: impossible states are possible

Most applications will have to fetch data from somewhere, and often there would be a loading state to go along with the data. The fetch might fail for some reason, and in that case there needs to be an error state as well. We can model this state with an object that has a `value` property (to hold the data we're fetching), an `isLoading` property and an `error` property (to hold potential error messages). We can make the object generic to allow it to be used for different kinds of data:

```typescript
interface Data<T> {
  value?: T;
  isLoading: boolean;
  error?: string;
}
```

This is a quite straightforward approach to modelling parts of the application state connected to data fetching. The problem is that there's a lot of the possible state combinations should not be possible. Consider the following value assignment for example:

```typescript
const data: Data<number> = {
  value: 1,
  isLoading: true,
  error: "This is an error",
};
```

Typescript allows this assignment, as it doesn't violate our type. But it would not represent a valid/possible state, and would lead to a bug in our application. After all, we're not interested in rendering our fetched data, a loading spinner and an error, all at the same time.

## Example: making the impossible states impossible

One way of preventing such states is to represent state with single state-field, that can take only one value, that represents the given state. TypeScript enums are perfect for this - plain (magic) strings should be avoided:

```typescript
enum DataState {
  IDLE = "idle",
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}
```

This approach is good, especially because it's so simple and expressive. But it lacks an association with data, which was possible with the `value` property in the former model.

We can utilize [TypeScript Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) to get a combination of the two approaches.

```typescript
type Data<T> =
  // idle / nothing happened
  | {
      value: undefined;
      isLoading: false;
      error: undefined;
    }
  // loading
  | {
      value: undefined;
      isLoading: true;
      error: undefined;
    }
  // error
  | {
      value: undefined;
      isLoading: false;
      error: string;
    }
  // success
  | {
      value: T;
      isLoading: false;
      error: undefined;
    };
```

While this approach is slightly less expressive and readable, it makes sure we can only be in one of our four possible states. You will be notified about the impossible state at compile-time, and dramatically reduce the potential errors.
