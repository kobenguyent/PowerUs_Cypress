# Introduction

This project brings you some fun with E2E tests using Cypress.
- TS supported
- Data driven tests
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
tth~$npx cypress run
Missing baseUrl in compilerOptions. tsconfig-paths will be skipped

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        11.2.0                                                                         │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v14.18.2 (/Users/trung-thanh/.nvm/versions/node/v14.18.2/bin/node)             │
  │ Specs:          1 found (salaryChecker.cy.js)                                                  │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  salaryChecker.cy.js                                                             (1 of 1)


  Salary Checker
    ✓ should see the salary differences - Bayern (23532ms)
    ✓ should see the salary differences - Berlin (21855ms)
    ✓ should see the error when using taken email (51678ms)
    ✓ should see the error when using taken phone number (52067ms)
    ✓ should see the error when inputting the invalid email hello@ (21941ms)
    ✓ should see the error when inputting the invalid email hello.com (22106ms)
    ✓ should see the error when inputting the invalid email hello@@..com (22347ms)
    ✓ should see the error when inputting the invalid email ncm kmkjc (22398ms)
    ✓ should see the error when all required fields are empty (16152ms)
    ✓ should see the error when inputting the invalid phone number (21259ms)
    ✓ should see the error when inputting the invalid phone number - non numeric (22285ms)
    ✓ should see the error when inputting the invalid phone number - spaces (21758ms)
    ✓ should see the error when inputting the invalid phone number - html code (22564ms)
    ✓ should see the error when inputting the invalid phone number - special characters (22995ms)
    ✓ should see the error when BE is returned 400 (24308ms)
    ✓ should see the error when BE is returned 401 (23982ms)
    ✓ should see the error when BE is returned 403 (23836ms)
    ✓ should see the error when BE is returned 404 (23937ms)
    ✓ should see the error when BE is returned 409 (23991ms)
    ✓ should see the error when BE is returned 500 (25115ms)
    ✓ should see the error when BE is returned 502 (24562ms)
    ✓ should see the error when BE is returned 503 (23875ms)


  22 passing (9m)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        22                                                                               │
  │ Passing:      22                                                                               │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     9 minutes, 24 seconds                                                            │
  │ Spec Ran:     salaryChecker.cy.js                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  salaryChecker.cy.js                      09:24       22       22        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        09:24       22       22        -        -        -
```
