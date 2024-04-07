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




