const products = [
    {
        url: './card-pages/shirt-green.html',
        category: 'рубашки',
        image: './images/shirt-green.jpg',
        title: 'Мужская тактическая рубаха ADAB, зеленная',
        price: '4 450₽',
        currency: '(1 000₺ / 45$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-white-summer.html',
        sale: '-20%',
        category: 'формы',
        image: './images/uniform-white-summer.jpg',
        title: 'Мужская форма ADAB, лето белая',
        price: '6 392₽',
        currency: '(1 400₺ / 60$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-dark-blue.html',
        category: 'формы',
        image: './images/uniform-dark-blue.jpg',
        title: 'Мужская форма ADAB, темно-синяя',
        price: '7 990₽',
        currency: '(1 750₺ / 75$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-black.html',
        category: 'формы',
        image: './images/uniform-black.jpg',
        title: 'Мужская форма ADAB, чёрная',
        price: '7 990₽',
        currency: '(1 750₺ / 75$)',
        size: 'M, L, XL'
    },
    {
        url: './card-pages/uniform-white.html',
        sale: '-20%',
        category: 'формы',
        image: './images/uniform-white.jpg',
        title: 'Мужская форма ADAB, осень белая',
        price: '6 392₽',
        currency: '(1 400₺ / 60$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/sleeveless-natural.html',
        category: 'безрукавка',
        image: './images/sleeveless-natural.jpg',
        title: 'Мужской жилет из натурального каракуля',
        price: '45 300₽',
        currency: '(14 000₺ / 500$)',
        size: 'под заказ'
    },
    {
        url: './card-pages/sleeveless-eco.html',
        category: 'безрукавка',
        image: './images/sleeveless-eco.jpg',
        title: 'Мужской жилет из овчины под каракуль',
        price: '27 180₽',
        currency: '(8 300₺ / 300$)',
        size: 'под заказ'
    },
    {
        url: './card-pages/baseball-cap-black.html',
        category: 'головные уборы',
        image: './images/baseball-cap-black.jpg',
        title: 'Мужская бейсболка ADAB, чёрная',
        price: '990₽',
        currency: '(250₺ / 10$)',
        size: 'один размер'
    },
    {
        url: './card-pages/baseball-cap-white.html',
        category: 'головные уборы',
        image: './images/baseball-cap-white.jpg',
        title: 'Мужская бейсболка ADAB, белая',
        price: '990₽',
        currency: '(250₺ / 10$)',
        size: 'один размер'
    },
    {
        url: './card-pages/kids-uniform-black.html',
        category: 'детская одежда',
        image: './images/kids-uniform-black.jpg',
        title: 'Детская форма ADAB, чёрная',
        price: '4 500₽',
        currency: '(1 100₺ / 45$)',
        size: '104, 116, 128, 140, 152, 164, 176'
    },
    {
        url: './card-pages/kids-uniform-gray.html',
        category: 'детская одежда',
        image: './images/kids-uniform-gray.jpg',
        title: 'Детская форма ADAB, серая',
        price: '4 500₽',
        currency: '(1 100₺ / 45$)',
        size: '104, 116, 128, 140, 152, 164, 176'
    },
    {
        url: './card-pages/shoes-black-brown.html',
        category: 'обувь',
        image: './images/shoes-black-brown.jpg',
        title: 'Мужская обувь ADAB, черно-коричневые',
        price: '5 500₽',
        currency: '(1 500₺ / 60$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-blue.html',
        category: 'обувь',
        image: './images/shoes-blue.jpg',
        title: 'Мужская обувь ADAB, синяя',
        price: '5 500₽',
        currency: '(1 500₺ / 60$)',
        size: '40'
    },
    {
        url: './card-pages/shoes-black.html',
        category: 'обувь',
        image: './images/shoes-black.jpg',
        title: 'Мужская обувь ADAB, черная',
        price: '5 500₽',
        currency: '(1 500₺ / 60$)',
        size: '40, 41'
    },
];

const productContainer = document.querySelector('.container-cards');
const productTemplate = productContainer.querySelector('.cards');
let loadedCards = 0;
function loadCards() {
    const cardsToLoad = products.slice(loadedCards, loadedCards + 12);
    cardsToLoad.forEach((product, index) => {
        const card = productTemplate.cloneNode(true);
        card.classList.add('cards');
        card.style.opacity = '0';
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
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 70);
        loadedCards++;
    });
    if (loadedCards >= products.length) {
        loadMoreButton.style.display = 'none';
    }
}
loadCards();
const loadMoreButton = document.querySelector('.load-more-button');
loadMoreButton.addEventListener('click', loadCards);
function redirectToPage(url) {
    window.location.href = url;
}