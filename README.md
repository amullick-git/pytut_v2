# Python Adventure — E2E test runners (no local npm)

Options when you cannot run npm locally:

1) GitHub Actions (CI)
- Push your branch or open a PR. The workflow `.github/workflows/e2e.yml` will:
  - install dependencies
  - install Playwright browsers
  - run the tests
- No local work needed beyond committing and pushing.

2) Docker (recommended if you have Docker)
- Build the test image (uses Playwright base with browsers):
  - docker build -t pytut-e2e .
- Run the tests:
  - docker run --rm pytut-e2e
- Or use docker-compose:
  - docker compose up --build --abort-on-container-exit

3) Run on a remote CI/machine
- If you have access to a build agent that can run npm, `npm ci` + `npx playwright install --with-deps` + `npm run test:e2e` will work.

Notes
- The Docker image includes Playwright and its browsers; it avoids needing npm on your host.
- If Pyodide takes longer to initialize in CI, increase the test timeouts in `playwright.config.js`.
- If you want, run a single test file inside the container by changing the container command to `npx playwright test tests/e2e.spec.js`.
