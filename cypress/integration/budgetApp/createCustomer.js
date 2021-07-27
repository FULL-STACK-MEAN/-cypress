describe('Crear cliente', () => {
    beforeEach(() => {

    })
    const delay = 10;
    it('login', () => {
        cy.visit('http://localhost:4200/');
        cy.wait(delay);
        cy.get(':nth-child(2) > .col-100 > .ng-untouched').type('p@p.com');
        cy.wait(delay);
        cy.get(':nth-child(3) > .col-100 > .ng-untouched').type('Pp1');
        cy.wait(delay);
        cy.get('.outline').click();
    })
    it('navegación al componente', () => {
        cy.get(':nth-child(1) > :nth-child(2) > button').click();
        cy.wait(delay);
        cy.get('.outline').click();
    })
    it('validación campo nombre', () => {
        cy.get('#name').focus().blur();
        cy.get('.flex > :nth-child(2)').click();
        cy.get('[for="name"] .alert').contains('Nombre de cliente obligatorio');
        cy.get('#name').type('ACME');
        cy.wait(delay);
        cy.get('[for="name"] .alert').should('not.exist');
    })
    it('validación campo cif', () => {
        cy.get('#cif').focus().blur();
        cy.get('.flex > :nth-child(2)').click();
        cy.get('[for="cif"] .alert').contains('El CIF debe comenzar por A, B, C ó D');
        cy.get('#cif').type('Y');
        cy.wait(delay);
        cy.get('[for="cif"] .alert').contains('El CIF debe comenzar por A, B, C ó D');
        cy.get('#cif').clear();
        cy.get('#cif').type('A');
        cy.wait(delay);
        cy.get('[for="cif"] .alert').contains('El CIF debe tener 9 caracteres');
        cy.get('#cif').type(Math.random() * Math.pow(10, 8));
        cy.wait(delay);
        cy.get('[for="cif"] .alert').should('not.exist');
    })
})