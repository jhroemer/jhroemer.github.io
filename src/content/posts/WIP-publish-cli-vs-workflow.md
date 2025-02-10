---
slug: publish-cli-vs-workflow
title: "Publish your npm package - CLI vs workflow"
tags: ["npm", "package development"]
pubDate: 2025-01-17
draft: true
---

## CLI

- Version bump only after everything went through successfully
- Lots of nice things to get through something like [np](https://github.com/sindresorhus/np), helps you enforce semver etc.
- Local .npmrc file
- Should be able to generate release notes, but is hard to get to work with repo's hosted on private registries

## Workflow

- Auth token saved as secret
- One time configuration
- Releasing through a point-and-click interface
- Generating release notes is neat
- Need to have registry saved in .npmrc file?
- Local .npmrc file?
- TODO: how to load in auth token in workflow
