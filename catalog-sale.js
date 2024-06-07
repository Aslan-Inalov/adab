const products = [
    {
        url: './card-pages/shirt-green.html',
        sale: '-20%',
        category: 'рубашки',
        image: './images/shirt-green.jpg',
        title: 'Мужская тактическая рубаха ADAB, зелённая',
        price: '3 500₽',
        currency: '(800₺ / 36$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-white-summer.html',
        sale: '-20%',
        category: 'формы',
        image: './images/uniform-white-summer.jpg',
        title: 'Мужская форма ADAB, лето белая',
        price: '6 392₽',
        currency: '(1 800₺ / 60$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-dark-blue.html',
        sale: '-20%',
        category: 'формы',
        image: './images/uniform-dark-blue.jpg',
        title: 'Мужская форма ADAB, темно-синяя',
        price: '6 392₽',
        currency: '(1 800₺ / 60$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-black.html',
        sale: '-20%',
        category: 'формы',
        image: './images/uniform-black.jpg',
        title: 'Мужская форма ADAB, чёрная',
        price: '6 392₽',
        currency: '(1 800₺ / 60$)',
        size: 'M, L, XL'
    },
    {
        url: './card-pages/uniform-white.html',
        sale: '-20%',
        category: 'формы',
        image: './images/uniform-white.jpg',
        title: 'Мужская форма ADAB, осень белая',
        price: '6 392₽',
        currency: '(1 800₺ / 60$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/t-shirt-white.html',
        sale: '-20%',
        category: 'футболки',
        image: './images/t-shirt-white.jpg',
        title: 'Футболка оверсайз ADAB, белая',
        price: '1 800₽',
        currency: '(504₺ / 16$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-black.html',
        sale: '-20%',
        category: 'футболки',
        image: './images/t-shirt-black.jpg',
        title: 'Футболка оверсайз ADAB, чёрная',
        price: '1 800₽',
        currency: '(504₺ / 16$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-blue.html',
        sale: '-20%',
        category: 'футболки',
        image: './images/t-shirt-blue.jpg',
        title: 'Классическая футболка ADAB, синяя',
        price: '2 000₽',
        currency: '(552₺ / 18$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/tactical-uniform-black.html',
        sale: '-20%',
        category: 'формы',
        image: './images/tactical-uniform-black.jpg',
        title: 'Мужская тактическая форма ADAB, чёрная',
        price: '6 392₽',
        currency: '(1 800₺ / 60$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/sleeveless-natural.html',
        sale: '-20%',
        category: 'безрукавка',
        image: './images/sleeveless-natural.jpg',
        title: 'Мужской жилет из натурального каракуля',
        price: '36 240₽',
        currency: '(11 200₺ / 400$)',
        size: 'под заказ'
    },
    {
        url: './card-pages/sleeveless-eco.html',
        sale: '-20%',
        category: 'безрукавка',
        image: './images/sleeveless-eco.jpg',
        title: 'Мужской жилет из овчины под каракуль',
        price: '21 744₽',
        currency: '(6 6400₺ / 240$)',
        size: 'под заказ'
    },
    {
        url: './card-pages/baseball-cap-black.html',
        sale: '-20%',
        category: 'головные уборы',
        image: './images/baseball-cap-black.jpg',
        title: 'Мужская бейсболка ADAB, чёрная',
        price: '792₽',
        currency: '(200₺ / 8$)',
        size: 'один размер'
    },
    {
        url: './card-pages/baseball-cap-white.html',
        sale: '-20%',
        category: 'головные уборы',
        image: './images/baseball-cap-white.jpg',
        title: 'Мужская бейсболка ADAB, белая',
        price: '792₽',
        currency: '(200₺ / 8$)',
        size: 'один размер'
    },
    {
        url: './card-pages/kids-uniform-black.html',
        sale: '-31%',
        category: 'детская одежда',
        image: './images/kids-uniform-black.jpg',
        title: 'Детская форма ADAB, чёрная',
        price: '3 100₽',
        currency: '(760₺ / 31$)',
        size: '104, 116, 128, 140, 152, 164, 176'
    },
    {
        url: './card-pages/kids-uniform-gray.html',
        sale: '-31%',
        category: 'детская одежда',
        image: './images/kids-uniform-gray.jpg',
        title: 'Детская форма ADAB, серая',
        price: '3 100₽',
        currency: '(760₺ / 31$)',
        size: '104, 116, 128, 140, 152, 164, 176'
    },
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
        price: '3 700₽',
        currency: '(1 280₺ / 40$)',
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
