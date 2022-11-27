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
    cy.contains(data.error.generalMessage);
  });

  it('should see the error when using taken phone number', () => {
    cy.salaryCheck({ state: 'Berlin'});
    const userOne = new User();
    cy.openAccount(userOne);

    cy.visit(url.homepage);
    cy.acceptCookies();
    cy.logout();

    cy.openBlog(data.blogTitle.electricianSalaryOverview)
    cy.salaryCheck({ state: 'Berlin'});
    const userTwo = new User();
    userTwo.phoneNo = userOne.phoneNo;
    cy.openAccount(userTwo);
    cy.contains(data.error.generalMessage);
  });

  for (const [key, value] of Object.entries(data.email.invalid)) {
    it(`should see the error when inputting the invalid email ${value}`, () => {

      cy.salaryCheck({ state: 'Bayern'});
      const user = new User();
      user.email = value;
      cy.openAccount(user);
      cy.contains(data.error.invalidEmail);
    });
  }

  it('should see the error when all required fields are empty', () => {
    cy.salaryCheck({ state: 'Bayern'});
    const user = new User(true);
    cy.openAccount(user);
    cy.contains(data.error.fieldIsRequired);
  });

  it('should see the error when inputting the invalid phone number', () => {
    cy.salaryCheck({ state: 'Bayern'});
    const user = new User();
    user.phoneNo = '12345'
    cy.openAccount(user);
    cy.contains(data.error.invalidPhoneNo);
  });

  it('should see the error when inputting the invalid phone number - non numeric', () => {
    cy.salaryCheck({ state: 'Bayern'});
    const user = new User();
    user.phoneNo = 'hfjkdhkj'
    cy.openAccount(user);
    cy.contains(data.error.invalidPhoneNo);
  });

  it('should see the error when inputting the invalid phone number - spaces', () => {
    cy.salaryCheck({ state: 'Bayern'});
    const user = new User();
    user.phoneNo = '     '
    cy.openAccount(user);
    cy.contains(data.error.invalidPhoneNo);
  });

  it('should see the error when inputting the invalid phone number - html code', () => {
    cy.salaryCheck({ state: 'Bayern'});
    const user = new User();
    user.phoneNo = '</body>'
    cy.openAccount(user);
    cy.contains(data.error.invalidPhoneNo);
  });

  it('should see the error when inputting the invalid phone number - special characters', () => {
    cy.salaryCheck({ state: 'Bayern'});
    const user = new User();
    user.phoneNo = 'hfjkdhkj'
    cy.openAccount(user);
    cy.contains(data.error.invalidPhoneNo);
  });

  for (const [key, value] of Object.entries(data.statusCode.startsWithFour)) {
    it(`should see the error when BE is returned ${value}`, () => {
      cy.interceptRequest(url.api.register, 'POST', value);

      cy.salaryCheck({ state: 'Bayern'});
      const user = new User();
      cy.openAccount(user);
      cy.contains(data.error.generalMessage);
    });
  }

  for (const [key, value] of Object.entries(data.statusCode.startsWithFive)) {
    it(`should see the error when BE is returned ${value}`, () => {
      cy.interceptRequest(url.api.register, 'POST', value);

      cy.salaryCheck({ state: 'Bayern'});
      const user = new User();
      cy.openAccount(user);
      cy.contains(data.error.generalMessage);
    });
  }

})
