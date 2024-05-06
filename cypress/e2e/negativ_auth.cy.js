describe('Auth Test',() => {
    it ('Authorization test',() => {
        cy.fixture('test_Authorization').then(data => {
            cy.log('Переxод на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод неверного логина')
            cy.get('.form-error > span').type(data.wrong_login)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field__error"]')
            .should('exist')

            cy.log('Ввод неверного пароля')
            cy.get('.form-error > span').type(data.wrong_password)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field__error"]')
            .should('exist')

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()
        });
    });
});