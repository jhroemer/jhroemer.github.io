import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), solidJs()],
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
    // After /posts -> /writing rename
    "/posts/minimum-viable-product": "/writing/minimum-viable-product",
    "/posts/do-repeat-yourself": "/writing/do-repeat-yourself",
    "/posts/typing-your-api-routes-with-template-literal-types":
      "/writing/typing-your-api-routes-with-template-literal-types",
    "/posts/prevent-impossible-states-with-union-types":
      "/writing/prevent-impossible-states-with-union-types",
    "/posts/animating-gradient-border": "/writing/animating-gradient-border",
    "/posts/fine-grained-reactivity": "/writing/fine-grained-reactivity",
    "/posts/writing-a-good-rfc": "/writing/writing-a-good-rfc",
    "/posts/the-speed-limit-berm": "/writing/the-speed-limit-berm",
    "/posts/my-current-thoughts-on-frontend-testing":
      "/writing/my-current-thoughts-on-frontend-testing",
    "/posts/jheys-exploding-layers": "/writing/jheys-exploding-layers",
    "/posts/solid-rendered-bluesky-comments":
      "/writing/solid-rendered-bluesky-comments",
  },

  site: "https://jhroemer.github.io/",

  experimental: {
    svg: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
