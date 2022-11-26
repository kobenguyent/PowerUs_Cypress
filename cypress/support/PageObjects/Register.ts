import { User } from "../Models/User"

export class Register {
    inputLocator = (param: string) => `input[autocomplete="${param}"]`;

    openAccount(data = new User()) {
        const user = data;
        cy.typeAndWait(this.inputLocator('given-name'), user.fname);
        cy.typeAndWait(this.inputLocator('family-name'), user.lname);
        cy.typeAndWait(this.inputLocator('email'), user.email);
        cy.typeAndWait(this.inputLocator('undefined'), user.password);
        cy.get('span').contains('Weiter').click();

        cy.typeAndWait(this.inputLocator('tel'), user.phoneNo);
        cy.get('span').contains('Kostenlos registrieren').click();
    }
}
