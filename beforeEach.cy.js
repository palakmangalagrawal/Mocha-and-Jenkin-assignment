describe('Login page tests', () => {
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/login")

    })
    afterEach(() => {
        cy.clearCookies();
    });

    it('Login button should be visible', () => {
       cy.get('[type="submit"]').should('be.visible')
    });

    it('Page contains a field with the placeholder text', () => {
        cy.get('[name="username"]').should('exist')
    });
});