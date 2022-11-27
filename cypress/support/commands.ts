import {Popup} from "./PageObjects/Popup";
import {TopNav} from "./PageObjects/TopNav";
import {Blog} from "./PageObjects/Blog";
import {Register} from "./PageObjects/Register";
import {Result} from "./PageObjects/Result";
import {BottomNav} from "./PageObjects/BottomNav";

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
    cy.get(locator).clear().wait(waitInSec * 1000);

    if (text !== '') {
        cy.get(locator).type(text).wait(waitInSec * 1000);
    }
})

Cypress.Commands.add('logout', () => {
    bottomNav.logout();
})

Cypress.Commands.add('interceptRequest', (url, method, statusCode) => {
    cy.intercept({
        method,
        url
    }, {
        body: 'test does not allow it',
        statusCode,
        delayMs: 2000
    });
})
