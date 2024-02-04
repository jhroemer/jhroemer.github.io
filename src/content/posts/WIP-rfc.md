---
slug: rfc-learnings
title: "Writing a good RFC"
tags: [Software development]
pubDate: 2023-12-27
draft: true
---

<!-- TODO: include small reference for the RFC format, or explanation? -->

I recently went through the RFC process, for the direction and technical solution to an internal application in my organization. It's not the first time I create such a document, but it's the first time I've done it on a large scale, both in terms of the scope of the document and amount of reviewers. And frankly, it didn't start out very well.

At least that's what I thought, a few days after publishing. While I outlined more than one potential technical solutions to the problem in question, the proposed solution was opposed quite strongly by a few of the stakeholders, and I was getting feedback that I didn't anticipate, in sections that surprised me.

My first reaction was frustration, and I was annoyed at myself for not having done a better job. But hold on, let's take a step back. What are you actually looking for with an RFC? Smooth sailing?

### Remember what the point is: discussion:

While the RFC process is for proposals, the entire point with requesting peer-review is that you facilitate an open exchange of opinion on the subject of the proposal. Striving for perfect is often a fools errand, and what would it even mean for an RFC?

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

### Data

Provide data wherever you can. Data is often much easier for discussions, especially if you present it neutrally. Be careful that you're not using data in a way that seems like your pushing your point, and twisting it to your benefit.

### Time

The most important thing you're doing is to come up with a thought-through proposal for something, but it doesn't need to-, nor is it possible to-, be perfect. That's the whole intention with writing an RFC, to widen the circle of people who can help think about a problem.
