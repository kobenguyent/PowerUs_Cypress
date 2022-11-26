/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import {User} from "./Models/User";

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
        typeAndWait(locator:string, text:string, waitInSec?:number),
    }
}
