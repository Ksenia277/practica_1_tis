describe('Register Test',() => {
    it ('Registration test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login_register)

            cy.log('Ввод email')
            cy.get('.form-input--email').type(data.email_register)

            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_register)

            cy.log('Ввод повторного пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password_repeat_register)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Ввод фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname_register)

            cy.log('Ввод имени')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.name_register)

            cy.log('Ввод отчества')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.middle_name)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()

            cy.log('Проверка, что пользователь смог зарегистрироваться')
            cy.url().should('equal', 'https://dev.profteam.su/account/main')
        });
    });
});








        


