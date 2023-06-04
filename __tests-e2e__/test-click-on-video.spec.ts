import { expect, test } from '@playwright/test';

test('test click on image and go to video page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'Screen Recording' })).toBeTruthy();
  await expect(page.getByRole('button', { name: 'Start session' })).toBeTruthy();
  await page.getByRole('link', { name: 'Got to the video' }).first().click();
  await expect(page).toHaveURL('http://localhost:3000/video?url=https://assets.dev.verse-core.vrse.gg/frontend-interview/84dd96e0-4821-40e7-9292-979ef3e080b1/41ef68fc-7313-4f74-84e5-247c0732769e/746a32a2-e72e-404b-970d-27b90aa0b20f.mp4');
});