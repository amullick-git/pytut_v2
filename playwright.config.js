const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'npx http-server -c-1 -p 3000 .',
    port: 3000,
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
});
