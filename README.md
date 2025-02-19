![scrinshot](https://github.com/Natali0258/ClothesShop/blob/master/src/images/ClothesShopCollage.png)

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

### Главная (Home) 
При запуске проекта на сервер отправляется axios-запрос. В ответе получаем массив товаров, который будет хранится в Context.
При запуске проекта на экран выводится главная страница.
На главной странице в блоке «Новая коллекция» выводятся последние три элемента массива товаров.

### Магазин (Shop) 
На странице Магазин (Shop) выводятся карточки товаров, отсортированные по категориям (все, пальто, костюмы, джинсы, юбки, рубашки). Также предусмотрена сортировка товаров по цене (сначала дешевые/сначала дорогие или товары со скидкой).
При первоначальной загрузке параметры сортировки следующие: Все, сначала дешевые.
На странице используется пагинация из библиотеки Ant Design.

На странице Магазин у администратора существует возможность добавить новый товар: После клика по кнопке "Добавить товар" происходит переход на страницу "Создать продукт" (CreateProduct). При заполнении поля формы "Фотография" файл с фотографией товара необходимо выбирать из папки public/shop.

Чтобы положить товар в карзину, необходимо: кликнуть по фотографии товара и перейти на страницу "Карточка товара" (Product); выбрать размер, цвет и количество товара; нажать кнопку "Добавить в корзину".

### Карточка товара (Product)
В карточке товара отражена следующая информация о товаре: название, фотография, цена/цена со скидкой, размер, цвет, количество товара в наличии.
Если товара нет в наличии, то input и button будут заблокированы.
Рядом с кнопкой «Добавить в корзину», в поле с цифрой «1» вводится количество товара при помощи стрелок (вверх/вниз) или цифр с клавиатуры. Невозможно добавить в корзину количество товара больше, чем он есть в наличии.

Для администратора существует возможность добавить скидку кликом по кнопке "Добавить скидку". В появившемся поле нужно ввести процент скидки и нажать кнопку "Добавить". Информация о цене товара изменится: появится новая цена со скидкой, а старая цена будет перечёркнута.

В разделе «Связанные товары» выводятся товары из той же категории.

### Корзина (Cart)
Для хранения товара в Корзине используется хранилище localStorage. При выходе из аккаунта товар из корзины удаляется. 

На странице "Корзина" список выбранных пользователем товаров представлен в виде таблицы, где можно редактировать количество товара и удалять товар.

Если пользователь добавляет в корзину товар с одинаковыми характеристиками (название, размер, цвет), то в корзине количество этого товара суммируется.

Для пользователей предусмотрена возможность купить товар со скидкой. Чтобы применить скидку необходимо в поле под таблицей ввести купон (кодовое слово). При вводе купона и нажатии на «Применить купон» на сервер отправляется axios-запрос. В ответе получаем объект с купоном. У каждого купона есть лимит его использования. Если введённый купон существует и лимит использования не израсходован, то пользователь получает скидку, иначе выходит сообщение «По данному промокоду скидок нет». После покупки товара лимит уменьшается на 1. 
Массив купонов заполняется админом.

В корзине рассчитывается «Подитог» и «Итого»: 
Подитог — это стоимость всех товаров в корзине.
Итого — это стоимость всех товаров в корзине после применения купона.

После нажатия кнопки "Оформить заказ", осуществляется переход на страницу "Оформление заказа" (Checkout). 

### Оформление заказа (Checkout)
Организованы две базы заказов: в профиле пользователя (users/orders) и в базе магазина для статистики (orders).
Для оформления заказа используется форма из библиотеки React Hook Form.
На странице "Оформление заказа" на экран выводится форма и информация о заказе в виде таблицы.
Пользователь должен обязательно заполнить все поля формы, кроме «комментарии» (не обязательно).
После нажатия кнопки «Оформить заказ» на сервер отправляются два axios-запроса:
1.POST-запрос в базу магазина для статистики (orders) с данными формы, с данными о выбранных товарах и с данными о пользователе из профиля.
2.PATCH-запрос в базу профиля пользователя (users/orders) с данными о выбранных товарах.
Далее произойдет переход на страницу «Статус заказа» с сообщением «Заказ успешно оформлен. Мы свяжемся с вами в ближайшее время».

### Контакт (Contact)
На странице "Контакты" выведена информация о магазине (конт.телефон, email, адрес) и форма для отправки письма на email магазина.
После заполнения формы и нажатия кнопки «Отправить» будет отправлен запрос на сервер EmailJS, который отправит электронное письмо на email магазина (nataliat0258@mail.ru). В случае успешной доставки письма на экран выводится сообщение «Сообщение успешно отправлено».

### Мой аккаунт (Profile)
Чтобы перейти на страницу "Мой аккаунт" необходимо нажать значок юзера.
Страница "Мой аккаунт" содержит страницы "Настройки" и "История заказов".

Страница "Настройки" содержит блоки "Личные данные" и "Пароль". Для редактирования данных необходимо кликнуть "изменить", отредактировать поля и нажать кнопку "Сохранить изменения".
