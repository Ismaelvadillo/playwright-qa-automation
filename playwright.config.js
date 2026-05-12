const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 30000,

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },

  projects: [

    {
      name: 'smoke',
      testDir: './tests/smoke',
    },

    {
      name: 'e2e',
      testDir: './tests/e2e',
    },

  ],

});