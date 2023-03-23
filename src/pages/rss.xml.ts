import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Jens Rømer Hesselbjerg | Blog",
    description: "My personal blog",
    site: "https://jensroemer-astro.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
