import { test, expect } from "@playwright/test";

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

test("Blog page", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });

  await page.goto("/blog", {
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
