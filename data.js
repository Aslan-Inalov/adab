const products = [
    {
        url: './card-pages/shirt-green.html',
        sale: '',
        category: 'рубашки',
        image: './images/shirt-green.jpg',
        title: 'Мужская тактическая рубаха ADAB, зелёная',
        price: '4 900₽',
        currency: '(1 650₺ / 56$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-ramadi.html',
        sale: '',
        category: 'формы',
        image: './images/uniform-ramadi.jpg',
        title: 'Мужской костюм Рамадий',
        price: '8 790₽',
        currency: '(2 940₺ / 100$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-sharaf.html',
        sale: '',
        category: 'формы',
        image: './images/uniform-sharaf.jpg',
        title: 'Мужской костюм Шараф',
        price: '5 930₽',
        currency: '(2 000₺ / 65$)',
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
        sale: '',
        category: 'формы',
        image: './images/uniform-dark-blue.jpg',
        title: 'Мужская форма ADAB, темно-синяя',
        price: '8 790₽',
        currency: '(2 940₺ / 100$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-black.html',
        sale: '',
        category: 'формы',
        image: './images/uniform-black.jpg',
        title: 'Мужская форма ADAB, чёрная',
        price: '8 790₽',
        currency: '(2 940₺ / 100$)',
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
        category: 'формы',
        image: './images/tactical-uniform-black.jpg',
        title: 'Мужская тактическая форма ADAB, чёрная',
        price: '8 790₽',
        currency: '(2 940₺ / 100$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-blue.html',
        sale: '',
        category: 'камисы',
        image: './images/kamis-blue.jpg',
        title: 'Камис ADAB, лето синий',
        price: '3 730₽',
        currency: '(1 155₺ / 43$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-red.html',
        sale: '',
        category: 'камисы',
        image: './images/kamis-red.jpg',
        title: 'Камис ADAB, лето бордовый',
        price: '3 730₽',
        currency: '(1 155₺ / 43$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-white.html',
        sale: '',
        category: 'камисы',
        image: './images/kamis-white.jpg',
        title: 'Камис ADAB, лето белый',
        price: '3 730₽',
        currency: '(1 155₺ / 43$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-black.html',
        sale: '',
        category: 'камисы',
        image: './images/kamis-black.jpg',
        title: 'Камис ADAB, лето чёрный',
        price: '3 730₽',
        currency: '(1 155₺ / 43$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-khaki.html',
        sale: '',
        category: 'камисы',
        image: './images/kamis-khaki.jpg',
        title: 'Камис ADAB, лето хаки',
        price: '3 730₽',
        currency: '(1 155₺ / 43$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-black.html',
        sale: '',
        category: 'штаны',
        image: './images/pants-summer-black.jpg',
        title: 'Штаны ADAB, лето чёрные',
        price: '3 850₽',
        currency: '(1 290₺ / 44$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-khaki.html',
        sale: '',
        category: 'штаны',
        image: './images/pants-summer-khaki.jpg',
        title: 'Штаны ADAB, лето хаки',
        price: '3 850₽',
        currency: '(1 290₺ / 44$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-blue.html',
        sale: '',
        category: 'штаны',
        image: './images/pants-summer-blue.jpg',
        title: 'Штаны ADAB, лето синие',
        price: '3 850₽',
        currency: '(1 290₺ / 44$)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-beige.html',
        sale: '',
        category: 'штаны',
        image: './images/pants-summer-beige.jpg',
        title: 'Штаны ADAB, лето бежевые',
        price: '3 850₽',
        currency: '(1 290₺ / 44$)',
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
        // sale: '-20%',
        category: 'футболки',
        image: './images/t-shirt-red.jpg',
        title: 'Футболка оверсайз ADAB, бордовая',
        price: '2 480₽',
        currency: '(755₺ / 28$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-blue.html',
        // sale: '-20%',
        category: 'футболки',
        image: './images/t-shirt-blue.jpg',
        title: 'Футболка оверсайз ADAB, синяя',
        price: '2 480₽',
        currency: '(755₺ / 28$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-beige.html',
        // sale: '-20%',
        category: 'футболки',
        image: './images/t-shirt-beige.jpg',
        title: 'Футболка оверсайз ADAB, бежевая',
        price: '2 480₽',
        currency: '(755₺ / 28$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-white.html',
        category: 'футболки',
        image: './images/t-shirt-white.jpg',
        title: 'Футболка оверсайз ADAB, белая',
        price: '2 480₽',
        currency: '(755₺ / 28$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-black.html',
        category: 'футболки',
        image: './images/t-shirt-black.jpg',
        title: 'Футболка оверсайз ADAB, чёрная',
        price: '2 480₽',
        currency: '(755₺ / 28$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/sleeveless-natural.html',
        sale: '-20%',
        category: 'безрукавка',
        image: './images/sleeveless-natural.jpg',
        title: 'Мужской жилет из натурального каракуля',
        price: '39 860₽',
        currency: '(13 280₺ / 452$)',
        size: 'под заказ'
    },
    {
        url: './card-pages/sleeveless-eco.html',
        sale: '-20%',
        category: 'безрукавка',
        image: './images/sleeveless-eco.jpg',
        title: 'Мужской жилет из овчины под каракуль',
        price: '23 920₽',
        currency: '(7 990₺ / 272$)',
        size: 'под заказ'
    },
    {
        url: './card-pages/baseball-cap-black.html',
        sale: '1+1=3',
        category: 'головные уборы',
        image: './images/baseball-cap-black.jpg',
        title: 'Мужская бейсболка ADAB, чёрная',
        price: '1 090₽',
        currency: '(350₺ / 12$)',
        size: 'один размер'
    },
    {
        url: './card-pages/baseball-cap-white.html',
        sale: '1+1=3',
        category: 'головные уборы',
        image: './images/baseball-cap-white.jpg',
        title: 'Мужская бейсболка ADAB, белая',
        price: '1 090₽',
        currency: '(350₺ / 12$)',
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
        category: 'обувь',
        image: './images/moccasins-black.jpg',
        title: 'Кожаные мокасины ADAB, чёрные',
        price: '5 090₽',
        currency: '(1 700₺ / 58$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/moccasins-blue.html',
        category: 'обувь',
        image: './images/moccasins-blue.jpg',
        title: 'Нубуковые мокасины ADAB, синие',
        price: '5 090₽',
        currency: '(1 700₺ / 58$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/low-shoes-black.html',
        category: 'обувь',
        image: './images/low-shoes-black.jpg',
        title: 'Легкие полуботинки ADAB, чёрные',
        price: '4 070₽',
        currency: '(1 350₺ / 46$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/low-shoes-pearl.html',
        category: 'обувь',
        image: './images/low-shoes-pearl.jpg',
        title: 'Легкие полуботинки ADAB, перламутровые',
        price: '4 070₽',
        currency: '(1 350₺ / 46$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-black.html',
        category: 'обувь',
        image: './images/summer-sneakers-black.jpg',
        title: 'Кожаные летние кроссовки ADAB, чёрные',
        price: '4 680₽',
        currency: '(1 560₺ / 53$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-white.html',
        category: 'обувь',
        image: './images/summer-sneakers-white.jpg',
        title: 'Кожаные летние кроссовки ADAB, белые',
        price: '4 680₽',
        currency: '(1 560₺ / 53$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-blue.html',
        category: 'обувь',
        image: './images/summer-sneakers-blue.jpg',
        title: 'Нубуковые летние кроссовки ADAB, синие',
        price: '4 680₽',
        currency: '(1 560₺ / 53$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-beige.html',
        category: 'обувь',
        image: './images/summer-sneakers-beige.jpg',
        title: 'Нубуковые летние кроссовки ADAB, бежевые',
        price: '4 680₽',
        currency: '(1 560₺ / 53$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-blue-nubuck.html',
        category: 'обувь',
        image: './images/sandals-blue-nubuck.jpg',
        title: 'Нубуковые сандалии ADAB, синие',
        price: '4 680₽',
        currency: '(1 560₺ / 53$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-green.html',
        category: 'обувь',
        image: './images/sandals-green.jpg',
        title: 'Нубуковые сандалии ADAB, зелёные',
        price: '4 680₽',
        currency: '(1 560₺ / 53$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-blue.html',
        category: 'обувь',
        image: './images/sandals-blue.jpg',
        title: 'Кожанные сандалии ADAB, синие',
        price: '4 680₽',
        currency: '(1 560₺ / 53$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-beige.html',
        category: 'обувь',
        image: './images/shoes-beige.jpg',
        title: 'Мужская обувь ADAB, бежевые',
        price: '6 050₽',
        currency: '(2 030₺ / 69$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-black-brown.html',
        category: 'обувь',
        image: './images/shoes-black-brown.jpg',
        title: 'Мужская обувь ADAB, чёрно-коричневые',
        price: '6 050₽',
        currency: '(2 030₺ / 69$)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-blue.html',
        category: 'обувь',
        image: './images/shoes-blue.jpg',
        title: 'Мужская обувь ADAB, синяя',
        price: '6 050₽',
        currency: '(2 030₺ / 69$)',
        size: '40'
    },
    {
        url: './card-pages/shoes-black.html',
        category: 'обувь',
        image: './images/shoes-black.jpg',
        title: 'Мужская обувь ADAB, чёрная',
        price: '6 050₽',
        currency: '(2 030₺ / 69$)',
        size: '40, 41'
    },
    {
        url: './card-pages/swim-shorts-black.html',
        sale: '',
        category: 'шорты для плавания',
        image: './images/img11.jpg',
        title: 'Шорты для плавания ADAB, чёрные',
        price: '2 800₽',
        currency: '(1 200₺ / 35$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/swim-shorts-blue.html',
        sale: '',
        category: 'шорты для плавания',
        image: './images/swim-shorts-blue.jpg',
        title: 'Шорты для плавания ADAB, синие',
        price: '2 800₽',
        currency: '(1 200₺ / 35$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/swim-shorts-lightblue.html',
        sale: '',
        category: 'шорты для плавания',
        image: './images/swim-shorts-lightblue.jpg',
        title: 'Шорты для плавания ADAB, голубые',
        price: '2 800₽',
        currency: '(1 200₺ / 35$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/swim-shorts-khaki.html',
        sale: '',
        category: 'шорты для плавания',
        image: './images/swim-shorts-khaki.jpg',
        title: 'Шорты для плавания ADAB, хаки',
        price: '2 800₽',
        currency: '(1 200₺ / 35$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/swim-shorts-grey.html',
        sale: '',
        category: 'шорты для плавания',
        image: './images/swim-shorts-grey.jpg',
        title: 'Шорты для плавания ADAB, серые',
        price: '2 800₽',
        currency: '(1 200₺ / 35$)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/wallet-ginger.html',
        sale: '',
        category: 'аксессуары',
        image: './images/wallet-ginger.jpg',
        title: 'Кошелёк ADAB, рыжий',
        price: '1 200₽',
        currency: '(500₺ / 15$)',
        size: 'один размер'
    },
    {
        url: './card-pages/wallet-black.html',
        sale: '',
        category: 'аксессуары',
        image: './images/wallet-black.jpg',
        title: 'Кошелёк ADAB, чёрный',
        price: '1 200₽',
        currency: '(500₺ / 15$)',
        size: 'один размер'
    },
    {
        url: './card-pages/wallet-olive.html',
        sale: '',
        category: 'аксессуары',
        image: './images/wallet-olive.jpg',
        title: 'Кошелёк ADAB, оливковый',
        price: '1 200₽',
        currency: '(500₺ / 15$)',
        size: 'один размер'
    },
    {
        url: './card-pages/wallet-blue.html',
        sale: '',
        category: 'аксессуары',
        image: './images/wallet-blue.jpg',
        title: 'Кошелёк ADAB, тёмно-синий',
        price: '1 200₽',
        currency: '(500₺ / 15$)',
        size: 'один размер'
    },
];

export { products }; 
