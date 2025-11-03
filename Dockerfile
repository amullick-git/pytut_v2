FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

# Copy package files first to leverage layer caching
COPY package.json package-lock.json* ./

# Install node dependencies
RUN npm install --silent

# Copy the rest of the repo
COPY . .

# Ensure Playwright browsers and deps are available
RUN npx playwright install --with-deps

# Default command: run the Playwright tests (change args if needed)
CMD ["npx", "playwright", "test", "--reporter=list"]
