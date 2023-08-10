import {test} from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('Name').fill('Yoann');
  await page.getByLabel('Gender').fill('mal');
  await page.getByLabel('Gender').press('Enter');
  await page.getByLabel('Nationality').fill('fre');
  await page.getByLabel('Nationality').press('Enter');
});
