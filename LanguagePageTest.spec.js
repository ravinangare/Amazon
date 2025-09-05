import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
//  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await expect(page.getByRole('link', { name: 'Choose a language for shopping in Amazon India. The current selection is' })).toBeVisible();
  await page.getByRole('link', { name: 'Choose a language for shopping in Amazon India. The current selection is' }).click();
  await page.locator('label').filter({ hasText: 'हिन्दी - HI - अनुवाद' }).locator('i').click();
  await page.getByRole('button', { name: 'परिवर्तन सहेजें' }).click();
  await expect(page.locator('#nav-link-accountList-nav-line-1')).toContainText('नमस्ते. साइन इन');
});