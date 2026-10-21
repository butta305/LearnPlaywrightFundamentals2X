
import {test, expect, FrameLocator} from "@playwright/test"

test("single iframe ", async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");

    let singleframe : FrameLocator = await page.frameLocator("#frame-one");

    await page.waitForTimeout(2000);

    await singleframe.locator("#RESULT_TextField-1").fill("Rols Royals");
    await singleframe.locator("#RESULT_TextField-2").fill("tharakesh");
    await singleframe.locator("#RESULT_TextField-3").fill("B1202ANDHAR");
    await page.waitForTimeout(2000);

    await singleframe.locator("#RESULT_RadioButton-1").selectOption('Hatchback');
    
    await singleframe.locator("#RESULT_TextField-4").fill("2002");      
    await singleframe.locator("#RESULT_TextArea-1").fill("test frames");
    await page.waitForTimeout(2000);

    await singleframe.getByText('Submit registration', { exact : true }).click();

    let output = await singleframe.locator("#vehicle-output").innerText();
    console.log(output);

   // await page.pause();

    // In playwright there is no concept of going in and out of frames,
    // we can use inspect other elements anywhere in the page directly.
    // by using page.locator or getbytextid,.....
    
    
   
});

