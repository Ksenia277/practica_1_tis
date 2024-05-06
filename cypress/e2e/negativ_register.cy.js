describe('Register Test',() => {
    it ('None-existent login test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)

            cy.log('Ввод неверного логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.wrong_login_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > :nth-child(1) > .form-error')
            .should('exist')
        });
    });
    it ('Exists-existent login test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)

            cy.log('Ввод существующего логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.exists_login_register)

            cy.log('Ввод верной email')
            cy.get('.form-input--email').type(data.email_register)

            cy.log('Ввод верного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_register)

            cy.log('Ввод повторного пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password_register)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > :nth-child(1) > .form-error')
            .should('exist')
        });
    });
    it ('None-existent email test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login_register)

            cy.log('Ввод неверного email')
            cy.get('.form-input--email').type(data.wrong_email_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > :nth-child(2) > .form-error')
            .should('exist')
        });
    });
    it ('Exists-existent email test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)

            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login_register)

            cy.log('Ввод существующего email')
            cy.get('.form-input--email').type(data.exists_email_register)

            cy.log('Ввод верного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_register)

            cy.log('Ввод повторного пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password_register)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > :nth-child(2) > .form-error')
            .should('exist')
        });
    });
    it ('None-existent password test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login_register)

            cy.log('Ввод верной email')
            cy.get('.form-input--email').type(data.email_register)

            cy.log('Ввод неверного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.wrong_password_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(3) > .form-error')
            .should('exist')
        });
    });
    it ('None-existent password test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login_register)

            cy.log('Ввод верной email')
            cy.get('.form-input--email').type(data.email_register)

            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_register)

            cy.log('Ввод неверного повторного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.wrong_password_repeat_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(4) > .form-error')
            .should('exist')
        });
    });
    it ('None-existent surname test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login_register)

            cy.log('Ввод верной email')
            cy.get('.form-input--email').type(data.email_register)

            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_register)

            cy.log('Ввод повторного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_repeat_register)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Ввод неверной фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.wrong_surname_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > .form-error')
            .should('exist')
        });
    });
    it ('None-existent name test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login_register)

            cy.log('Ввод верной email')
            cy.get('.form-input--email').type(data.email_register)

            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_register)

            cy.log('Ввод повторного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_repeat_register)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Ввод фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname_register)

            cy.log('Ввод неверного имени')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.wrong_name_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(2) > .form-error')
            .should('exist')
        });
    });
    it ('None-existent middle name test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login_register)

            cy.log('Ввод верной email')
            cy.get('.form-input--email').type(data.email_register)

            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_register)

            cy.log('Ввод повторного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_repeat_register)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Ввод фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname_register)

            cy.log('Ввод имени')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.name_register)

            cy.log('Ввод неверного отчества')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.wrong_middle_name)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(3) > .form-error')
            .should('exist')
        });
    });
});


        


