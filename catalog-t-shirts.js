const products = [
    {
        url: './card-pages/t-shirt-beige.html',
        // sale: '-20%',
        category: 'футболки',
        image: './images/t-shirt-beige.jpg',
        title: 'Футболка оверсайз ADAB, бежевая',
        price: '2 250₽',
        currency: '(630₺ / 20$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-white.html',
        category: 'футболки',
        image: './images/t-shirt-white.jpg',
        title: 'Футболка оверсайз ADAB, белая',
        price: '2 250₽',
        currency: '(630₺ / 20$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-black.html',
        category: 'футболки',
        image: './images/t-shirt-black.jpg',
        title: 'Футболка оверсайз ADAB, чёрная',
        price: '2 250₽',
        currency: '(630₺ / 20$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-blue.html',
        category: 'футболки',
        image: './images/t-shirt-blue.jpg',
        title: 'Классическая футболка ADAB, синяя',
        price: '2 500₽',
        currency: '(690₺ / 22$)',
        size: 'S, M, L, XL'
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