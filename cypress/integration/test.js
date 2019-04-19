describe('The Home Page', function () {
	it('successfully can fill in form', function () {
		cy.visit('/')

		cy.get('a[href="#/form"]')
			.click();

		cy.get('input[name="name"]')
			.type('test');

		cy.get('input[name="email"]')
			.type('hello@test.com')

		cy.get('button')
			.click();
	})

	it('successfully displays errors', function () {
		cy.visit('/')

		cy.get('a[href="#/form"]')
			.click();

		cy.get('input[name="name"]')
			.type('test');

		cy.get('input[name="email"]')
			.type('fred')
			.blur()
			.should('have.class', 'is-invalid');

		cy.get('button')
			.should('have.attr', 'disabled');
	})
})