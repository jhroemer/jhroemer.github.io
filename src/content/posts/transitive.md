---
slug: transitive-dependencies
title: "Transitive dependencies"
tags: [npm, yarn, pnpm]
pubDate: 2026-03-22
draft: true
---

- https://medium.com/node-js-cybersecurity/risks-of-transitive-dependencies-in-node-js-2683b16f3089
- https://www.herodevs.com/blog-posts/securing-transitive-dependencies-in-end-of-life-software-a-guide
- https://docs.npmjs.com/cli/v9/commands/npm-dedupe?v=true
- https://yarnpkg.com/cli/dedupe

TODO: consider starting with a TLDR

- Minimal implementation
- npm/yarn/pnpm
- effect on node_modules
- effect on package-lock.json

New intro:

## Should I pin dependencies or not?

- What is pinning?
- Generally; why pin? Compromised pacages, determinism (although overlap w.
  package-lock.json), get notified about even patch/minor packages
- Always done in conjunction w. dependabot or renovate
- npmrc save-exact

## What do we need to understand first

## package-lock.json

- This is only for your own project, it's not part of your build output
- shrinkwrap, but you probably don't want to do this.

## dependency resolution

- deduplication

## Differences between npm, yarn, pnpm that we need to observe?

## Two typical use cases: own project or package

## recommendation

- pinning can be a good idea for projects that are not packages
- packages should not use pinoning for their dependencies, because consumers cannot bump their transitive dependencies. They would need to do this e.g. in case of vulnerabilities, instead of relying on your package to release a new version, or having to use yarn resolutions or similar to overwrite.
- as a package you don't have full controll over your dependency tree anyway since consumers can overwrite etc, so you're forced to embrace this. Your package does not ship with its package-lock.json
- Pinning also means that (unless the package pins) transitive dependencies will be deduplicated to using your pinned version, so you can exert more control over your transitive dependencies. When dedupliation happens, since your dependency is pinned, the transitive dependency will be forced to use your version (if possible of course) instead of the other way around.
- Pin for own projects (if you want to), don't do this for packages.
- Regardless what you do, read your package-lock.json file, inspect your npm graph, use e18e or similar resources to get a sane dependency tree.
- As both a package author and consumer, use npmx, you (easily) get lots of insights that are otherwise easy to miss.
