describe('Auth Test',() => {
    it ('Authorization test',() => {
        cy.fixture('test_Authorization').then(data => {
            cy.log('Переxод на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод неверного логина')
            cy.get('.form-input--text').type(data.wrong_login)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span')
            .should('exist')

            cy.log('Ввод неверного пароля')
            cy.get('.form-input--password').type(data.wrong_password)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span')
            .should('exist')

            cy.log('Клик по кнопке "Войти"')
            cy.get('.form__buttons > :nth-child(3)').click()
        });
    });
});