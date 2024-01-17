---
slug: rfc-learnings
title: "Writing a good RFC"
tags: [Software development]
pubDate: 2023-12-27
draft: true
---

I recently went through the RFC process, for the direction and technical solution to an internal system in my organization. It's not the first time I create such a document, but it's the first time I've done it on a large scale, both in terms of the scope of the document and amount of reviewers. And it didn't actually start out very well.

At least that's what I thought a few days after publishing. While I outlined more than one potential technical solutions to the problem in question, the proposed solution was opposed quite strongly by a few of the stakeholders, and I was getting feedback that I didn't anticipate, and in sections that surprised me.

.. in the end it went really well.
Confusing RFC of both product, technical etc.
Brings me to my first point:

### It doesn't need to be perfect

- You're looking for the productive discussions
- You're looking for feedback
- You're looking for alignment

It turns out, my RFC was extremely effective at provoking all of that, albeit in a more chaotic way than I anticipated.

With that in mind, there's obviously things I would do differently next time.

### Less is more

The more you write, the more there is to nitpick on which will distract the conversation. Make your sections count.

### Scope is your friend

Related to prior point, but more about the essence of your topic, than the amount of words.
You might be asked a high amount of questions, and sometimes about things which aren't really in scope for the RFC. Save everyone's time by clearly scoping the work at the very beginning of the document.
Complexity is the enemy of execution.

### Remember what the point is: discussion:

Related to my post on the MVP/RAT; you're not doing this to convince everyone you're right, and show how good you are. You're doing this to facilitate discussion. Helps if you don't have too high thoughts of your own genius, and are willing to be swayed by good arguments (I'm a natural in this regard! ;-) )

### Data

Provide data wherever you can. Data is often much easier for discussions, especially if you present it neutrally. Be careful that you're not using data in a way that seems like your pushing your point, and twisting it to your benefit.

### Time

The most important thing you're doing is to come up with a thought-through proposal for something, but it doesn't need to-, nor is it possible to-, be perfect. That's the whole intention with writing an RFC, to widen the circle of people who can help think about a problem.
