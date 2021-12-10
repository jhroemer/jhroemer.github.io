---
slug: internal-ci-at-unity-technologies-mvp
title: "Internal CI at Unity Technologies, pt. 1: MVP"
tags: [Product development, MVP, RAT]
---

Around a month ago I did an internal presentation about some of the learnings I had over the past two years at Unity Technologies. This post is an extension of the first topic in the presentation; the Minimum Viable Product (MVP).

<!--truncate-->

For the past two years I’ve been working on a new web interface for an internal CI (Continuous Integration) service at Unity Technologies. This has been a profound learning experience for me; I’m a much better developer today than I was two years ago, but more importantly, I’ve become wiser in terms of product development.

Two years ago I was not very well-versed in the MVP concept, which well-known product development term. I knew the abbreviation, and had an idea about what it is, due to the (seemingly) self-explanatory name.
But assumptions are dangerous. And this is certianly also the case for the fabled MVP.

<hr class="narrow-hr"/>

Let’s start by defining the different parts of the MVP concept.

<ul>
  <li>Minimum: the least or smallest amount or quantity possible.</li>
  <li>Viable: capable of working successfully. Able to work as intended.</li>
  <li>
    Product: something that is made or grown to be sold or used (in this case
    obviously software products).
  </li>
</ul>

Putting that together we get to something like:

> a product of the smallest amount possible which is able to work as intended.

Using the MVP concept just by using this definition can easily push you into one of the common blunders of software engineering: focusing on _what_ and _how_ to do something without knowing _why_. Luckily we have literature at our disposal, and there’s plenty of reading to be had about this subject. One very famous book on the subject, [The Lean Startup by Eric Ries](http://theleanstartup.com/) , has a definition that has a somewhat different angle:

> Version of a new product, which allows a team to collect the maximum amount of validated learning about customers with the least effort.

This definition also captures why you would want to use an MVP: we want to learn as much as we can about customers and our product with the least effort. A keyword here is _learning_. Your MVP can erroneously become synonymous with the first release of your product, and you’re missing out if it does. Products fail because of assumptions that aren’t true - and if you find out too late, or never, your product is likely to fail.

<hr class="narrow-hr"/>

One of the core challenges is deciding how minimal your MVP should be. This goes hand in hand with viability. You want something that can be put into the hands of users, and elicit real feedback and learning, which can be used to correct the path you’re on. But you do not need a polished product to elicit this feedback. In fact, you want to avoid polishing something that is likely to change drastically. Focus then should be on viability, and the viability of your product depends on the assumptions you have about the product. You might actually favour the newer kid on the block, the Riskiest Assumption Test (RAT), over the MVP, because it puts a stronger focus on testing your assumptions about a product.

Regardless of which of those you choose, you should narrow down on the assumptions that can make or break your product. Some of these assumptions might not be unique to your product and/or can be validated with research, UX or other means. But you are likely to have assumptions that are unique to your product, and which will have to hold true for your product to succeed. If you do not, then an MVP/RAT might not even be the correct tool for you. If you do, you’re gonna be much more likely to succeed if you put your assumptions to the test, and learn as early as possible.
