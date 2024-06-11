![Коллаж](https://user-images.githubusercontent.com/83341999/185465189-4dd1be6a-b6fa-41b9-bf41-ab691439bd10.png)

# Тема: ClothesShop - интернет-магазин

## Библиотеки:
### REST API: JSON-сервер
### Admin UI: React-admin
### CRUD: axios
### Хранение данных: Context, localStorage
### Работа с формами: react-hook-form
### Маршрутизация: react-router-dom
### OTHER (другие): UUID (генерация id), Swiper, react-icons, sass, emailJS (сервер, который позволяет отправлять 200 бесплатных электронных писем в месяц), antd (Pagination)

## Описание проекта: 
ClothShop - этот интернет-магазин, созданный на React с использованием JSON-server и Context. 
Приложение содержит новигацию по страницам: Home, Shop, Brand, Contact, AdminPanel, Cart, Profile, Register/Login.

На странице Магазин (Shop) выводятся карточки товаров, отсортированные по категориям (все, пальто, костюмы, джинсы, юбки, рубашки). Также предусмотрена сортировка товаров по цене (по возрастанию/убыванию цены или товары со скидкой).

На странице Магазин существует возможность добавить новый товар: После клика по кнопке "Добавить товар" происходит переход на страницу "Создать продукт" (CreateProduct). При заполнении поля формы "Фотография" файл с фотографией товара необходимо выбирать из папки public/shop.

Чтобы положить товар в карзину, необходимо: кликнуть по фотографии товара и перейти на страницу "Карточка товара" (Product); выбрать размер, цвет и количество товара; нажать кнопку "Добавить в корзину".

На странице "Корзина" список выбранных пользователем товаров представлен в виде таблицы, где можно редактировать количество товара и удалять товар. 

Для пользователей предусмотрена возможность купить товар со скидкой. Чтобы применить скидку необходимо в поле под таблицей ввести купон (кодовое слово). Массив купонов заполняется админом. У купона, кроме процента скидки, предусмотрено количество заказов, к которым эта скидка может быть применена.

После нажатия кнопки "Оформить заказ", осуществляется переход на страницу "Оформление заказа" (Checkout). На экран выводится: информация о заказе в виде таблицы и форма. После заполнения полей формы, пользователь нажимает кнопку "Разместить заказ", происходит переход на страницу "Статус заказа", где на экране выводится информация "Заказ успешно оформлен. Мы свяжемся с вами в ближайшее время!". 

# Getting Started with Create React Ap

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
