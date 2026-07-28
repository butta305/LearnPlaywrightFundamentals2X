
import { test, expect } from "@playwright/test" 

test("two users interact", async ({browser}) => {
   
    let adminContext = await browser.newContext();
    let adminpage = await adminContext.newPage();
    
    let guestContext = await browser.newContext();
    let guestpage = await guestContext.newPage();

    // creating the Contexts from browser and pages from Context
    
    await adminpage.goto("https://app.vwo.com/#login");
    await guestpage.goto("https://app.vwo.com/#dashboard/home");

    console.log("Admin URL", adminpage.url());
    console.log("guest URL", guestpage.url());

    await adminContext.close();
    await guestContext.close();


});