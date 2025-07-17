const { test, expect } = require('@playwright/test');

test('Column hiding: hide Address column', async ({ page }) => {
  await page.goto('https://www.mantine-react-table.dev/?path=/story/features-column-hiding-examples--column-hiding-enabled-default');

  //Access the iframe
  const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]');

  //Click the 3-dot "Column Actions" button for "First Name"
  await frame
  .getByRole('cell', { name: 'First Name Sort by First Name' })
  .getByLabel('Column Actions')
  .click();
  
  //Click "Hide First Name column"
  const hideOption = frame.getByRole('menuitem', { name: 'Hide First Name column' });
  await hideOption.click();
  
  //Verify its no longer available
  await expect(hideOption).toHaveCount(0);

  //Take screenshot
  await page.screenshot({ path: 'screenshots/after-hiding-column.png', fullPage: true });


});
 