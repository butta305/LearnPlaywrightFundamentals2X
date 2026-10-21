
import {test, expect} from "@playwright/test"

test("verify error message in vwo freetrial page", async ({page}) => {

    await page.goto("https://vwo.com/free-trial/");

    await page.getByRole('textbox', { name : "email" }).fill("testing");
    await page.getByRole('checkbox').check();

    await page.getByRole('button', { name: "Create a Free Trial Account"}).click();

    // await page.getByText('The email address you entered is incorrect.').textContent();

    let error_msg = await page.locator("xpath = //div[text()='The email address you entered is incorrect.']").textContent();
    expect(error_msg).toContain("The email address you entered is incorrect.");
});


/* here we can also use page,getByText() for 'Error msg', but it is recommended
    to use page.locator() , because 'Error msg' might change at any time.
    Always dont use Playwright inbuilt functions (getByText, getByRole , ...)
    for non-static ( changing) elements */

