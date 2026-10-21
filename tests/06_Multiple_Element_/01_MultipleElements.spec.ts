
import {test, expect} from "@playwright/test"

test("verify the multiple elements", async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    
    const rightpaneltexts:string[] = await page.locator("a.list-group-item").allInnerTexts();
    
    for(const Textsrpt of rightpaneltexts)
    {
        console.log(Textsrpt);
    }

    // OR 

    for (let i = 0; i < rightpaneltexts.length; i++) {
        console.log(rightpaneltexts[i]);
    }

    const rightpanellinks = await page.locator("a.list-group-item").all();

    for (const hreftexts of rightpanellinks)
    {
          console.log(await hreftexts.getAttribute("href"));
    }

    // FOR CLICKING ON SINGLE LINK OF MULTIPLE ELEMENTS

    for(const Forgotpwd of rightpaneltexts)
    {
        if( Forgotpwd === "forgotten-password-link")
        {
            await page.getByText('forgotten-password-link').first().click();
        }
        
    }

});


