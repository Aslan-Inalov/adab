const products = [
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
        url: './card-pages/uniform-white.html',
        sale: '-20%',
        category: 'формы',
        image: './images/uniform-white.jpg',
        title: 'Мужская форма ADAB, осень белая',
        price: '6 392₽',
        currency: '(1 400₺ / 60$)',
        size: 'S, M, L, XL, XXL'
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
