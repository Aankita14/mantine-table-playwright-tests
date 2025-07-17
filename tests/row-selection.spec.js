const { test, expect } = require('@playwright/test');

test('Row selection', async ({ page }) => {

    // Opening the Storybook page that shows the row selection table.
    await page.goto('https://www.mantine-react-table.dev/?path=/story/features-selection-examples--selection-enabled');

    //Access the iframe
    const frame = page.frameLocator('iframe[title="storybook-preview-iframe"]');

    //Inside the iframe, checking the "Select All" checkbox.
    const selectAll = frame.getByRole('checkbox', { name: 'Toggle select all' });
    await selectAll.check();
    await expect(selectAll).toBeChecked();

    //Unchecking the "Select All" checkbox.
    await selectAll.uncheck();
    await expect(selectAll).not.toBeChecked();

    //click on the first row's checkbox
    const firstRowCheckbox = frame.locator('tbody input[type="checkbox"]').first();
    await firstRowCheckbox.check();
    await expect(firstRowCheckbox).toBeChecked();

    //screenshot of the table
    await page.screenshot({ path: 'screenshots/row-selected.png', fullPage: true });


});
