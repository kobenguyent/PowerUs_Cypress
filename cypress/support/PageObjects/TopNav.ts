export class TopNav {
    openMenu() {
        return cy.xpath('//mat-icon[text()="menu"]').click();
    }

    openBlog(text:string) {
        this.openMenu();
        cy.xpath('//span[contains(text(), "Blog")]').eq(1).click();
        cy.get(`span`).contains(text).click()
    }
}