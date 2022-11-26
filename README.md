# Introduction

This project brings you some fun with E2E tests using Cypress.
- TS supported
- Page Object Models (POM) design structure is used
- Custom Cypress Commands to be reused everywhere to avoid the code repeats
- GithubAction is integrated
- ESLint integrated
- Clean code, easy to read
- Scalability
- Simplicity

### Tech

This test uses a number of open source projects to work properly:

* [https://nodejs.org/en/](https://nodejs.org/en/) - evented I/O for the backend
* [https://cypress.io/](https://cypress.io/) - Cypress
* [https://reqres.in/](https://reqres.in/) - Endpoints that are used in this project

### Installation

This requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies.

```sh
cd powerus-cypress
npm i
```

### How to trigger E2E tests

To run all tests just simply type

```sh
npm run e2e
```

Example output

```sh
trung-thanh:PowerUs_Cypress thanh$ npm run e2e
tth~$npx eslint .
tth~$npm run e2e

> powerus_cypress@1.0.0 e2e
> cypress run --spec cypress/e2e/**/

Missing baseUrl in compilerOptions. tsconfig-paths will be skipped

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        11.2.0                                                                         │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v14.18.2 (/Users/trung-thanh/.nvm/versions/node/v14.18.2/bin/node)             │
  │ Specs:          1 found (salaryChecker.cy.js)                                                  │
  │ Searched:       cypress/e2e/**                                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  salaryChecker.cy.js                                                             (1 of 1)


  Salary Checker
    ✓ should see the salary differences - Bayern (17805ms)
    ✓ should see the salary differences - Berlin (16659ms)
    ✓ should see the error when using taken email (38866ms)
    ✓ should see the error when inputting the invalid phone number (16068ms)


  4 passing (2m)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 minute, 34 seconds                                                             │
  │ Spec Ran:     salaryChecker.cy.js                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
    Compression progress:  48%
    Compression progress:  100%
  -  Finished processing: /Users/trung-thanh/Desktop/PowerUs_Cypress/cypress/videos/s   (24 seconds)
                          alaryChecker.cy.js.mp4                                                    


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  salaryChecker.cy.js                      01:34        4        4        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        01:34        4        4        -        -        -
```
