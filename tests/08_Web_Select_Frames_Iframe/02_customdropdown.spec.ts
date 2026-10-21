
import { test, expect } from "@playwright/test"

test ('Custom dropdown test ', async ({page}) =>
{

await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

await page.getByTestId("lang-trigger").click();
// OR await page.locator("#lang-trigger").click();

await page.pause();

await page.getByRole('option', { name: 'JavaScript' }).click();

// await page.getByText("JavaScript").click();



await page.getByTestId('experience-trigger').click();
await page.getByText("Mid-level (4-6 years)", { exact: true }).click();


});