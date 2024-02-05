const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 2000,
  fixturesFolder: 'cypress/fixtures',
})
