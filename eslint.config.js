import eslintPluginAstro from "eslint-plugin-astro";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ["assets"],
  },
];
