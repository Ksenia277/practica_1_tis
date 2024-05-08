describe('Employer Test', () => {
    it("Incorrect organization value test", () => {
        cy.fixture('test_Employer').then(data => {
            cy.log('Переход на страницу')
            cy.visit(data.url)
  
            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)
  
            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)
  
            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()
  
            cy.log('Клик по кнопке "Выбрать роль"')
            cy.get('.page-nav__role-block > .button').click()
  
            cy.log('Клик по кнопке "Коммерческая организация"')
            cy.get('.select-role-form > :nth-child(1)').click()
  
            cy.log('Клик по кнопке "Создание кабинета"')
            cy.get('.variants-company > :nth-child(2)').click()
  
            cy.log('Ввод некорректной организации')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.company)
  
            cy.log('Удаление текста из поля "организация"')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').clear()
  
            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > :nth-child(1) > .form-error > span')
            .should('exist')
        })
    })
    it("Incorrect address value test", () => {
        cy.fixture('test_Employer').then(data => {
            cy.log('Переход на страницу')
            cy.visit(data.url)
  
            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)
  
            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)
  
            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()
  
            cy.log('Клик по кнопке "Выбрать роль"')
            cy.get('.page-nav__role-block > .button').click()
  
            cy.log('Клик по кнопке "Коммерческая организация"')
            cy.get('.select-role-form > :nth-child(1)').click()
  
            cy.log('Клик по кнопке "Создание кабинета"')
            cy.get('.variants-company > :nth-child(2)').click()
  
            cy.log('Ввод организации')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.company)
  
            cy.log('Ввод некорректного адреса')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.wrong_address)
  
            cy.log('Удаление текста из поля "адрес"')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').clear()
  
            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span')
            .should('exist')
        })
    })
    it("Incorrect description value test", () => {
        cy.fixture('test_Employer').then(data => {
            cy.log('Переход на страницу')
            cy.visit(data.url)
  
            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)
  
            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)
  
            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()
  
            cy.log('Клик по кнопке "Выбрать роль"')
            cy.get('.page-nav__role-block > .button').click()
  
            cy.log('Клик по кнопке "Коммерческая организация"')
            cy.get('.select-role-form > :nth-child(1)').click()
  
            cy.log('Клик по кнопке "Создание кабинета"')
            cy.get('.variants-company > :nth-child(2)').click()
  
            cy.log('Ввод организации')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.company)
  
            cy.log('Ввод адреса')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.wrong_address)
  
            cy.log('Ввод некорректного краткого описания')
            cy.get('.form-area').type(data.wrong_description)
  
            cy.log('Удаление текста из поля "краткое описание"')
            cy.get('.form-area').clear()
    
            cy.log('Проверка, что появилась ошибка краткого описания')
            cy.get(':nth-child(2) > :nth-child(1) > .form-error > span')
            .should('exist')
        })
    })
    it("An existing application for a role test", () => {
        cy.fixture('test_Employer').then(data => {
            cy.log('Переход на страницу')
            cy.visit(data.url)
  
            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)
  
            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)
  
            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()
  
            cy.log('Клик по кнопке "Выбрать роль"')
            cy.get('.page-nav__role-block > .button').click()
  
            cy.log('Клик по кнопке "Коммерческая организация"')
            cy.get('.select-role-form > :nth-child(1)').click()
  
            cy.log('Клик по кнопке "Создание кабинета"')
            cy.get('.variants-company > :nth-child(2)').click()
  
            cy.log('Ввод организации')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.company)
  
            cy.log('Ввод адреса')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address)
  
            cy.log('Ввод краткого описания')
            cy.get('.form-area').type(data.description)
  
            cy.log('Клик по кнопке "Добавить"')
            cy.get('.create-company-form__description-block > .button').click()
  
            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span')
            .should('exist')
        });
    });
});