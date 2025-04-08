# jensroemer.com

This repository contains all the code for my personal website, hosted at www.jensroemer.com.

## Run the project

Make sure to install dependencies with `npm install`. Then run the dev server by running `npm run start`, the page will be available at `http://localhost:4321/`.

## Visual regression testing

You need to have [Docker](https://docs.docker.com/get-docker/) installed. You can then run the visual regression tests locally by running:

```
npm run test
```

If you have made changes and need to update the snapshots:

```
npm run test:update
```

For tests that depend on fetching data, mock the specific endpoints with:

```
npm run generate-mock
```

Which will run [ts-generate-mock-data](https://github.com/jhroemer/ts-generate-mock-data) - follow the prompts and the mock data will be saved to a TS file in /tests/mocks.

## VSCode setup (optional)

Install the recommended extensions in .vscode/extensions.json.
You can do this automatically by opening the Extensions tab in VS Code and follow the prompts.
