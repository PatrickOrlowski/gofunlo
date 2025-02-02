describe('Home Page', () => {
	it('should load the home page', () => {
		cy.visit('/');
		cy.url().should("include", "/account/reservation/my-reservations");
		cy.get('h1').contains('Moje konto');
	});
});