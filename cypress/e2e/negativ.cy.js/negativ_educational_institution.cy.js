describe('Instit Test', () => {
      it ('Exists-existent description test',() => {
        cy.fixture('test_Institution').then(data => {
            cy.log('Переxод на страницу авторизации')
            cy.visit(data.url)
            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)
      
            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)
      
            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()
      
            cy.log('Клик по кнопке "Выбрать роль"')
            cy.get('.page-nav__role-block > .button').click()
      
            cy.log('Клик по кнопке "Образовательная организация"')
            cy.get('.select-role-form > :nth-child(2)').click()
      
            cy.log('Клик по кнопке "Создание кабинета"')
            cy.get('.variants-company > :nth-child(2)').click()
      
            cy.log('Ввод организации')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.company)
      
            cy.log('Ввод адреса')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address)
      
            cy.log('Ввод краткого описания')
            cy.get('.form-area').type(data.description)
      
            cy.log('Клик по кнопке "Добавить" (если заявка уже поданна)')
            cy.get('.create-company-form__description-block > .button').click()
      
            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span')
            .should('exist')
        });
      });
});
    