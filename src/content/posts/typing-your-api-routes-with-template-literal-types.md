---
slug: typing-your-api-routes-with-template-literal-types
title: "Typing your API routes with template literal types"
tags: [TypeScript, DRY, HTTP]
pubDate: 2022-05-09
---

Typing your endpoint calls is very useful but not straightforward.
Ever found yourself creating a function to encapsulate an endpoint call? Here’s a useful approach using TypeScript and [template literal types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html) to get clean and flexible typed endpoint logic.

I mentioned in [my latest post](https://jensroemer.com/do-repeat-yourself) that I would come up with an example of getting DRY wrong and how to get it right. So let's say you’re building a blog-type UI for showing articles from different authors. There’s an endpoint to get articles, and an endpoint to get authors. The article object only have a reference to an author id, and do not contain much author information. You’re building two views in the UI for showing articles with a bit of information about the author as well. The two views look different, but require the same data, and armed with our DRY principle we start hacking away at a solution that might look something like this:

```typescript
// Example using axios, lodash/fp
const fetchArticlesWithAuthorDetails = (): ArticlesWithAuthorDetails[] => {
  const articles = axios.get("/articles");
  const uniqueAuthors = _.flow(
    _.map((article) => article.author),
    _.uniq
  )(articles);
  const authors = axios.get("/authors?");
  return articles.map((article) => {
    {
      ...article,
      author: {
        // add author specific information
      }
    }
  });
};
```

This is a bad abstraction. We do not gain a lot, other than not having to do our data transformations twice. But combining and transforming data with array utilities is not a piece of knowledge in our system, rather it’s bread and butter tools we use when we write code.

The function name also gives it away somewhat, it's like with commit messages: if there's an _or_ in it, it's probably not sufficiently atomic. It's a code smell basically. But there _is_ a lot of knowledge contained in the function which would be nice to encapsulate and reuse, like **how** we call our endpoints, **what** the endpoint routes are, **which** parameters they take etc. With the above function these things aren't possible to reuse because they are bundled together with use case specific logic. This is also a good example of [braiding/interleaving vs simplicity/compose](https://youtu.be/LKtk3HCgTa8?t=1896), where the above function is clearly suffering from braiding/interleaving.

### A better abstraction

Let’s try to untangle our braided function, using an approach championed by my good friend and colleague [Simon Lagos](https://github.com/sajmoni). We can start with the first piece of knowledge: **how** we call our endpoints.

What we can do is to create a function for each HTTP method we use with our API, in this example we would need a function for the GET method. The function can take a few arguments, in this case: the endpoint route and the token (for an authorized endpoint) - you could add more things such as HTTP body data for non-GET request etc.

```typescript
export const get = async (
  route: string,
  token: string
): Promise<AxiosResponse> => {
  const response = await axios.get(`${API_URL}${route}`, {
    headers: {
      Authorization: token,
    },
  });

  return response;
};
```

Suddenly we have a modular and generic function that can be used throughout the application, in a variety of situation, when we have to make `GET` requests to the API in question. We do no longer have the mental overhead of remembering how we call our API, and we can easily change the library we use to do so. This is a better abstraction.

### Template literal types for endpoint routes

Now we have a useful abstraction for how to call our endpoints, and we can look at how to encapsulate and type our endpoint routes. Template literal types can be really handy for this. They're based on [literal types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types) and [template literals/strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). The former makes it possible to not only specify if something is of type `string` or `number`, but exactly which string(s) or number(s) a variable can take. The latter is commonly used for string interpolation/formatting.

Template literal types look exactly like template literals, but can be used as a type as the name suggests. This makes them much more flexible than the literal types because parts of the string can be dynamic.

Getting back to typing endpoint routes: what we can do is to create a function that creates the endpoint route, and type the functions with template literal types to ensure compliance with the route format.

```typescript
// Add a type that can be used for the return type
export type GetBranchRoute = `/projects/${number}/branches/${string}`;

// Function to create our endpoint route
export const createGetBranchRoute = (
  projectId: number,
  branchName: string
): GetBranchRoute => {
  const encodedBranchName = encodeURIComponent(branchName);
  return `/projects/${projectId}/branches/${encodedBranchName}`;
};
```

There's reduced overhead of calling the endpoint when using a function like the above, since the function correctly documents the needed/available parameters, and makes sure that the endpoint route is correctly formatted. The function can for example ensure that the parameters are encoded correctly or that the body is formatted as it should.
