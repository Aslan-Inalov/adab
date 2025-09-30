// script.js
if (!['localhost', '127.0.0.1'].includes(location.hostname)) {
  if (location.href.includes('.html')) {
    history.pushState({}, '', location.href.replace('.html', ''));
  }
}

var year = new Date().getFullYear();

// Вставляем текущий год в элемент с id "currentYear"
document.getElementById("currentYear").innerHTML = year;

const burgerBtn = document.querySelector('.header__burger-btn');
const burger = document.querySelector('.burger');
const burgerCloseBtn = document.querySelector('.burger__close-btn');
const root = document.querySelector('.root');

if (burgerBtn && burger && burgerCloseBtn && root) {
    burgerBtn.addEventListener('click', function () {
        burger.classList.add('burger_opened');
        root.style.overflow = 'hidden';
    });

    burgerCloseBtn.addEventListener('click', function () {
        burger.classList.remove('burger_opened');
        root.style.overflow = 'auto';
    });
}

// Закрытие по клику в пунктах меню бургера + подсветка активной ссылки
const menuLinks = document.querySelectorAll('.burger__menu-link');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        if (burger) burger.classList.remove('burger_opened');
        if (root) root.style.overflow = 'auto';
    });

    if (link.href === window.location.href) {
        link.classList.add('burger__menu-link-active');
    }
});

fetch('./components/catalog-block.html')
    .then(response => response.text())
    .then(html => {
        const catalogEl = document.getElementById('catalog');
        if (catalogEl) {
            catalogEl.innerHTML = html;
            activateCurrentCatalogItem();

            // После инъекции разметки — триггерим инициализацию слайдера
            setTimeout(() => {
                try {
                    window.dispatchEvent(new Event('resize'));
                } catch (e) {
                    console.warn('Slider init trigger failed', e);
                }
            }, 0);
        }
    })
    .catch(err => console.error('Failed to load catalog block:', err));

function activateCurrentCatalogItem() {
    // Нормализуем URL текущей страницы
    const getPageName = (url) => {
        return url.split('/').pop()
            .replace('.html', '')
            .replace('catalog-', ''); // дополнительно убираем префикс если нужно
    };

    const currentPage = getPageName(window.location.pathname);

    document.querySelectorAll('.image-item-container').forEach(container => {
        const link = container.querySelector('a');
        if (link) {
            const linkPage = getPageName(link.getAttribute('href'));
            if (linkPage === currentPage) {
                container.classList.add('image-item-container-active');
                console.log('Active item found:', linkPage); // для отладки
            }
        }
    });
}
