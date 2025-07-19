# mantine-table-playwright-tests

This project is an automated UI testing suite built with **Playwright** to verify functionality in the [Mantine React Table Storybook](https://www.mantine-react-table.dev/?path=/story/prop-playground--default).  
The test cases cover essential table operations such as:

- Column hiding
- Row selection
- Filtering

Each test interacts with the UI and captures screenshots of the result for visual confirmation.


## 📦 What This Project Does

This automation framework:
- Launches the Storybook UI in Chromium.
- Performs UI actions like hiding a column, filtering data, and selecting rows.
- Takes full-page screenshots as proof of test execution.


## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aankita14/mantine-table-playwright-tests
   cd mantine-table-playwright-tests
   ```

## Install all dependencies
npm install

## Install Playwright browsers
npx playwright install

## Run all tests in headed Chromium
npx playwright test --project=chromium --headed

## Run specific test files:
1. npx playwright test tests/column-hiding.spec.js --project=chromium --headed

After running the above script it should interact with the browser as shown in the [Column Hiding document](docs/Column%20hiding.pdf)

2. npx playwright test tests/filtering.spec.js --project=chromium --headed

After running the above script it should interact with the browser as shown in the [Filtering document](docs/Filtering.pdf)

3. npx playwright test tests/row-selection.spec.js --project=chromium --headed

After running the above script it should interact with the browser as shown in the [Row Selection document](docs/Row-Selection.pdf)
