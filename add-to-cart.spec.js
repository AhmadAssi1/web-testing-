const { test, expect } = require('@playwright/test');

// Test suite for the "Add to Cart" functionality.
test('Add to Cart flow', async ({ page }) => {
  // Step 1: Navigate to the login page.
  await page.goto('https://preview--n-up43434b-ecommv01-sh.lovable.app/login');

  // Step 2: Fill in credentials and sign in.
  await page.fill('input[type="email"]', 'client@example.com');
  await page.fill('input[type="password"]', '!Aa123456');
  await page.click('button:has-text("Sign In")');

  // Step 3: Wait for the products page to load after login.
  // Instead of waiting for a specific URL, we wait for the "Hot Products"
  // heading to be visible, which confirms the page has loaded.
  await expect(page.locator('h2:has-text("Hot Products")')).toBeVisible({ timeout: 15000 });

  // Step 4: Add the first available product to the cart.
  await page.locator('button:has-text("Add to Cart")').first().click();
  
  // A brief pause to ensure the UI updates before navigating.
  await page.waitForTimeout(1000);

  // Step 5: Navigate to the shopping cart.
  await page.click('a[href="/cart"]');
  await page.waitForURL('**/cart');

  // Step 6: Verify that the shopping cart page has loaded.
  await expect(page.locator('h1:has-text("Shopping Cart")')).toBeVisible({ timeout: 10000 });

  // Step 7: Confirm that at least one product is in the cart.
  // A product card is identified as a `div` containing both an `img` and an `h3`.
  const productInCart = page.locator('div:has(img):has(h3)').first();
  await expect(productInCart).toBeVisible({ timeout: 10000 });

  // Step 8: Verify the quantity of the product is at least 1.
  // The quantity is located within a `span` with a specific, unique class.
  const quantityLocator = productInCart.locator('span.w-12.text-center.font-medium').first();

  await expect(quantityLocator).toBeVisible();
  const quantityText = await quantityLocator.textContent();
  expect(Number(quantityText)).toBeGreaterThanOrEqual(1);
});