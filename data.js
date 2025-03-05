const products = [
    {
        url: './card-pages/shirt-green.html',
        sale: '-25%',
        category: 'рубашки',
        image: './images/shirt-green.jpg',
        title: 'Мужская тактическая рубаха ADAB, зелёная',
        price: '3 675₽',
        currency: '(1 237₺, 42$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-ramadi.html',
        sale: '-25%',
        category: 'формы',
        image: './images/uniform-ramadi.jpg',
        title: 'Мужской костюм Рамадий',
        price: '6 592₽',
        currency: '(2 205₺ / 75$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-sharaf.html',
        sale: '-25%',
        category: 'формы',
        image: './images/uniform-sharaf.jpg',
        title: 'Мужской костюм Шараф',
        price: '4 447₽',
        currency: '(1 500₺ / 49$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-white-summer.html',
        sale: '-35%',
        category: 'формы',
        image: './images/uniform-white-summer.jpg',
        title: 'Мужская форма ADAB, лето белая',
        price: '5 713₽',
        currency: '(1 910₺, 65$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-dark-blue.html',
        sale: '-25%',
        category: 'формы',
        image: './images/uniform-dark-blue.jpg',
        title: 'Мужская форма ADAB, темно-синяя',
        price: '6 592₽',
        currency: '(2 205₺ / 75$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-black.html',
        sale: '-25%',
        category: 'формы',
        image: './images/uniform-black.jpg',
        title: 'Мужская форма ADAB, чёрная',
        price: '6 592₽',
        currency: '(2 205₺ / 75$)',
        size: 'M, L, XL'
    },
    {
        url: './card-pages/uniform-white.html',
        sale: '-35%',
        category: 'формы',
        image: './images/uniform-white.jpg',
        title: 'Мужская форма ADAB, осень белая',
        price: '5 713₽',
        currency: '(1 910₺, 65$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/tactical-uniform-black.html',
        sale: '-25%',
        category: 'формы',
        image: './images/tactical-uniform-black.jpg',
        title: 'Мужская тактическая форма ADAB, чёрная',
        price: '6 592₽',
        currency: '(2 205₺ / 75$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-blue.html',
        sale: '-25%',
        category: 'камисы',
        image: './images/kamis-blue.jpg',
        title: 'Камис ADAB, лето синий',
        price: '2 797₽',
        currency: '(866₺ / 32$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-red.html',
        sale: '-25%',
        category: 'камисы',
        image: './images/kamis-red.jpg',
        title: 'Камис ADAB, лето бордовый',
        price: '2 797₽',
        currency: '(866₺ / 32$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-white.html',
        sale: '-25%',
        category: 'камисы',
        image: './images/kamis-white.jpg',
        title: 'Камис ADAB, лето белый',
        price: '2 797₽',
        currency: '(866₺ / 32$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-black.html',
        sale: '-25%',
        category: 'камисы',
        image: './images/kamis-black.jpg',
        title: 'Камис ADAB, лето черный',
        price: '2 797₽',
        currency: '(866₺ / 32$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-khaki.html',
        sale: '-25%',
        category: 'камисы',
        image: './images/kamis-khaki.jpg',
        title: 'Камис ADAB, лето хаки',
        price: '2 797₽',
        currency: '(866₺ / 32$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-black.html',
        sale: '-25%',
        category: 'штаны',
        image: './images/pants-summer-black.jpg',
        title: 'Штаны ADAB, лето черные',
        price: '2 887₽',
        currency: '(967₺ / 33$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-khaki.html',
        sale: '-25%',
        category: 'штаны',
        image: './images/pants-summer-khaki.jpg',
        title: 'Штаны ADAB, лето хаки',
        price: '2 887₽',
        currency: '(967₺ / 33$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-blue.html',
        sale: '-25%',
        category: 'штаны',
        image: './images/pants-summer-blue.jpg',
        title: 'Штаны ADAB, лето синие',
        price: '2 887₽',
        currency: '(967₺ / 33$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-beige.html',
        sale: '-25%',
        category: 'штаны',
        image: './images/pants-summer-beige.jpg',
        title: 'Штаны ADAB, лето бежевые',
        price: '2 887₽',
        currency: '(967₺ / 33$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/t-shirt-blue-classic.html',
        sale: '-30% + ПОДАРОК',
        category: 'футболки',
        image: './images/t-shirt-blue-classic.jpg',
        title: 'Классическая футболка ADAB, синяя',
        price: '1 925₽',
        currency: '(599₺ / 23$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-red.html',
        sale: '-25%',
        category: 'футболки',
        image: './images/t-shirt-red.jpg',
        title: 'Футболка оверсайз ADAB, бордовая',
        price: '1 860₽',
        currency: '(566₺ / 21$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-blue.html',
        sale: '-25%',
        category: 'футболки',
        image: './images/t-shirt-blue.jpg',
        title: 'Футболка оверсайз ADAB, синяя',
        price: '1 860₽',
        currency: '(566₺ / 21$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-beige.html',
        sale: '-25%',
        category: 'футболки',
        image: './images/t-shirt-beige.jpg',
        title: 'Футболка оверсайз ADAB, бежевая',
        price: '1 860₽',
        currency: '(566₺ / 21$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-white.html',
        sale: '-25%',
        category: 'футболки',
        image: './images/t-shirt-white.jpg',
        title: 'Футболка оверсайз ADAB, белая',
        price: '1 860₽',
        currency: '(566₺ / 21$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-black.html',
        sale: '-25%',
        category: 'футболки',
        image: './images/t-shirt-black.jpg',
        title: 'Футболка оверсайз ADAB, чёрная',
        price: '1 860₽',
        currency: '(566₺ / 21$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/sleeveless-natural.html',
        sale: '-25%',
        category: 'безрукавка',
        image: './images/sleeveless-natural.jpg',
        title: 'Мужской жилет из натурального каракуля',
        price: '37 372₽',
        currency: '(12 450₺ / 424$)',
        size: 'под заказ'
    },
    {
        url: './card-pages/sleeveless-eco.html',
        sale: '-25%',
        category: 'безрукавка',
        image: './images/sleeveless-eco.jpg',
        title: 'Мужской жилет из овчины под каракуль',
        price: '22 425₽',
        currency: '(7 492₺ / 255$)',
        size: 'под заказ'
    },
    {
        url: './card-pages/baseball-cap-black.html',
        sale: '-25%',
        category: 'головные уборы',
        image: './images/baseball-cap-black.jpg',
        title: 'Мужская бейсболка ADAB, чёрная',
        price: '817₽',
        currency: '(262₺ / 9$)',
        size: 'один размер'
    },
    {
        url: './card-pages/baseball-cap-white.html',
        sale: '-25%',
        category: 'головные уборы',
        image: './images/baseball-cap-white.jpg',
        title: 'Мужская бейсболка ADAB, белая',
        price: '817₽',
        currency: '(262₺ / 9$)',
        size: 'один размер'
    },
    {
        url: './card-pages/kids-uniform-black.html',
        sale: '-35%',
        category: 'детская одежда',
        image: './images/kids-uniform-black.jpg',
        title: 'Детская форма ADAB, чёрная',
        price: '3 220₽',
        currency: '(1 070₺ / 37$)',
        size: '104, 116, 128, 140, 152, 164, 176'
    },
    {
        url: './card-pages/kids-uniform-gray.html',
        sale: '-35%',
        category: 'детская одежда',
        image: './images/kids-uniform-gray.jpg',
        title: 'Детская форма ADAB, серая',
        price: '3 220₽',
        currency: '(1 070₺ / 37$)',
        size: '104, 116, 128, 140, 152, 164, 176'
    },
    {
        url: './card-pages/moccasins-black.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/moccasins-black.jpg',
        title: 'Кожаные мокасины ADAB, черные',
        price: '3 817₽',
        currency: '(1 275₺ / 43$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/moccasins-blue.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/moccasins-blue.jpg',
        title: 'Нубуковые мокасины ADAB, синие',
        price: '3 817₽',
        currency: '(1 275₺ / 43$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/low-shoes-black.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/low-shoes-black.jpg',
        title: 'Легкие полуботинки ADAB, черные',
        price: '3 052₽',
        currency: '(1 012₺ / 34$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/low-shoes-pearl.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/low-shoes-pearl.jpg',
        title: 'Легкие полуботинки ADAB, перламутровые',
        price: '3 052₽',
        currency: '(1 012₺ / 34$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-black.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/summer-sneakers-black.jpg',
        title: 'Кожаные летние кроссовки ADAB, черные',
        price: '3 510₽',
        currency: '(1 170₺ / 40$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-white.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/summer-sneakers-white.jpg',
        title: 'Кожаные летние кроссовки ADAB, белые',
        price: '3 510₽',
        currency: '(1 170₺ / 40$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-blue.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/summer-sneakers-blue.jpg',
        title: 'Нубуковые летние кроссовки ADAB, синие',
        price: '3 510₽',
        currency: '(1 170₺ / 40$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-beige.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/summer-sneakers-beige.jpg',
        title: 'Нубуковые летние кроссовки ADAB, бежевые',
        price: '3 510₽',
        currency: '(1 170₺ / 40$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-blue-nubuck.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/sandals-blue-nubuck.jpg',
        title: 'Нубуковые сандалии ADAB, синие',
        price: '3 510₽',
        currency: '(1 170₺ / 40$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-green.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/sandals-green.jpg',
        title: 'Нубуковые сандалии ADAB, зелёные',
        price: '3 510₽',
        currency: '(1 170₺ / 40$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-blue.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/sandals-blue.jpg',
        title: 'Кожанные сандалии ADAB, синие',
        price: '3 510₽',
        currency: '(1 170₺ / 40$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-beige.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/shoes-beige.jpg',
        title: 'Мужская обувь ADAB, бежевые',
        price: '4 537₽',
        currency: '(1 522₺ / 52$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-black-brown.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/shoes-black-brown.jpg',
        title: 'Мужская обувь ADAB, черно-коричневые',
        price: '4 537₽',
        currency: '(1 522₺ / 52$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-blue.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/shoes-blue.jpg',
        title: 'Мужская обувь ADAB, синяя',
        price: '4 537₽',
        currency: '(1 522₺ / 52$)',
        size: '40'
    },
    {
        url: './card-pages/shoes-black.html',
        sale: '-25%',
        category: 'обувь',
        image: './images/shoes-black.jpg',
        title: 'Мужская обувь ADAB, черная',
        price: '4 537₽',
        currency: '(1 522₺ / 52$)',
        size: '40, 41'
    },
];

export { products }; 
