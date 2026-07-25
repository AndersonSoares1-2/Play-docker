import { test, expect } from "@playwright/test";
import { config } from "dotenv";

config();

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log("Environment variable TEST_ENV:", process.env.TEST_ENV);
  console.log("Environment variable BASE_URL:", process.env.BASE_URL);
  console.log("Environment variable USERNAME:", process.env.USERNAME);
  console.log("Environment variable PASSWORD:", process.env.PASSWORD);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});
