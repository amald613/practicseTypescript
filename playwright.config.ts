import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    headless: false, // Always show browser
    viewport: { width: 1200, height: 600 }, // Page content area
    launchOptions: {
      args: [
        '--window-size=1200,650', // Total browser window size
        '--window-position=50,0', // Open at top of screen
        '--start-maximized=false' // Prevent Windows from maximizing it
      ],
    },
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // Hook to resize after browser starts (extra safeguard)
  
});
