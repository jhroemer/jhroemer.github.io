---
slug: rfc-learnings
title: "Writing a good RFC"
tags: [Software development]
pubDate: 2023-12-27
draft: true
---

I recently went through the [RFC process](https://en.wikipedia.org/wiki/Request_for_Comments), for the direction and technical solution to an internal application in my organization. In case you're unfamiliar with the concept, it's basically a process in which you author documents about upcoming non-trivial pieces of engineering work, and make that document open for peer-review for your entire org- or company. [It can be very effective and efficient way](https://blog.pragmaticengineer.com/scaling-engineering-teams-via-writing-things-down-rfcs/) to discuss new solutions in a technical company or organization. It's not the first time I create such a document, but it's the first time I've done it on a larger scale, both in terms of the scope of the document and amount of reviewers. And frankly, it didn't start out very well.

At least that's what I thought, a few days after publishing. The proposed solution was opposed quite strongly by a few of the stakeholders, and I was getting feedback that I didn't anticipate, in sections that surprised me. And I had been thorough in investigating and outlining- and discussing multiple solutions.

My first reaction was frustration, and I was annoyed at myself for not having done a better job. But hold on, let's take a step back.

### Discussion

The reason you're going through the effort of producing an RFC is not to convince others, but to make sure that you're utilizing the collective knowledge you have in a company/org, and surface important discussions before the project kicks off. It's only natural that you would try to make the perfect proposal, that everyone will approve without question, but striving for perfect is often a fools errand. And what would 'perfect' even mean for an RFC?

From my perspective, you're looking for:

- Productive discussions; some things may be more complicated than they seem
- Feedback; is the proposal on the right- or wrong track? It's hard to know how success looks like, and maybe not going forward with a project is the path to success.
- .. and alignment; if you're dealing with a non-trivial problem, probably more than a few people are going to be working on it, or otherwise going to be impacted by it. Doesn't hurt to have some alignment.

It turns out, my RFC was extremely effective at provoking all of that, albeit in a more chaotic way than I anticipated.

That being said, there are things I learned and that I would do differently next time.

### Less is more

The more you write, the more there is to nitpick on, which may distract the conversation from the crucial area(s). So make your sections count. And this is not just about the length of your document and the number of words; reducing the _scope_ of your topic will make it much easier to get good and clear feedback. You might be asked a high amount of questions, and sometimes about things which aren't really in scope for the RFC. Save everyone's time by clearly scoping the work at the very beginning of the document. Complexity is the enemy of execution.

### Data

Provide data wherever you can. Data is often much easier for discussions, especially if you present it neutrally. Be careful that you're not using data in a way that seems like your pushing your point, and twisting it to your benefit.
And also, data is not everything.

### Time

This last point is less about you as an individual, and more about how the process is used in your company or organization. There are so many things we can do to improve the way we work, and the real challenge is to figure out what's worth doing and how much to invest in what. It's easy to set up more and more requirements, and to end up with a very time-consuming process. This means that the RFC process becomes very expensive to do, which is something to be wary of. Also, if the process is too heavy and time-consuming, adoption might turn out to be low. So if you're trying to set up something like this, then try to promote a lightweight and easy process, where things don't need to be extremely elaborate or perfect.
