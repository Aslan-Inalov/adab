const products = [
    {
        url: './card-pages/moccasins-black.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/moccasins-black.jpg',
        title: 'Кожаные мокасины ADAB, черные',
        price: '3 696₽',
        currency: '(1 144₺ / 40$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/moccasins-blue.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/moccasins-blue.jpg',
        title: 'Нубуковые мокасины ADAB, синие',
        price: '3 696₽',
        currency: '(1 144₺ / 40$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/low-shoes-black.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/low-shoes-black.jpg',
        title: 'Легкие полуботинки ADAB, черные',
        price: '2 960₽',
        currency: '(1 024₺ / 32$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/low-shoes-pearl.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/low-shoes-pearl.jpg',
        title: 'Легкие полуботинки ADAB, перламутровые',
        price: '2 960₽',
        currency: '(1 024₺ / 32$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-black.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/summer-sneakers-black.jpg',
        title: 'Кожаные летние кроссовки ADAB, черные',
        price: '3 400₽',
        currency: '(1 072₺ / 37$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-white.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/summer-sneakers-white.jpg',
        title: 'Кожаные летние кроссовки ADAB, белые',
        price: '3 400₽',
        currency: '(1 072₺ / 37$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-blue.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/summer-sneakers-blue.jpg',
        title: 'Нубуковые летние кроссовки ADAB, синие',
        price: '3 400₽',
        currency: '(1 072₺ / 37$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-beige.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/summer-sneakers-beige.jpg',
        title: 'Нубуковые летние кроссовки ADAB, бежевые',
        price: '3 400₽',
        currency: '(1 072₺ / 37$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-blue-nubuck.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/sandals-blue-nubuck.jpg',
        title: 'Нубуковые сандалии ADAB, синие',
        price: '3 400₽',
        currency: '(1 072₺ / 37$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-green.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/sandals-green.jpg',
        title: 'Нубуковые сандалии ADAB, зеленные',
        price: '3 400₽',
        currency: '(1 072₺ / 37$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-blue.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/sandals-blue.jpg',
        title: 'Кожанные сандалии ADAB, синие',
        price: '3 400₽',
        currency: '(1 072₺ / 37$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-beige.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/shoes-beige.jpg',
        title: 'Мужская обувь ADAB, бежевые',
        price: '4 400₽',
        currency: '(1 200₺ / 48$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-black-brown.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/shoes-black-brown.jpg',
        title: 'Мужская обувь ADAB, черно-коричневые',
        price: '4 400₽',
        currency: '(1 200₺ / 48$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-blue.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/shoes-blue.jpg',
        title: 'Мужская обувь ADAB, синяя',
        price: '4 400₽',
        currency: '(1 200₺ / 48$)',
        size: '40'
    },
    {
        url: './card-pages/shoes-black.html',
        sale: '-20%',
        category: 'обувь',
        image: './images/shoes-black.jpg',
        title: 'Мужская обувь ADAB, черная',
        price: '4 400₽',
        currency: '(1 200₺ / 48$)',
        size: '40, 41'
    },
];

const productContainer = document.querySelector('.container-cards');
const productTemplate = productContainer.querySelector('.cards');
let loadedCards = 0;
const loadMoreButton = document.querySelector('.load-more-button');
function loadCards() {
    const cardsToLoad = products.slice(loadedCards, loadedCards + 12);
    cardsToLoad.forEach((product, index) => {
        const card = productTemplate.cloneNode(true);
        card.classList.add('cards');
        card.style.opacity = '0'; // Устанавливаем начальную прозрачность карточки
        card.style.display = 'block';
        card.querySelector('.card__img').src = product.image;
        card.querySelector('.card__img').alt = product.title;
        card.querySelector('.card__name').textContent = product.title;
        card.querySelector('.card__price').textContent = product.price;
        card.querySelector('.card__price-currency').textContent = product.currency;
        card.classList.add('card');
        card.onclick = function () {
            redirectToPage(product.url);
        };

        if (product.sale) { // Добавляем условие для отображения контейнера с скидкой
            card.querySelector('.card__sale').textContent = product.sale;
            card.querySelector('.card__sale').style.display = 'block';
        }

        productContainer.appendChild(card);
        // Задержка перед установкой полной прозрачности
        setTimeout(() => {
            card.style.opacity = '1'; // Плавно устанавливаем полную прозрачность
        }, index * 70); // Устанавливаем небольшую задержку
        loadedCards++;
    });
    if (loadedCards >= products.length) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = loadedCards < 12 ? 'none' : 'block';
    }
}
loadCards();
loadMoreButton.addEventListener('click', loadCards);

function redirectToPage(url) {
    window.location.href = url;
}