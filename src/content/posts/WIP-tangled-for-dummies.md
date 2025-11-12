---
slug: tangled-for-dummies
title: "Tangled for dummies"
tags: [Go]
pubDate: 2025-08-11
draft: true
---

# ...

This post is largely for myself, just documenting some of the onboarding steps.
If it can help someone else, then all the better.

# Contributing to OSS

- It's a project that I really like
- The tech stack is fun/interesting
- I can actually help the project, without massive amounts of onboarding.
- And if I stop contributing next months it's also fine

# Nix

- For certain reasons I don't dare to install Nix directly on it. I don't really think it's an issue, but the amount of sudo commands needed feel a bit scary/invasive.
- So, if you're looking to trying things out, but not willing to install Nix, then you can solve it with docker.
- Had a chat w. another contributor, Will, who made pointed the obvious, that you can just develop in a Nix image.
- Dockerize (thanks Will)

# Redis

- ..

# SH

- Tangled requires push over SSH instead of HTTPS

# Go templates

- Fundamentally different to work with html
- Views are explicitly returned from server-side function calls. You provide the function call with an object and a template. The object properties are then accessible in the template.

# HTMX

- Provides the interactivity aspect, instead of only having full page refresh updates
- Lots of good articles, from a provocative but smart gui (Carson Gross)
- I guess this might be where I've spent the least time, partly because my contributions so far have been extremely trivial
- HTMX 4 coming up?

# Get involved
