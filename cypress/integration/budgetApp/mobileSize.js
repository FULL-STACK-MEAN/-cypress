describe('Check mobile', () => {
    beforeEach(() => {

    })
    const delay = 1000;
    it('login', () => {
        cy.visit('http://localhost:4200/');
        cy.wait(delay);
        cy.get(':nth-child(2) > .col-100 > .ng-untouched').type('p@p.com');
        cy.wait(delay);
        cy.get(':nth-child(3) > .col-100 > .ng-untouched').type('Pp1');
        cy.wait(delay);
        cy.get('.outline').click();
    })
    it('avatar oculto en móviles', () => {
        cy.viewport(520, 760);
        cy.get('.avatar').should('not.be.visible');
        cy.wait(delay);
        cy.viewport(760, 520);
        cy.get('.avatar').should('be.visible');
    })

})