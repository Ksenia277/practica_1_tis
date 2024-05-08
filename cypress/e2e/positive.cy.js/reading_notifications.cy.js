describe('Reading Test',() => {
    it ('Positive reading notifications test',() => {
        cy.fixture('test_Reading').then(data => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(data.url)
        cy.log('Ввод логина')
        cy.get('input[class="form-input--text form-input"]').type(data.login)

        cy.log('Ввод пароля')
        cy.get('input[class="form-input--password form-input"]').type(data.password)

        cy.log('Клик по кнопке Войти')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()
        cy.wait(1500)

        cy.log('Переxод на уведомления')
        cy.get('.header__nav > [href="/notification"]').click()
        cy.wait(1500)
        
        cy.log('Клик по ссылке "Прочитать все"')
        cy.get('.notification-title > .link').click()

        cy.log('Проверка, что уведомления прочтены')
        cy.get('.notification-title > .notification-count').should('have.text', '0')
        });
    });
});