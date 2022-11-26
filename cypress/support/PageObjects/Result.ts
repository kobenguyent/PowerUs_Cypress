export class Result {
    p = {
        differences: {
            salaryDiff: 'div[class="differences"] app-salary-difference-box p'
        }
    }

    seeTheAvgSalary(amount:string) {
        cy.get('p[class="avg-salary"]').should('be.visible');
        cy.contains(amount);
    }

    seeTheSalaryDifferences() {
        cy.get('app-salary-differences').should('be.visible');
    }

    seePositiveDifferenceOfState() {
        cy.get(this.p.differences.salaryDiff).eq(1).invoke('attr', 'class').should('eq', 'difference positive');
    }

    seePositiveDifferenceOfExperience() {
        cy.get(this.p.differences.salaryDiff).eq(3).invoke('attr', 'class').should('eq', 'difference positive');
    }

    seePositiveDifferenceOfWillingnessToTravel() {
        cy.get(this.p.differences.salaryDiff).eq(3).invoke('attr', 'class').should('eq', 'difference positive');
    }

    seeNegativeDifferenceOfState() {
        cy.get(this.p.differences.salaryDiff).eq(1).invoke('attr', 'class').should('eq', 'difference negative');
    }

    seeNegativeDifferenceOfExperience() {
        cy.get(this.p.differences.salaryDiff).eq(3).invoke('attr', 'class').should('eq', 'difference negative');
    }

    seeNegativeDifferenceOfWillingnessToTravel() {
        cy.get(this.p.differences.salaryDiff).eq(3).invoke('attr', 'class').should('eq', 'difference negative');
    }
}