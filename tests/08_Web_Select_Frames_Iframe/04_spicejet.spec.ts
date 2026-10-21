
import { test, expect } from '@playwright/test';

test('Spicjet', async ({ page }) => {

    await page.goto("https://www.spicejet.com/");
    await page.pause();
    await page.getByText("Allow this time", { exact: true });
    await page.getByTestId("to-testID-origin").click();
    await page.getByTestId("to-testID-origin").getByRole('textbox').fill("am")
    await expect(page.getByTestId("to-testID-origin")).toContainText("Amritsar");
    await page.getByText("Amritsar", { exact: true }).click();
    await page.getByTestId("to-testID-destination").click();
    await page.getByTestId("to-testID-destination").getByRole('textbox').fill("go")
    await expect(page.getByTestId("to-testID-destination")).toContainText("Goa");
    await page.getByText("Goa", { exact: true }).first().click();
    
});