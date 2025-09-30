const products = [
    {
        url: './card-pages/shirt-green.html',
        sale: '',
        category: 'gömlekler',
        image: '../images/shirt-green.jpg',
        title: 'ADAB erkek taktik gömlek, yeşil',
        price: '1 650₺',
        currency: '(56$ / 4 900₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-ramadi.html',
        sale: '',
        category: 'üniformalar',
        image: '../images/uniform-ramadi.jpg',
        title: 'ADAB erkek üniforma, Ramadi',
        price: '2 940₺',
        currency: '(100$ / 8 790₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-sharaf.html',
        sale: '',
        category: 'üniformalar',
        image: '../images/uniform-sharaf.jpg',
        title: 'ADAB erkek üniforma, Şaraf',
        price: '2 000₺',
        currency: '(65$ / 5 930₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-white-summer.html',
        sale: '-35%',
        category: 'üniformalar',
        image: '../images/uniform-white-summer.jpg',
        title: 'ADAB erkek yazlık üniforma, beyaz',
        price: '1 910₺',
        currency: '(65$ / 5 713₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-dark-blue.html',
        sale: '',
        category: 'üniformalar',
        image: '../images/uniform-dark-blue.jpg',
        title: 'ADAB erkek üniforma, lacivert',
        price: '2 940₺',
        currency: '(100$ / 8 790₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/uniform-black.html',
        sale: '',
        category: 'üniformalar',
        image: '../images/uniform-black.jpg',
        title: 'ADAB erkek üniforma, siyah',
        price: '2 940₺',
        currency: '(100$ / 8 790₽)',
        size: 'M, L, XL'
    },
    {
        url: './card-pages/uniform-white.html',
        sale: '-35%',
        category: 'üniformalar',
        image: '../images/uniform-white.jpg',
        title: 'ADAB erkek sonbahar üniforma, beyaz',
        price: '1 910₺',
        currency: '(65$ / 5 713₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/tactical-uniform-black.html',
        sale: '',
        category: 'üniformalar',
        image: '../images/tactical-uniform-black.jpg',
        title: 'ADAB erkek taktik üniforma, siyah',
        price: '2 940₺',
        currency: '(100$ / 8 790₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-blue.html',
        sale: '',
        category: 'kamisler',
        image: '../images/kamis-blue.jpg',
        title: 'ADAB kamis, yazlık mavi',
        price: '1 155₺',
        currency: '(43$ / 3 730₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-red.html',
        sale: '',
        category: 'kamisler',
        image: '../images/kamis-red.jpg',
        title: 'ADAB kamis, yazlık bordo',
        price: '1 155₺',
        currency: '(43$ / 3 730₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-white.html',
        sale: '',
        category: 'kamisler',
        image: '../images/kamis-white.jpg',
        title: 'ADAB kamis, yazlık beyaz',
        price: '1 155₺',
        currency: '(43$ / 3 730₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-black.html',
        sale: '',
        category: 'kamisler',
        image: '../images/kamis-black.jpg',
        title: 'ADAB kamis, yazlık siyah',
        price: '1 155₺',
        currency: '(43$ / 3 730₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/kamis-khaki.html',
        sale: '',
        category: 'kamisler',
        image: '../images/kamis-khaki.jpg',
        title: 'ADAB kamis, yazlık haki',
        price: '1 155₺',
        currency: '(43$ / 3 730₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-black.html',
        sale: '',
        category: 'pantolonlar',
        image: '../images/pants-summer-black.jpg',
        title: 'ADAB pantolon, yazlık siyah',
        price: '1 290₺',
        currency: '(44$ / 3 850₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-khaki.html',
        sale: '',
        category: 'pantolonlar',
        image: '../images/pants-summer-khaki.jpg',
        title: 'ADAB pantolon, yazlık haki',
        price: '1 290₺',
        currency: '(44$ / 3 850₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-blue.html',
        sale: '',
        category: 'pantolonlar',
        image: '../images/pants-summer-blue.jpg',
        title: 'ADAB pantolon, yazlık mavi',
        price: '1 290₺',
        currency: '(44$ / 3 850₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/pants-summer-beige.html',
        sale: '',
        category: 'pantolonlar',
        image: '../images/pants-summer-beige.jpg',
        title: 'ADAB pantolon, yazlık bej',
        price: '1 290₺',
        currency: '(44$ / 3 850₽)',
        size: 'S, M, L, XL, XXL'
    },
    {
        url: './card-pages/t-shirt-blue-classic.html',
        sale: '-30% + HEDİYE',
        category: 'tişörtler',
        image: '../images/t-shirt-blue-classic.jpg',
        title: 'ADAB klasik tişört, mavi',
        price: '599₺',
        currency: '(23$ / 1 925₽)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-red.html',
        sale: '',
        category: 'tişörtler',
        image: '../images/t-shirt-red.jpg',
        title: 'ADAB oversize tişört, bordo',
        price: '755₺',
        currency: '(28$ / 2 480₽)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-blue.html',
        sale: '',
        category: 'tişörtler',
        image: '../images/t-shirt-blue.jpg',
        title: 'ADAB oversize tişört, mavi',
        price: '755₺',
        currency: '(28$ / 2 480₽)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-beige.html',
        sale: '',
        category: 'tişörtler',
        image: '../images/t-shirt-beige.jpg',
        title: 'ADAB oversize tişört, bej',
        price: '755₺',
        currency: '(28$ / 2 480₽)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-white.html',
        sale: '',
        category: 'tişörtler',
        image: '../images/t-shirt-white.jpg',
        title: 'ADAB oversize tişört, beyaz',
        price: '755₺',
        currency: '(28$ / 2 480₽)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/t-shirt-black.html',
        sale: '',
        category: 'tişörtler',
        image: '../images/t-shirt-black.jpg',
        title: 'ADAB oversize tişört, siyah',
        price: '755₺',
        currency: '(28$ / 2 480₽)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/sleeveless-natural.html',
        sale: '-20%',
        category: 'yelekler',
        image: '../images/sleeveless-natural.jpg',
        title: 'Erkek yelek, doğal karakul',
        price: '13 280₺',
        currency: '(452$ / 39 860₽)',
        size: 'özel sipariş'
    },
    {
        url: './card-pages/sleeveless-eco.html',
        sale: '-20%',
        category: 'yelekler',
        image: '../images/sleeveless-eco.jpg',
        title: 'Erkek yelek, karakul görünümlü koyun postu',
        price: '7 990₺',
        currency: '(272$ / 23 920₽)',
        size: 'özel sipariş'
    },
    {
        url: './card-pages/baseball-cap-black.html',
        sale: '1+1=3',
        category: 'şapkalar',
        image: '../images/baseball-cap-black.jpg',
        title: 'ADAB erkek beyzbol kepi, siyah',
        price: '350₺',
        currency: '(12$ / 1 090₽)',
        size: 'tek beden'
    },
    {
        url: './card-pages/baseball-cap-white.html',
        sale: '1+1=3',
        category: 'şapkalar',
        image: '../images/baseball-cap-white.jpg',
        title: 'ADAB erkek beyzbol kepi, beyaz',
        price: '350₺',
        currency: '(12$ / 1 090₽)',
        size: 'tek beden'
    },
    {
        url: './card-pages/kids-uniform-black.html',
        sale: '-35%',
        category: 'çocuk giyim',
        image: '../images/kids-uniform-black.jpg',
        title: 'ADAB çocuk üniforma, siyah',
        price: '1 070₺',
        currency: '(37$ / 3 220₽)',
        size: '104, 116, 128, 140, 152, 164, 176'
    },
    {
        url: './card-pages/kids-uniform-gray.html',
        sale: '-35%',
        category: 'çocuk giyim',
        image: '../images/kids-uniform-gray.jpg',
        title: 'ADAB çocuk üniforma, gri',
        price: '1 070₺',
        currency: '(37$ / 3 220₽)',
        size: '104, 116, 128, 140, 152, 164, 176'
    },
    {
        url: './card-pages/moccasins-black.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/moccasins-black.jpg',
        title: 'ADAB deri mokasen, siyah',
        price: '1 700₺',
        currency: '(58$ / 5 090₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/moccasins-blue.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/moccasins-blue.jpg',
        title: 'ADAB nubuk mokasen, mavi',
        price: '1 700₺',
        currency: '(58$ / 5 090₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/low-shoes-black.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/low-shoes-black.jpg',
        title: 'ADAB hafif yarım bot, siyah',
        price: '1 350₺',
        currency: '(46$ / 4 070₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/low-shoes-pearl.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/low-shoes-pearl.jpg',
        title: 'ADAB hafif yarım bot, inci',
        price: '1 350₺',
        currency: '(46$ / 4 070₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-black.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/summer-sneakers-black.jpg',
        title: 'ADAB deri yazlık spor ayakkabı, siyah',
        price: '1 560₺',
        currency: '(53$ / 4 680₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-white.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/summer-sneakers-white.jpg',
        title: 'ADAB deri yazlık spor ayakkabı, beyaz',
        price: '1 560₺',
        currency: '(53$ / 4 680₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-blue.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/summer-sneakers-blue.jpg',
        title: 'ADAB nubuk yazlık spor ayakkabı, mavi',
        price: '1 560₺',
        currency: '(53$ / 4 680₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/summer-sneakers-beige.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/summer-sneakers-beige.jpg',
        title: 'ADAB nubuk yazlık spor ayakkabı, bej',
        price: '1 560₺',
        currency: '(53$ / 4 680₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-blue-nubuck.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/sandals-blue-nubuck.jpg',
        title: 'ADAB nubuk sandalet, mavi',
        price: '1 560₺',
        currency: '(53$ / 4 680₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-green.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/sandals-green.jpg',
        title: 'ADAB nubuk sandalet, yeşil',
        price: '1 560₺',
        currency: '(53$ / 4 680₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/sandals-blue.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/sandals-blue.jpg',
        title: 'ADAB deri sandalet, mavi',
        price: '1 560₺',
        currency: '(53$ / 4 680₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-beige.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/shoes-beige.jpg',
        title: 'ADAB erkek ayakkabı, bej',
        price: '2 030₺',
        currency: '(69$ / 6 050₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-black-brown.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/shoes-black-brown.jpg',
        title: 'ADAB erkek ayakkabı, siyah-kahverengi',
        price: '2 030₺',
        currency: '(69$ / 6 050₽)',
        size: '40, 41, 42, 43, 44, 45'
    },
    {
        url: './card-pages/shoes-blue.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/shoes-blue.jpg',
        title: 'ADAB erkek ayakkabı, mavi',
        price: '2 030₺',
        currency: '(69$ / 6 050₽)',
        size: '40'
    },
    {
        url: './card-pages/shoes-black.html',
        sale: '',
        category: 'ayakkabı',
        image: '../images/shoes-black.jpg',
        title: 'ADAB erkek ayakkabı, siyah',
        price: '2 030₺',
        currency: '(69$ / 6 050₽)',
        size: '40, 41'
    },
    {
        url: './card-pages/swim-shorts-black.html',
        sale: '',
        category: 'yüzme şortları',
        image: '../images/img11.jpg',
        title: 'ADAB yüzme şortu, siyah',
        price: '1 200₺',
        currency: '(35$ / 2 800₽)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/swim-shorts-blue.html',
        sale: '',
        category: 'yüzme şortları',
        image: '../images/swim-shorts-blue.jpg',
        title: 'ADAB yüzme şortu, mavi',
        price: '1 200₺',
        currency: '(35$ / 2 800₽)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/swim-shorts-lightblue.html',
        sale: '',
        category: 'yüzme şortları',
        image: '../images/swim-shorts-lightblue.jpg',
        title: 'ADAB yüzme şortu, açık mavi',
        price: '1 200₺',
        currency: '(35$ / 2 800₽)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/swim-shorts-khaki.html',
        sale: '',
        category: 'yüzme şortları',
        image: '../images/swim-shorts-khaki.jpg',
        title: 'ADAB yüzme şortu, haki',
        price: '1 200₺',
        currency: '(35$ / 2 800₽)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/swim-shorts-grey.html',
        sale: '',
        category: 'yüzme şortları',
        image: '../images/swim-shorts-grey.jpg',
        title: 'ADAB yüzme şortu, gri',
        price: '1 200₺',
        currency: '(35$ / 2 800₽)',
        size: 'S, M, L, XL'
    },
    {
        url: './card-pages/wallet-ginger.html',
        sale: '',
        category: 'aksesuarlar',
        image: '../images/wallet-ginger.jpg',
        title: 'ADAB cüzdan, tarçın',
        price: '500₺',
        currency: '(15$ / 1 200₽)',
        size: 'tek beden'
    },
    {
        url: './card-pages/wallet-black.html',
        sale: '',
        category: 'aksesuarlar',
        image: '../images/wallet-black.jpg',
        title: 'ADAB cüzdan, siyah',
        price: '500₺',
        currency: '(15$ / 1 200₽)',
        size: 'tek beden'
    },
    {
        url: './card-pages/wallet-olive.html',
        sale: '',
        category: 'aksesuarlar',
        image: '../images/wallet-olive.jpg',
        title: 'ADAB cüzdan, zeytin',
        price: '500₺',
        currency: '(15$ / 1 200₽)',
        size: 'tek beden'
    },
    {
        url: './card-pages/wallet-blue.html',
        sale: '',
        category: 'aksesuarlar',
        image: '../images/wallet-blue.jpg',
        title: 'ADAB cüzdan, lacivert',
        price: '500₺',
        currency: '(15$ / 1 200₽)',
        size: 'tek beden'
    },
];

export { products };
