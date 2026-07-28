
import { test, expect } from "@playwright/test"

test("Launch two pages", async ({browser}) =>{

    let academyContext = await browser.newContext();
    let academyPage = await academyContext.newPage();

    let ttaContext  = await browser.newContext();
    let ttapage = await ttaContext.newPage();

    await academyPage.waitForTimeout(5000);
    await academyPage.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await academyPage.waitForTimeout(5000);
    await ttapage.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");

    console.log("testingacademy", academyPage.url());
    console.log("testingacademy", ttapage.url());

    await academyContext.close();
    await ttaContext.close();


});