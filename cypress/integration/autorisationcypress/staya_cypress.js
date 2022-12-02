
describe('Авторизация на сайте staya', function () {
    
    it('Позитивный тест-кейс логин и пароль корректные', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('lieders.a.v@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Rome.2023');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');

    })

    it('Негативный тест-кейс логин корректный, а пароль некорректный', function () {
        cy.visit('https://staya.dog/');
        cy.reload(true);
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('lieders.a.v@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Rome.2024');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');

    })
  
})
