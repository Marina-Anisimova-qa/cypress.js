# cypress.js
Автотесты на cypress

Установить node.js: https://nodejs.org/en/download/.
Скачать проект из github и открыть в  IDE (например, sublime или vs code) 
В терминале запустить команды  npm install --save-dev cypress@12.7.0 и  npm i

В папке Cypress/e2e содержатся примеры автотестов:
- loginmarina.cy  - автотесты для формы логина и пароля на сайте https://login.qa.studio/
- buyavatar.cy - e2e автотест на покупку нового аватара для своего тренера на сайте https://pokemonbattle.me/

Для запуска автотеста используй команду  npx cypress open
