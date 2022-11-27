/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import {User} from "./cypress/support/Models/User";

type apiMethod = 'POST' | 'GET' | 'UPDATE' | 'DELETE';

declare namespace Cypress {
    interface Chainable<Subject = any> {
        acceptCookies(),
        openBlog(title:string),
        salaryCheck(data:any),
        openAccount(userInfo?:User),
        seeTheAvgSalary(amount:string),
        seeTheSalaryDifferences(),
        seePositiveDifferenceOfState(),
        seePositiveDifferenceOfExperience(),
        seePositiveDifferenceOfWillingnessToTravel(),
        seeNegativeDifferenceOfState(),
        seeNegativeDifferenceOfExperience(),
        seeNegativeDifferenceOfWillingnessToTravel(),
        logout(),
        interceptRequest(url:string, method:apiMethod, statusCode:number),
        typeAndWait(locator:string, text:string, waitInSec?:number),
    }
}
