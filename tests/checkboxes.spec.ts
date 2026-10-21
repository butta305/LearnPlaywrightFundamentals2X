import { test, expect } from '@playwright/test';

const URL = 'https://the-internet.herokuapp.com/checkboxes';

test('TC-001 - User opens the checkboxes page and sees the page content', async ({ page }) => {
  await page.goto(URL, { waitUntil: 'domcontentloaded' });

  await expect(page).toHaveTitle('The Internet');
  await expect(page.locator('h3')).toContainText('Checkboxes');
});

test('TC-002 - User verifies the default checkbox states', async ({ page }) => {
  await page.goto(URL, { waitUntil: 'domcontentloaded' });

  const checkboxes = page.locator('input[type="checkbox"]');
  await expect(checkboxes).toHaveCount(2);
  await expect(checkboxes.nth(0)).not.toBeChecked();
  await expect(checkboxes.nth(1)).toBeChecked();
});

test('TC-003 - User clicks checkbox 1 to select it', async ({ page }) => {
  await page.goto(URL, { waitUntil: 'domcontentloaded' });

  const checkboxes = page.locator('input[type="checkbox"]');
  await checkboxes.nth(0).click();
  await expect(checkboxes.nth(0)).toBeChecked();
});

test('TC-004 - User unchecks checkbox 2 by clicking it', async ({ page }) => {
  await page.goto(URL, { waitUntil: 'domcontentloaded' });

  const checkboxes = page.locator('input[type="checkbox"]');
  await checkboxes.nth(1).click();
  await expect(checkboxes.nth(1)).not.toBeChecked();
});

test('TC-005 - User clicks checkbox 2 twice and the state changes predictably', async ({ page }) => {
  await page.goto(URL, { waitUntil: 'domcontentloaded' });

  const checkboxes = page.locator('input[type="checkbox"]');
  await checkboxes.nth(1).click();
  await expect(checkboxes.nth(1)).not.toBeChecked();
  await checkboxes.nth(1).click();
  await expect(checkboxes.nth(1)).toBeChecked();
});
