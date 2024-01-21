// Проверяем, если расширение .html присутствует в URL
if (window.location.href.indexOf('.html') > -1) {
    // Удаляем расширение .html из URL без перезагрузки страницы
    var newUrl = window.location.href.replace('.html', '');
    window.history.pushState({}, '', newUrl);
}

var year = new Date().getFullYear();

// Вставляем текущий год в элемент с id "currentYear"
document.getElementById("currentYear").innerHTML = year;

document.querySelector('.header__burger-btn').addEventListener('click', function () {
    document.querySelector('.burger').classList.add('burger_opened');
    document.querySelector('.root').style.overflow = 'hidden';
});

document.querySelector('.burger__close-btn').addEventListener('click', function () {
    document.querySelector('.burger').classList.remove('burger_opened');
    document.querySelector('.root').style.overflow = 'auto';
});

// Получаем все ссылки в меню
var links = document.querySelectorAll('.burger-menu__link');
// Добавляем обработчик события для каждой ссылки
links.forEach(function (link) {
    link.addEventListener('click', function () {
        // Добавляем класс "hidden" к контейнеру "burger-container"
        document.querySelector('.burger-container').classList.add('hidden');
    });
});

// Получаем все ссылки в меню
var links = document.querySelectorAll('.burger-menu__link');
// Проверяем каждую ссылку, если ее URL соответствует текущему пути, добавляем стиль "active"
links.forEach(function (link) {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
