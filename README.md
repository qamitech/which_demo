# About Framework

This is a BDD automation framework implemented to test which.co.uk website as part of a technical task

- NodeJS framework
- Based on [WebDriverIO](https://webdriver.io/) and [CucumberJS](https://cucumber.io/docs/installation/javascript/)

# Directory Structure

```
.
├── README.md
├── config
│   ├── wdio.local.conf.js
├── features
│   ├── television-reviews.feature
│   └── pageobjects
│   │    ├── base.page.js
│   │    ├── television-reviews.page.js
    ├── step-definitions
│       ├── television-reviews-steps.js
├── package-lock.json # snapshot of the dependencies
├── package.json
```

# Configuration Files

`wdio.local.conf.js` : Local config runs on chrome browser with GUI

# Task Details

- Build a small testing framework using Webdriver.IO or any other JS automation
  framework you are familiar with
- Your test framework should drive a local chrome browser
- List up to 3 functional tests that you think are necessary for testing the TV landing
  page and implement only 1 scenario with working steps and assertions
- Share your solution on Github with us
- Read.me file should provide instructions for setup and execution
- Upload screen videos of your automation code running and screenshots of results
  after they have finished executing.

# Test cases

All the tests (manual and automated) are added in the file - `features/television-reviews.feature`

# Run Tests

## Prerequisites

1.  NodeJS should be installed
2.  To run locally, Chrome browser should be installed

## Steps to run tests

1. Clone git repo
   `git clone git@bitbucket.org:bbcworldwide/topgear.com.git`

2. Change to the test directory
   `cd which_task/e2e_tests`

3. Install dependencies
   `npm install`

4. Run all tests

   `npm test`

   Run specific feature

   `npx wdio config/wdio.local.conf.js --spec features/television-reviews.feature`