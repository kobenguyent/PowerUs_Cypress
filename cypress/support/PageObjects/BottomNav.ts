export class BottomNav {
    logout() {
        cy.get('a[href="/profil"]').eq(2).click()
        cy.get('section button span').contains('Logout').click()
    }
}
