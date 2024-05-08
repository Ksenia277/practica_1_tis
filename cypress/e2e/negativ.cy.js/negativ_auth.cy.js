describe('Auth Test',() => {
    it ('Incorrectly entered login test',() => {
        cy.fixture('test_Authorization').then(data => {
            cy.log('Переxод на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод неверного логина')
            cy.get('.form-input--text').type(data.wrong_login)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span')
            .should('exist')
        });
    });
    it ('Incorrectly entered password test',() => {
        cy.fixture('test_Authorization').then(data => {
            cy.log('Переxод на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод неверного пароля')
            cy.get('.form-input--password').type(data.wrong_password)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span')
            .should('exist')

            cy.log('Клик по кнопке "Войти"')
            cy.get('.form__buttons > :nth-child(3)').click()
        });
    }); 
    it ('None-existent login test and password',() => {
        cy.fixture('test_Authorization').then(data => {
            cy.log('Переxод на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод логина который не существует')
            cy.get('.form-input--text').type(data.does_not_login)

            cy.log('Ввод пароля который не существует')
            cy.get('.form-input--password').type(data.does_not_password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('.form__buttons > :nth-child(3)').click()

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span')
            .should('exist')
        });
    });   
});