describe('Authorization Test',() => {
    it ('Positive authorization test',() => {
        cy.fixture('test_Authorization').then(data => {
            cy.log('Переxод на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()

            cy.log('Проверка, что пользователь смог авторизоваться')
            cy.url().should('equal', 'https://dev.profteam.su/account/main')
        });
    });
});

