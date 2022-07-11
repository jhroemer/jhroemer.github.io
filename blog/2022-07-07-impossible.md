---
slug: prevent-impossible-states-with-typescript
title: 'Prevent impossible states with TypeScript'
tags: [TypeScript, Elm]
---

Type systems are a great way of reducing bugs and errors in your application. But not all bugs are caused by runtime errors. For frontend development, state management is one of the very tricky areas. And you can alleviate type systems to prevent erroneous states that should be impossible.

<!--truncate-->

I'm not sure where the idea originated, but it has a lot of mentions in the [Elm](https://elm-lang.org/) community, for example in the [Making Impossible States Impossible](https://www.youtube.com/watch?v=IcgmSRJHu_8&ab_channel=elm-conf) by Richard Feldman, or in the [elm-patterns](https://sporto.github.io/elm-patterns/basic/impossible-states.html). Also, it seems whenever I come up with an interesting theme to blog about, [Kent C. Dodds already blogged about it](https://kentcdodds.com/blog/make-impossible-states-impossible). I take that as a good sign.

Here is a useful pattern that uses Typescript types to prevent impossible states.

### Example

```typescript
interface Data<T> {
  value?: T
  isLoading: boolean
  error?: string
}
```

This is a quite straightforward approach to modelling parts of the application state connected to data fetching. The problem is that there's a lot of the possible state combinations should not be possible. Consider the following for example:

```typescript
data: Data<number> = { value: 1, isLoading: true, error: 'This is an error' }
```

Typescript would allow this, but it would not represent a possible state.
One way of preventing such states is to represent state not in terms of

```typescript
enum DataState {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success',
}
```

This approach is good, especially because it's so simple and expressive. But it lacks an association with data, which was possible with the `value` property in the former model.

We can utilize [TypeScript Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) to get a combination of the two approaches.

```typescript
type Data<T> =
  // idle / nothing happened
  | {
      value: undefined
      isLoading: false
      error: undefined
    }
  // loading
  | {
      value: undefined
      isLoading: true
      error: undefined
    }
  // error
  | {
      value: undefined
      isLoading: false
      error: string
    }
  // success
  | {
      value: T
      isLoading: false
      error: undefined
    }
```
