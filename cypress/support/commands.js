import {Popup} from "../support/PageObjects/Popup";
import {TopNav} from "../support/PageObjects/TopNav";
import {Blog} from "../support/PageObjects/Blog";
import {Register} from "../support/PageObjects/Register";
import {Result} from "../support/PageObjects/Result";
import {BottomNav} from "../support/PageObjects/BottomNav";

const popup = new Popup();
const topNav = new TopNav();
const blog = new Blog();
const result = new Result();
const register = new Register();
const bottomNav = new BottomNav();

Cypress.Commands.add('acceptCookies', () => {
    popup.acceptCookies();
});

Cypress.Commands.add('openBlog', (title) => {
    topNav.openBlog(title);
});

Cypress.Commands.add('salaryCheck', (data) => {
    blog.salaryCheck(data);
});

Cypress.Commands.add('seeTheAvgSalary', (amount) => {
    result.seeTheAvgSalary(amount);
});

Cypress.Commands.add('openAccount', (userInfo) => {
    register.openAccount(userInfo);
});

Cypress.Commands.add('seeTheSalaryDifferences', () => {
    result.seeTheSalaryDifferences();
})

Cypress.Commands.add('seePositiveDifferenceOfState', () => {
    result.seePositiveDifferenceOfState();
})

Cypress.Commands.add('seePositiveDifferenceOfExperience', () => {
    result.seePositiveDifferenceOfExperience();
})

Cypress.Commands.add('seePositiveDifferenceOfWillingnessToTravel', () => {
    result.seePositiveDifferenceOfWillingnessToTravel();
})

Cypress.Commands.add('seeNegativeDifferenceOfState', () => {
    result.seeNegativeDifferenceOfState();
})

Cypress.Commands.add('seeNegativeDifferenceOfExperience', () => {
    result.seeNegativeDifferenceOfExperience();
})

Cypress.Commands.add('seeNegativeDifferenceOfWillingnessToTravel', () => {
    result.seeNegativeDifferenceOfWillingnessToTravel();
})

Cypress.Commands.add('typeAndWait', (locator, text, waitInSec = 1) => {
    cy.get(locator).clear().type(text).wait(waitInSec * 1000);
})

Cypress.Commands.add('logout', () => {
    bottomNav.logout();
})
