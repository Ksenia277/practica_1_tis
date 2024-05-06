describe('Auth Test',() => {
    it ('Authorization test',() => {
        cy.fixture('test_Authorization').then(data => {
            cy.log('Переxод на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()
        });
    });
});

