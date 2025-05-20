import { test, expect, type Page } from "@playwright/test";
import GET_https_public_api_bsky_app_xrpc_app_bsky_feed_getPo_post_2F3ljphoefymc2l_ZS1KSLN from "./mocks/GET_https_public.api.bsky.app_xrpc_app.bsky.feed.getPo.post%2F3ljphoefymc2l_ZS1KSLN";

export const setupFixtures = async (
  page: Page,
  fixtures: { url: string; response: unknown }[]
) => {
  await Promise.all(
    fixtures.map(async (fixture) => {
      await page.route(fixture.url, async (route) => {
        await route.fulfill({ json: fixture.response });
      });
    })
  );
};

test("Root page", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });

  await page.goto("/", {
    waitUntil: "networkidle",
  });

  await expect(page).toHaveScreenshot("root-light.png");

  await page.emulateMedia({ colorScheme: "dark" });

  await expect(page).toHaveScreenshot("root-dark.png");
});

test("About page", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });

  await page.goto("/about", {
    waitUntil: "networkidle",
  });

  await expect(page).toHaveScreenshot("about-light.png");

  await page.emulateMedia({ colorScheme: "dark" });

  await expect(page).toHaveScreenshot("about-dark.png");
});

test("Blog/writing page", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });

  await page.goto("/writing", {
    waitUntil: "networkidle",
  });

  await expect(page).toHaveScreenshot("blog-light.png");

  await page.emulateMedia({ colorScheme: "dark" });

  await expect(page).toHaveScreenshot("blog-dark.png");
});

test("Projects page", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });

  await page.goto("/projects", {
    waitUntil: "networkidle",
  });

  await expect(page).toHaveScreenshot("projects-light.png");

  await page.emulateMedia({ colorScheme: "dark" });

  await expect(page).toHaveScreenshot("projects-dark.png");
});

test("Blog comments", async ({ page }) => {
  setupFixtures(page, [
    GET_https_public_api_bsky_app_xrpc_app_bsky_feed_getPo_post_2F3ljphoefymc2l_ZS1KSLN,
  ]);

  await page.emulateMedia({ colorScheme: "light" });

  await page.goto("/writing/jheys-exploding-layers", {
    waitUntil: "networkidle",
  });

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  await expect(page).toHaveScreenshot("blog-comments-light.png");

  await page.emulateMedia({ colorScheme: "dark" });

  await expect(page).toHaveScreenshot("blog-comments-dark.png");
});
