describe('Тесты сайт покемонов', function () {
    it('Покупка аватара тренера', function () {
            cy.visit('https://pokemonbattle.me/'); // зайди на сайт
            cy.clearCookies(); // удаляю куки
            cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввожу логин
            cy.get('#password').type('USER_PASSWORD'); // ввожу пароль
            cy.get('.auth__button').click(); // нажимаю войти
            cy.get('.header__btns > [href="/shop"]').click(); // нажимаю кнопку магазин
            cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // получаю все непустые карточки аватора и кликаю на 1
            cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4861321942179870'); //ввожу номер карты
            cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); //ввожу дату
            cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //ввожу cvsv
            cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ivan ivanov'); // ввожу владельца
            cy.get('.pay-btn').click(); //нажимаю оплатить
            cy.intercept('POST','https://api.pokemonbattle.me:9104/').as('ajax-options');
            cy.wait('@ajax-options');
            cy.get('#cardnumber').type('56456'); // ввожу код смс
            cy.get('.payment__submit-button').click(); //нажимаю 
            cy.get('.payment__field-defolt-for-success').should('be.visible') // текст виден
            cy.get('.payment__field-defolt-for-success').contains('Покупка прошла успешно'); // проверяю текст
            cy.get('.payment__back-button-success').should('be.visible'); // кнопка вернуться в магазин видна
            cy.get('.payment__back-button-success').should('be.enabled'); // кнопка вернуться в магаиз активна
            cy.get('.payment__back-button-success').click(); //нажимаю вернуться в магазин
        })
    })