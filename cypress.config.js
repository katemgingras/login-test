const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://backpack-staging.fluencyinc.co/login/',
  },
});
