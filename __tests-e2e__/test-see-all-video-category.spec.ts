import { expect, test } from '@playwright/test';

test('test click on see all', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: 'Shooters See All' }).getByRole('link', { name: 'See All' }).click();
  await expect(page.getByRole('listitem')).toHaveCount(61);
});