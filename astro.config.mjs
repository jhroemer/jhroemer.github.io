import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  redirects: {
    "/writing-a-good-rfc": "/posts/writing-a-good-rfc",
    "/fine-grained-reactivity": "/posts/fine-grained-reactivity",
    "/animating-gradient-border": "/posts/animating-gradient-border",
    "/prevent-impossible-states-with-union-types":
      "/posts/prevent-impossible-states-with-union-types",
    "/typing-your-api-routes-with-template-literal-types":
      "/posts/typing-your-api-routes-with-template-literal-types",
    "/do-repeat-yourself": "/posts/do-repeat-yourself",
    "/minimum-viable-product": "/posts/minimum-viable-product",
  },
  site: "https://jensroemer.com/",
});
