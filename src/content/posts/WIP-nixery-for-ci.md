---
slug: todo
title: "Nixery for CI"
tags: []
pubDate: 2026-07-28
draft: true
---

<!-- TODO: consider adding a note about skipping to section x if you just want to get started migrating -->

## Comparing the Github Action environment with Tangled CI

Github:

- github action runners runs on VM's or containers
- https://docs.github.com/en/actions/concepts/runners/github-hosted-runners
- for simplicity let's focus on linux-based runners (ubuntu-latest, and not self-hosted, ARM, GPU), if you're using larger runners currently and want to use Tangled you should probably be looking at self-hosting your runner, which is way beyond this post.
- dependencies are handled through image use or are installed as part of steps
- docker vs javascript actions (https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions#docker-container-actions)
- linux and windows runners are hosted on azure (macos in azure datacenters, whatever that distinction is) - the github actions agent is a fork of the azure pipelines agent
- If you're wondering what you're actually asking for writing (ahem, copy-pasting- or agent writes) `ubuntu-latest` then those are simply runner images specified here: https://github.com/actions/runner-images

Tangled:

Tangled's CI runners are called "Spindles" is a simple format for writing CI/CD pipelines, and it's in many ways similar to github actions. The most notable difference is how it leans heavily into the Nix ecosystem. I'm not much of a Nix nerd myself, but I can recommend trying it out within the official docker image, if you don't want to commit and go through the somewhat involved installation process. I've also tried to summarize some of the general things you need to know for working with Nix packages in the next section.

- you specify, per job or per step, the dependencies you need
- explain nix's caching mechanism

## What you need to know about nix

- What is Nix even? How does it work?
- hands on with nix (nixos/nix image)
- What is Nixery?
- How does Nixery handle caching? Per package vs docker layers
- https://search.nixos.org/packages

## What cannot be converted today?

- Tangled CI is read-only currently, there is no write concept similar to github actions
- No reusable actions and marketplace. But access to all the nix packages.

## tangleflow

While some things don't convert well between the two CI systems, some things do. Workflows both use the concept of hooks that can trigger workflows (on vs when), steps for what the workflow should do and environment variables.

- Cloning is a 1st class citizen in Tangled CI (the clone field https://docs.tangled.org/spindles#spindles) whereas GHA uses the checkout action for this
- Engines: nixery vs microVM

- ...
