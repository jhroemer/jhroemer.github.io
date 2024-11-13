import { test, expect } from "@playwright/test";

test("Visual regression testing", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });

  await page.goto("/", {
    waitUntil: "networkidle",
  });

  await expect(page).toHaveScreenshot("root-light.png");

  await page.click('[data-testid="about-link"]');

  await expect(page).toHaveScreenshot("about-light.png");

  await page.click('[data-testid="blog-link"]');

  await expect(page).toHaveScreenshot("blog-light.png");

  await page.emulateMedia({ colorScheme: "dark" });

  await page.click('[data-testid="root-link"]');

  await expect(page).toHaveScreenshot("root-dark.png");

  await page.click('[data-testid="about-link"]');

  await expect(page).toHaveScreenshot("about-dark.png");

  await page.click('[data-testid="blog-link"]');

  await expect(page).toHaveScreenshot("blog-dark.png");
});
