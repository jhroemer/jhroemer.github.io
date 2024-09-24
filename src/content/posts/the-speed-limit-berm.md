---
slug: the-speed-limit-berm
title: "The speed limit berm"
tags: [Design, UX]
pubDate: 2024-09-23
---

If the title makes no sense to you then don't worry - it's because you're not into mountain biking, like I am. Even if you're into mountain biking, it still might not make any sense, so let me elaborate. I like analogies, and one of my favorites in the context of design has been the speed bump. I also like coming up with- or discovering new analogies, especially if they involve something I'm interested in. Which is why you might end up reading about mountain biking on a developer blog.

### The speed bump

But first, let's talk about the speed bump. I've tried and failed to find the original reference, which I think is from a class in interaction design many years ago. The idea is that when you're designing something, and you're trying to make the user do the right thing, you can choose to go for a solution similar to a speed limit sign, or you can use a speed bump. The sign is less effective because users can easily ignore it, whereas the speed bump forces users to slow down to avoid damaging their car. You can apply this sort of thinking to digital design. Generally whenever there's a situation where users can do something wrong, you can use the speed bump to forcefully prevent wrong usage instead of trying to eliminate wrong usage, by providing instructions, warnings, banners etc.

How does a speed bump look in digital design? A typical example is some kind of entity deletion, which is exposed in the UI to users. Instead of letting them delete something with a simple click of a button, they also need to confirm deletion, by entering the name of what they want to delete in an input field. That forces them to stop and think about their action, and prevents mistakes. This is also what's called a [forcing function](https://www.interaction-design.org/literature/book/the-glossary-of-human-computer-interaction/forcing-functions).

There's one issue with the analogy, and the solution, though; which is that few people actually like speed bumps. They add a type of friction which, although it serves a purpose, is annoying. On top of that, the reference is also somewhat ambiguous, since it is also used to describe [bad ux](https://articles.ux-primer.com/friction-points-identifying-and-refining-problem-areas-in-user-journeys-e7efbc00f75e).

### The speed limit berm

Now for the second analogy, the speed limit berm, it's probably easiest to understand if we start with the problem. Mountain biking is often done on dedicated [single tracks](<https://en.wikipedia.org/wiki/Single_track_(mountain_biking)>), which are narrow trails built in forests and mountains. These trails sometimes intersect with gravel/fire roads, which can lead to accidents, where mountain bikers suddenly cross the road in great speed, and collide with someone using the road.

You can handle this issue by establishing a barrier (speed bump), or using a sign, and try to force the mountain biker to reduce their speed. We already talked about those two solutions in the prior section. A more attractive solution is to build a tight [berm](https://www.youtube.com/watch?v=z1Oh-KQ3btU&ab_channel=GlobalMountainBikeNetwork) (a banked turn, a popular and fun feature of most mountain bike trails) just before the intersection. If build right, this will cause a low exit speed out of the turn, which counteracts collision dangers in the intersection, while offering a challenging and fun experience for the mountain bikers.

This is an elegant and well-designed solution that leverages its core function to enhance safety. It reminds me of Dieter Rams' [fourth design principle](https://www.vitsoe.com/eu/about/good-design), that "Good design makes a product understandable", and self-explanatory. Product manuals are well and good, but nothing beats a product that you intuitively know how to use (correctly!). At the other (bad) end of the spectrum you find [Norman doors](https://uxdesign.cc/intro-to-ux-the-norman-door-61f8120b6086).

### Speed limit berms in digital design?

These things can be hard to spot, since they're designed to not be in the way, but to feel like a natural part of the journey. They are part of products that are enjoyable and _just work_. My best tip is this: if you find that you're doing something that could be a speed limit sign, then take a step back, and consider if you can do better. You might be better off with a speed bump (forcing function), to make sure users don't get into trouble. But sometimes you can aim even higher.

There's an example from airbnb in [this](https://medium.com/@steveselzer/the-fiction-of-no-friction-17da9349459a) article. The article is about friction, and how it's something we typically focus on eliminating in designs. But some types of friction are desirable (challenging MTB turns, anyone?), which you should try to identify and take advantage of. The example is about how they changed their customer support approach, by connecting hosts directly with guests, instead of going with the classical customer service approach. An approach that introduced more friction for hosts, but which turned out to have great results for both hosts and guests, connecting them and building community.
