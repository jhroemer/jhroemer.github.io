---
slug: WIP
title: "Abstract your API http logic with template literal types"
tags: [Typescript, DRY]
---

Typing your endpoint calls is very useful but not straightforward.
Ever found yourself creating a function to encapsulate an endpoint call? Here’s a useful approach using TypeScript and [template literal types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html) to get clean and flexible typed endpoint logic.

<!--truncate-->

I mentioned in [my latest post](https://jensroemer.com/do-repeat-yourself) that I would come up with an example of getting DRY wrong and how to get it right. So let's say you’re building a blog-type UI for showing articles from different authors. There’s an endpoint to get articles, and an endpoint to get authors. The article object only have a reference to an author id, and do not contain much author information. You’re building two views in the UI for showing articles with a bit of information about the author as well. The two views look different, but require the same data, and armed with our DRY principle we start hacking away at a solution that might look something like this:

```typescript
const fetchArticlesWithAuthorDetails = () => {
  const articles = axios.get();
  const uniqueAuthors = _.uniq(posts.authors);
  const authors = axios.get();
  return posts.map(() => {});
};
```

This is a bad abstraction. We do not gain a lot, other than not having to do our data transformations twice. But combining and transforming data with array utilities is not a piece of knowledge in our system, rather it’s bread and butter tools we use when we write code. 

The function name also gives it away somewhat, it's like with commit messages: if there's an _or_ in it, it's probably not sufficiently atomic. It's a code smell basically. But there _is_ a lot of knowledge contained in the function which would be nice to encapsulate and reuse, like **how** we call our endpoints, **what** the endpoint paths are, **which** parameters they take etc. With the above function these things aren't possible to reuse because they are bundled together with use case specific logic. This is also a good example of [braiding/interleaving vs simplicity/compose](https://youtu.be/LKtk3HCgTa8?t=1896), where the above function is clearly suffering from braiding/interleaving.

### A better abstraction

Let’s try to untangle our braided function, using an approach championed by my good friend and colleague [Simon Lagos](https://github.com/sajmoni). We can start with the first piece of knowledge: **how** we call our endpoints. 

What we can do is to create a function for each HTTP method we use with our API, in this example we would need a function for the GET method. The function can take a few arguments, in this case: the endpoint path, the token (for an authorized endpoint) and an optional body.

```typescript
export const get = async (
  path: string,
  token: string,
  body: any
): Promise<any> => {
  const response = await axios.get(`${API_URL}${path}`, body, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return response;
};
```

Suddenly we have a modular and generic function that can be used throughout the application, in a variety of situation, when we have to make `GET` requests to the API in question. We do no longer have the mental overhead of remembering how we call our API, and we can easily change the library we use to do so. This is a better abstraction.

### Template literal types for endpoint paths

Okay so now we know how we call our endpoints, and we can look at how to encapsulate and type our endpoint paths. Template literal types can be really handy for this.

```typescript
export const getBranchUrl = (
  projectId: number,
  branchName: string
): GetBranchUrl => {
  const encodedBranchName = encodeURIComponent(branchName);
  return `/projects/${projectId}/branches/${encodedBranchName}`;
};

export type GetBranchUrl = `/projects/${number}/branches/${string}`;
```

### Connecting the dots