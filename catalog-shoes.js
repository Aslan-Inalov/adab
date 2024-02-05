const products = [
    {
        url: './card-pages/shoes-beige.html',
        category: 'обувь',
        image: './images/shoes-beige.jpg',
        title: 'Мужская обувь ADAB, бежевые',
        price: '5 500₽',
        currency: '(1 500₺ / 60$)',
        size: '40, 41, 42, 43, 44, 45'
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