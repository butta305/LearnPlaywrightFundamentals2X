
import {test, expect, FrameLocator, Locator} from "@playwright/test"

test("multiple iframe ", async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");


    let multiframe : FrameLocator = await page.frameLocator('[name="main"]');
    let heading = await multiframe.locator("#main-heading").innerText();
    // OR let heading = await multiframe.locator('h2').innerText();
    console.log(heading);

   const allframes: Locator[] = await page.locator('//frame').all();
    console.log('total no of frames: ' + allframes.length);

   for( const frame of allframes )
   {
       console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));
   }

   let sideframe : FrameLocator = await page.frameLocator('[name="side"]');
   await sideframe.getByTestId('side-link-overview').click();

   await page.pause();


});