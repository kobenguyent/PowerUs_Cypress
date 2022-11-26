import 'cypress-if'

export class Popup {
    acceptCookies() {
        return cy.get('#onetrust-accept-btn-handler').if('visible').click();
    }
}
