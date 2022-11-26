import {User} from "../support/Models/User";

const {url} = require("../fixtures/url");
const {data} = require("../fixtures/data");

describe('Salary Checker', () => {
  beforeEach(() => {
      cy.viewport('iphone-6');
      cy.visit(url.homepage);
      cy.acceptCookies();

      cy.openBlog(data.blogTitle.electricianSalaryOverview)
  })

  it('should see the salary differences - Bayern', () => {
    cy.salaryCheck({ state: 'Bayern'});
    cy.openAccount();
    cy.seeTheAvgSalary(data.avgSalary.bayern);
    cy.seePositiveDifferenceOfState();
    cy.seeNegativeDifferenceOfExperience();
    cy.seeNegativeDifferenceOfWillingnessToTravel();
  });

  it('should see the salary differences - Berlin', () => {
    cy.salaryCheck({ state: 'Berlin'});
    cy.openAccount();
    cy.seeTheAvgSalary(data.avgSalary.berlin);
    cy.seeNegativeDifferenceOfState();
    cy.seeNegativeDifferenceOfExperience();
    cy.seeNegativeDifferenceOfWillingnessToTravel();
  });

  it('should see the error when using taken email', () => {
    cy.salaryCheck({ state: 'Berlin'});
    const userOne = new User();
    cy.openAccount(userOne);

    cy.visit(url.homepage);
    cy.acceptCookies();
    cy.logout();

    cy.openBlog(data.blogTitle.electricianSalaryOverview)
    cy.salaryCheck({ state: 'Berlin'});
    const userTwo = new User();
    userTwo.email = userOne.email;
    cy.openAccount(userTwo);
    cy.contains(data.error.takenEmail);
  });

  it('should see the error when inputting the invalid phone number', () => {
    cy.salaryCheck({ state: 'Bayern'});
    const user = new User();
    user.phoneNo = '12345'
    cy.openAccount(user);
    cy.contains(data.error.invalidPhoneNo);
  });
})
