const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Configurar URL base o global
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
