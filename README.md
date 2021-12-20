# vue2-shopcart

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Задачи

1. На основе представленного шаблона (желательно без его использования) создать точку
   входа в Ваше приложение;
2. Реализовать следующие страницы на своем сайте:
   - Перечень товаров:
     - Блоки с самими товарами (например, в виде карточек). Для каждого товара должна
       быть реализована возможность его добавления в корзину и удаления из нее. Помимо
       этого при нажатии на товар должно появляться модальное окно с более полной
       информацией о товаре (тоже с кнопками добавления и удаления из корзины)
     - Блок с кнопкой перехода в корзину. При нажатии на нее происходит переход на
       вторую страницу сайта - в корзину
     - (Опционально) Реализовать поиск по товарам (поле ввода и/или фильтры)
   - Корзина товаров:
     - Перечень добавленных товаров. Здесь должна быть реализована возможность изменять
       количество товаров каждого типа, а также удалять их целиком
     - Блок с кнопкой "Сделать заказ". Если на 3 странице были добавлены контактные
       данные, то сразу происходит переход на страницу с заказами. Если данные
       добавлены не были, появляется уведомление о том, что сначала нужно заполнить
       контактные данные
   - Страница добавления контактной информации пользователя:
     - Здесь необходимо предусмотреть поля ввода данных и возможность их сохранения.
       Примеры полей: ФИО, контактный телефон, адрес эл. почты, возраст и т.д.
   - Страница сделанных заказов:
     - Перечень заказов с основной информацией о них. При нажатии на товар должно
       появляться модальное окно с информацией о товаре (как на первой странице)
     - Кнопка очистки истории заказов.
   - (Опционально) Страница со вспомогательной информацией о сайте
     - Здесь можно описать сайт с точки зрения используемых технологий, оставить ссылки
       на Ваш github/ резюме и т.д. Также можно предоставить служебную информацию о
       сайте (юридическую и др.)
3. На странице должен также присутствовать блок кнопок для переключения между страницами;
4. Тема выбирается студентом самостоятельно. Это могут быть продуктовые товары, автотовары
   и любые другие, а также всевозможные услуги (здравоохранения, образования и т.д.). Для
   получения информации о товарах можно пользоваться доступными в интернете api, а также
   создать список товаров самостоятельно;
5. Сайт не предполагает наличия серверной части, но хранить данные все-таки нужно. Для
   этого необходимо использовать localStorage. При открытии страницы оттуда должны
   подтягиваться данные о заказах и о пользователе. Корзина может сбрасываться при
   закрытии вкладки (ее сохранение опционально)
6. Приложение необходимо задеплоить на vercel

### Размещение проекта

Второй курсовой проект - приложение, которое необходимо задеплоить на vercel. Цель
проекта - сделать полноценный сайт, на который сможет перейти любой пользовать сети
интернет. <br>
Поэтому проект разрабатывается в отдельном репозитории в Github. В текущем
репозитории (файл Projects/Project 2. Vue.js/README.md) необходимо оставить ссылку на
Ваш репозиторий с проектом и ссылку на сам сайт. <br>
В самом репозитории (где будет разрабатываться проект) также должен быть