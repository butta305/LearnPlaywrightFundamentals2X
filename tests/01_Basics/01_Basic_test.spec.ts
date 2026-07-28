
import {test, expect} from "@playwright/test"

test("verify the tile", async ({page}) => {

    await page.goto("https://app.vwo.com")
    const title = await page.title();
    console.log("Page Title:", title);
    await expect(page).toHaveTitle("Login - Wingify");
});

// PAGE IS FIXTURE INJECTED BY PLAYWRIGHT BY DEFAULT