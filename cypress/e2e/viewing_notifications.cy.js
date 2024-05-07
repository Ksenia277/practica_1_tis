describe('Viewing test', () => {
    it("Viewing notifications test", () => {
        cy.fixture('test_Viewing').then(data => {
            cy.log('Переход на страницу')
            cy.visit(data.url)

            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()
            cy.wait(2000)

            cy.log('Клик по кнопке "Уведомления"')
            cy.get('.header__nav > [href="/notification"]').click()
            cy.wait(2000)

            cy.log('Клик по радиокнопке "Просмотреть"')
            cy.get(':nth-child(1) > .notification-list-item > .button').click()
            cy.wait(2000)
        })

        it("Viewing notifications test", () => {
            cy.fixture('test_Viewing').then(data => {
                cy.log('Переход на страницу')
                cy.visit(data.url)

                cy.log('Ввод логина')
                cy.get('.form-input--text').type(data.login)

                cy.log('Ввод пароля')
                cy.get('.form-input--password').type(data.password)

                cy.log('Клик по кнопке "Войти"')
                cy.get(':nth-child(3) > .button').click()
                cy.wait(2000)

                cy.log('Клик по кнопке "Уведомления"')
                cy.get('.header__nav > [href="/notification"]').click()
                cy.wait(2000)
            })
        });
    });
});