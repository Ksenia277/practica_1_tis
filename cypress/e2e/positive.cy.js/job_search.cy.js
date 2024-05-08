describe('Job search Test',() => {
    it ('Positive job search test',() => {
        cy.fixture('test_Searcht').then(data => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(data.url)
        cy.log('Ввод логина')
        cy.get('input[class="form-input--text form-input"]').type(data.login)

        cy.log('Ввод пароля')
        cy.get('input[class="form-input--password form-input"]').type(data.password)

        cy.log('Клик по кнопке Войти')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()
        cy.wait(1500)

        cy.log('Переxод на Вакансии')
        cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click()

        cy.log('Ввод в поле поиска')
        cy.get('input[class="form-input--text form-input search-input__field"]').type(data.vacancy_search)
        cy.get('div.search-input__field > .button').click()

        cy.log('Проверка что появились блоки с вакансиями')
        cy.get('div.search-input__field > .button').click()
        .should('exist')
        });
    });
});