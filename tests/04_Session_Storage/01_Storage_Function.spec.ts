import { chromium } from "playwright";

async function saveSession() {

    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await page.waitForTimeout(2000);

    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "tta_secret");
    await page.waitForTimeout(1500);
    await page.click("#login-button");

    // Wait for login to actually complete before snapshotting storage —
    // otherwise the auth cookie isn't set yet and the saved state is empty.

    await page.waitForURL(/inventory/, { timeout: 10000 });
    await page.waitForTimeout(2000);

    await context.storageState({ path: "./user-session.json" });
    console.log("Session saved to user-session.json ✅");

    await page.waitForTimeout(2000);
    await browser.close();
}
saveSession();