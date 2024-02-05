const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
  },
  defaultCommandTimeout: 2000,
  fixturesFolder: 'cypress/fixtures',
  integrationFolder: "cypress/integration",
  pluginsFile: "cypress/plugins/index.js",
  supportFile: "cypress/support/index.js"
})
