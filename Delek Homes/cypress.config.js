const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs : true,
    baseUrl: 'https://dev.delekhomes.com'
  },
});
