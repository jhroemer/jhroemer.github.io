---
slug: todo
title: "Nixery for CI"
tags: []
pubDate: 2026-07-28
draft: true
---

<!-- TODO: consider adding a note about skipping to section x if you just want to get started migrating -->

Github Actions (henceforth abbreviated GHA).

- not intended for expert-level audience, practical advice at the end (link), and otherwise covering basics, most common use cases

## Comparing the Github Action environment with Tangled CI

If you're here you might not be looking at migrating huge enterprise pipelines, you might not already be a CI wizard (neither am I!) and there's a good chance that you have `runs-on: ubuntu-latest` in your current GHA workflows. So what does that line actually mean? The obvious part is that you're asking for something with Ubuntu on it, so a linux machine, and that this is what's used for your workflow (what it's running on). `latest` is a floating tag for the ubuntu version, meaning that it points to a specific version but that it will update over time to point to newer versions. As of today ubuntu-latest for example points to ubuntu-24.04. You can see an overview of the different images [here](https://github.com/actions/runner-images).

What you get by asking for ubuntu 24.04 (as an example) is a VM image running on a GitHub-hosted runner, and I think it's safe to assume that this is what most people are using, since it's standard, good enough for most use cases and free to use for personal projects.

<!-- might be to basic -->

A 'runner' in this case is simply a software process running on one of github's servers, that takes care of setting up a VM or container which can execute the code you're asking it to execute.

<!-- TODO: mention non-linux based runners in a sentence or two -->

You can use windows and macOS-based runners too. Similar to the linux images they're free for public projects, but I'm not sure they're very common.

There are notable variations like the `ubuntu-slim` variant (which as the name suggests ships with less stuff) and the `ubuntu-arm` variant (uses the ARM processor architecture, can be useful to speed up execution a little and is supposed to be more environmentally friendly too!), both of which you might want to take a second look at. But hey, you're probably here because you're thinking about moving CI to tangled, so why don't we take a look at what you're getting when you're running

- dependencies are handled through image use or are installed as part of steps
- docker vs javascript actions (https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions#docker-container-actions)
- linux and windows runners are hosted on azure (macos in azure datacenters, whatever that distinction is) - the github actions agent is a fork of the azure pipelines agent

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
