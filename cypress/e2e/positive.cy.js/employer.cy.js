describe('Emp Test', () => {
    it("Employer test", () => {
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
  
            cy.log('Проверка, что пользователь смог подать заявку на роль Работодателя')
            cy.url().should('equal', 'https://dev.profteam.su/account/requests')
        })
    })
  })