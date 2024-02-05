const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://www.saucedemo.com",
  },
  defaultCommandTimeout: 2000,
  fixturesFolder: "cypress/fixtures",

  e2e: {
    specPattern: 'cypress/e2e/**/*.js'
  },
});
