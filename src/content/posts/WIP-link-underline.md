---
slug: Animating link underline
title: "Link underline"
tags: [Web development]
pubDate: 2024-01-08
draft: true
---

..

### First approach, pseudo element

https://tobiasahlin.com/blog/css-trick-animating-link-underlines/

One issue is that this approach doesn't respect characters like a normal underline. TODO: find correct term

Another, arguably small and negligible, difference is that the pseudo element is styled independently, and so if you're changing text color you have to make sure to change the pseudo-element color. Since the pseudo element uses background color, and the text uses color, you can't just inherit the property, so it's somewhat annoying.

TODO: a11y?

### CSS underline properties

https://css-irl.info/animating-underlines/
