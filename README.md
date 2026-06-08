# Playwright TypeScript Framework — SauceDemo

A production-style Playwright test automation framework built with TypeScript, following the Page Object Model (POM) design pattern. Tests cover UI, cart, and login functionality across Chromium, Firefox, and WebKit.

---

## Project Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

Run all tests across all browsers:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/cart.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

---

## Browser-Specific Execution

Run Chromium only:

```bash
npx playwright test --project=chromium
```

Run Firefox only:

```bash
npx playwright test --project=firefox
```

Run Safari/WebKit only:

```bash
npx playwright test --project=webkit
```

---

## Reporting

Open the Playwright HTML report:

```bash
npx playwright show-report
```

View trace files:

```bash
npx playwright show-trace trace.zip
```

---

## Code Generation

Generate Playwright code from browser interaction:

```bash
npx playwright codegen https://www.saucedemo.com
```

---

## Project Structure

```
project-root/
├── pages/
│   ├── LoginPage.ts         # Login page actions and locators
│   ├── InventoryPage.ts     # Inventory/product page actions
│   └── CartPage.ts          # Cart page actions and assertions
├── tests/
│   └── cart.spec.ts         # Cart and login test scenarios
├── testData/
│   └── users.ts             # Test user credentials
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── package.json
└── README.md
```

---

## Framework Design

### Page Object Model (POM)

Each page of the application has a dedicated TypeScript class containing:

- Locators defined in the constructor
- Methods for user interactions
- Assertions where appropriate

### Test Data

User credentials and test data are stored separately in `testData/users.ts` using TypeScript interfaces for type safety.

### Configuration

- **Base URL** set in `playwright.config.ts` — no hardcoded URLs in page objects
- **Trace** collected on first retry for debugging
- **Screenshots** captured on test failure
- **Video** recorded on first retry

---

## Tech Stack

- [Playwright](https://playwright.dev/) — Test framework
- [TypeScript](https://www.typescriptlang.org/) — Language
- [Node.js](https://nodejs.org/) — Runtime
