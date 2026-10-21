
import { test, expect } from '@playwright/test';

// Use a pre-saved storage state so tests can run without logging in.
test.use({
  storageState: './user-session.json',
});

test('TC-02 - go directly to dashboard — no login (detailed steps)', async ({ page }) => {
  // Step 1: Confirm storage state is available in the browser context
  await test.step('Step 1 — Verify storage state is applied to the browser context', async () => {
    const storage = await page.context().storageState();
    // basic sanity check: storageState returns an object with cookies and origins
    expect(storage).toBeTruthy();
    // attach storage JSON to the report for debugging
    const info = test.info();
    await info.attach('step-1-storage-state', { body: JSON.stringify(storage, null, 2), contentType: 'application/json' });
  });

  // Step 2: Navigate to the inventory/dashboard page
  await test.step('Step 2 — Navigate to inventory dashboard', async () => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/inventory', { waitUntil: 'networkidle' });
  });

  // Step 3: Verify the URL is correct
  await test.step('Step 3 — Verify the URL contains /inventory', async () => {
    await expect(page).toHaveURL(/inventory/);
  });

  // Step 4: Verify the page body or a visible title indicates content loaded
  await test.step('Step 4 — Verify page content is visible', async () => {
    // Ensure the body is visible as a basic sanity check
    await expect(page.locator('body')).toBeVisible();
    // Optionally check for a textual indication of the inventory/dashboard
    const maybeTitle = page.locator('text=Inventory').first();
    if (await maybeTitle.count()) {
      await expect(maybeTitle).toBeVisible();
    }
  });

  // Step 5: Capture a screenshot for the report and attach it with a step-specific name
  await test.step('Step 5 — Capture and attach a screenshot of the dashboard', async () => {
    const info = test.info();
    const screenshot = await page.screenshot();
    await info.attach('step-5-screenshot', { body: screenshot, contentType: 'image/png' });
  });

  // Final: optional short pause for visual inspection when running interactively
  await test.step('Step 6 — Pause briefly (visual/manual check)', async () => {
    console.log('Dashboard loaded — no login needed ✅');
    await page.waitForTimeout(1000);
  });
});

/*
test('go directly to settings — no login', async ({ page }) => {
  await page.goto('https://app.vwo.com/#/settings/accounts/general?accountId=1227007');
  await expect(page).toHaveURL(/settings/);
  console.log('Settings loaded — still logged in ✅');
  await page.waitForTimeout(3000);
});
*/
