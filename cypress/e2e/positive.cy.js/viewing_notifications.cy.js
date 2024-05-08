describe('Viewing test', () => {
    it("Positive viewing notifications test", () => {
        cy.fixture('test_Viewing').then(data => {
            cy.log('Переход на страницу')
            cy.visit(data.url)

            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()
            cy.wait(1500)

            cy.log('Клик по кнопке "Уведомления"')
            cy.get('.header__nav > [href="/notification"]').click()
            cy.wait(1500)

            cy.log('Клик по кнопке "Просмотреть"')
            cy.get(':nth-child(1) > .notification-list-item > .button').click()

            cy.log('Проверка, что пользователь смог перейти на страничку вакансии')
            cy.url().should('equal', 'https://dev.profteam.su/vacancy/103')
        });
    });
});