const report = require("multiple-cucumber-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json", 
    reportPath: "./reports/cucumber-report.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "92",
        },
        device: "Local test machine",
        platform: {
        name: "windows",
        version: "11",
        },
    },
});