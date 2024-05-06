describe('Register Test',() => {
    it ('None-existent login test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод неверного логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.wrong_login_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field__error"]')
            .should('exist')
        });
    });
    it ('None-existent email test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод неверного email')
            cy.get('.form-input--email').type(data.wrong_email_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field__error"]')
            .should('exist')
        });
    });
    it ('None-existent email test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод неверного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.wrong_password_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field__error"]')
            .should('exist')
        });
    });
    it ('None-existent email test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод неверного повторного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.wrong_password_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field__error"]')
            .should('exist')
        });
    });
    it ('None-existent email test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод неверной фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.wrong_surname_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field__error"]')
            .should('exist')
        });
    });
    it ('None-existent email test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод неверного имени')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.wrong_name_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field__error"]')
            .should('exist')
        });
    });
    it ('None-existent email test',() => {
        cy.fixture('test_Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод неверного отчества')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.wrong_middle_name)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field__error"]')
            .should('exist')
        });
    });
});

//https://dev.profteam.su/login
        


