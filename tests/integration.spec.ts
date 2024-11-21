import { test, expect } from "@playwright/test";

test("Blog post header anchor links", async ({ page }) => {
  await page.goto("/posts/the-speed-limit-berm", {
    waitUntil: "networkidle",
  });

  const speedBumpLink = page.getByTestId("anchor-heading-the-speed-bump");

  expect(speedBumpLink).toHaveCSS("opacity", "0");

  await page.hover("#the-speed-bump");

  await expect(speedBumpLink).toHaveCSS("opacity", "1");

  await speedBumpLink.click();

  await expect(page).toHaveURL("/posts/the-speed-limit-berm#the-speed-bump");
});
