
import { test, expect } from "@playwright/test"

test ('Custom dropdown test ', async ({page}) =>
{

// single - searchable     
await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

await page.locator("#rs-single").click();

await page.getByText("Cypress").click();

// await page.pause();

// OR await page.locator("#rs-single").fill("cypress").click();

// multi - searchable 

await page.locator("#rs-multi").click();
await page.getByText("Pytest", { exact : true } ).click();
await page.getByText("JUnit", { exact : true } ).click();
await page.keyboard.press("Escape");
// await page.pause();


// ③ Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing", { exact: true }).click();
    await page.getByText("security", { exact: true }).click();
    await page.keyboard.press("Escape");
  //  await page.pause();
    await page.waitForTimeout(2000);

// async - type and click

await page.locator("#rs-async").click();
await page.getByTestId('rs-async-input').fill("pune");
await expect(page.getByTestId('rs-async-menu')).toContainText("Pune");
await page.getByText("Pune", { exact: true} ).click();

// OR await page.getByRole('option', { name: 'Pune' }).click();
await page.waitForTimeout(2000);


});