# My personal website

This repository contains all the code for my personal website, hosted at www.jensroemer.com.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
| `npm run lint`         | Run linting on the project                       |

## Visual regression testing

You need to have [Docker](https://docs.docker.com/get-docker/) installed. You can then run the visual regression tests locally by running:

```
npm run test:visual:run
```

If you have made changes and need to update the snapshots:

```
npm run test:visual:update
```

## VSCode setup (optional)

Install the recommended extensions in .vscode/extensions.json.
You can do this automatically by opening the Extensions tab in VS Code and follow the prompts.
