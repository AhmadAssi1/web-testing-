# Playwright E-Commerce Test

This project contains an automated test for an e-commerce website, built using Playwright. The test script verifies the "Add to Cart" functionality, from logging in to confirming that an item has been successfully added to the shopping cart.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-directory>
    ```

2.  **Install project dependencies:**
    This command will install Playwright and any other required packages listed in `package.json`.
    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    This command downloads the browser binaries (Chromium, Firefox, WebKit) that Playwright uses for testing.
    ```bash
    npx playwright install
    ```

## Running the Test

You can run the test in either headless or headed mode.

### Headless Mode (Recommended for CI/CD)

This runs the test in the background without opening a browser window.
```bash
npx playwright test
```

### Headed Mode (Useful for debugging)

This runs the test in a visible browser window so you can observe the automation.
```bash
npx playwright test --headed
```

## Viewing Test Results

After a test run, you can view a detailed HTML report of the results.

```bash
npx playwright show-report
```
This command will open a web server and display the report in your default browser. 