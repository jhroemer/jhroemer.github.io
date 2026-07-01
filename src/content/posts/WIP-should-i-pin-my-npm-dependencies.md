---
slug: on-pinning-npm-dependencies
title: "On pinning npm dependencies?"
tags: [npm, yarn, pnpm]
pubDate: 2026-03-22
draft: true
---

# TODO:

New title: why use ranges if the package-lock file pins dependencies anyway?

- thought I would turn the question its head, instead of the usual response which is "why pin package.json when this is handled by the lockfile". So besides of being an extra step (npm uses caret by default), let's see why that might be.
- Link to renovate, skip most of the formality
- TLDR: pin only for apps, only in unison with dependabot/renovate, not for packages
- Can hurt de-duplication - though if you work with dependabot updates, it's unlikely that you have a direct dependency that is pinned lower than a transitive dependency of the same package
- 0.x.y is a special case: 1. because npm treats caret ranges differently in this case https://github.com/npm/node-semver#caret-ranges-123-025-004 and 2. because even with ~ being strict you would not want to use ranges at all when using 0.x versions

I personally still like to pin versions, and to try and be more aware about what's going on in my dependency tree. Sure, dependabot PRs can feel like an onslaught, especially if you actually want to go through changelogs etc. But I've had a fairly high return of investment personally, it's actually quite nice staying up-to-date with what's going on with your dependencies. It may also make you more aware and concerned with the cost and value of your dependencies.

## recommendation

- pinning can be a good idea for projects that are not packages
- packages should not use pinoning for their dependencies, because consumers cannot bump their transitive dependencies. They would need to do this e.g. in case of vulnerabilities, instead of relying on your package to release a new version, or having to use yarn resolutions or similar to overwrite.
- as a package you don't have full controll over your dependency tree anyway since consumers can overwrite etc, so you're forced to embrace this. Your package does not ship with its package-lock.json
- Pinning also means that (unless the package pins) transitive dependencies will be deduplicated to using your pinned version, so you can exert more control over your transitive dependencies. When dedupliation happens, since your dependency is pinned, the transitive dependency will be forced to use your version (if possible of course) instead of the other way around.
- Pin for own projects (if you want to), don't do this for packages.
- Regardless what you do, read your package-lock.json file, inspect your npm graph, use e18e or similar resources to get a sane dependency tree.
- As both a package author and consumer, use npmx, you (easily) get lots of insights that are otherwise easy to miss.

- https://medium.com/node-js-cybersecurity/risks-of-transitive-dependencies-in-node-js-2683b16f3089
- https://www.herodevs.com/blog-posts/securing-transitive-dependencies-in-end-of-life-software-a-guide
- https://docs.npmjs.com/cli/v9/commands/npm-dedupe?v=true
- https://yarnpkg.com/cli/dedupe
