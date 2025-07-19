const { test, expect } = require('@playwright/test');

test('Filtering Example - should filter by New Jersey', async ({ page }) => {
  //Open url and navigate to the page
  await page.goto('https://www.mantine-react-table.dev/?path=/story/features-filtering-examples--custom-filter-function-per-column');

  //Access the iframe
  const iframe = page.frameLocator('iframe');

  //Wait a bit to iframe load
  await page.waitForTimeout(500);

  //Filter by state: "New Jersey"
  const stateFilterInput = iframe.getByPlaceholder('Filter by State');
  await expect(stateFilterInput).toBeVisible();
  await stateFilterInput.fill('New Jersey');

  //Wait for filter results to update
  await page.waitForTimeout(1000);

  //Get all visible rows
  const tableRows = iframe.locator('table tbody tr');
  const rowCount = await tableRows.count();
  console.log(`Total rows found: ${rowCount}`);

  //Optional wait
  await page.waitForTimeout(500);

  //Get column count from the first row
  const firstRow = tableRows.nth(0);
  const tableColumns = firstRow.locator('td');
  const columnCount = await tableColumns.count();
  console.log(`Total columns in first row: ${columnCount}`);

  //Final wait to observe output
  await page.waitForTimeout(500);

  //Take screenshot
  await page.screenshot({ path: 'screenshots/filtering.png' });
});



