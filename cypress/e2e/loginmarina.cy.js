describe('Тесты на авторизацию', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio//'); // зайди на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввожу логин
        cy.get('#loginButton').should('be.disabled'); // кнопка не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); // ввожу пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').should('be.visible') // текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
        })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio//'); // зайди на сайт
        cy.get('#forgotEmailButton').click(); // нажимаю забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');// ввожу логин
        cy.get('#restoreEmailButton').click();// нажимаю отправить код
        cy.get('#messageHeader').should('be.visible') // текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
        })

    it('Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio//'); // зайди на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввожу логин
        cy.get('#loginButton').should('be.disabled'); // кнопка не кликабельна
        cy.get('#pass').type('iLoveqastudio3'); // ввожу неверный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').should('be.visible') // текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
        })

     it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio//'); // зайди на сайт
        cy.get('#mail').type('german2@dolnikov.ru'); // ввожу НЕ правильный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); // ввожу верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').should('be.visible') // текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
        })

     it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio//'); // зайди на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввожу логин без @
        cy.get('#loginButton').should('be.disabled'); // кнопка не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); // ввожу верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').should('be.visible') // текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
        })

     it('Проверка строчных букв в логине', function () {
        cy.visit('https://login.qa.studio//'); // зайди на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввожу логин без @
        cy.get('#loginButton').should('be.disabled'); // кнопка не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); // ввожу верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').should('be.visible') // текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
        }) 
})

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


