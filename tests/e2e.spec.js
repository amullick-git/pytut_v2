const { test, expect } = require('@playwright/test');

test.describe('Python Adventure E2E', () => {
  test('page loads, pyodide initializes, and code runs', async ({ page }) => {
    // open site (webServer in config serves project root at http://localhost:3000)
    await page.goto('/');

    // basic page title check
    await expect(page.locator('h1.h2')).toHaveText('Python Adventure: Learn to Code');

    // wait for pyodide init message (may take a while)
    await expect(page.locator('#output')).toHaveText(/Python environment ready!/, { timeout: 120_000 });

    // open chapter1 and ensure tutorial content visible
    await page.click('#ch-btn-chapter1');
    await expect(page.locator('#tutorial')).toContainText('Python', { timeout: 10_000 });

    // start exercises if "Start Exercises" button exists
    const startBtn = page.locator('.exercises-list button:has-text("Start Exercises")');
    if (await startBtn.count() > 0) {
      await startBtn.click();
      // click first exercise button
      const firstExerciseBtn = page.locator('.exercises-list button').first();
      await firstExerciseBtn.click();
      await expect(page.locator('#current-exercise-content')).toBeVisible();
    }

    // run a simple snippet and verify output appears
    await page.fill('#editor', "print('e2e-test-output')");
    await page.click('button:has-text("Run Code")');
    await expect(page.locator('#output')).toContainText('e2e-test-output', { timeout: 120_000 });
  });
});
