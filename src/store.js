import {reactive} from 'vue';

export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    imagBasePath: 'http://127.0.0.1:8000/storage/',    
    cart: [],
    menuItems: [
        {
            label: 'Home',
            routeName: 'homepage'
        },
        {
            label: 'Ristoranti',
            routeName: 'restaurants'
        },
        {
            label: 'Chi Siamo',
            routeName: 'about'
        },
        
    ],

    homePaths: [
        {
            path: 'vicio.png',
            alt: 'vicio',
            info: 'vicio',
            id: 1,
        },
        {
            path: 'Sushi-Bar.png',
            alt: 'Sushi-Bar',
            info: 'Sushi-Bar',
            id: 2,
        },
        {
            path: 'starbucks.png',
            alt: 'starbucks',
            info: 'starbucks',
            id: 3,
        },
        {
            path: 'pizza-hut.png',
            alt: 'pizza-hut',
            info: 'pizza-hut',
            id: 4,
        },
        {
            path: 'pepsi.png',
            alt: 'pepsi',
            info: 'pepsi',
            id: 5,
        },
        {
            path: 'Old-Wild-West.png',
            alt: 'Old-Wild-West',
            info: 'Old-Wild-West',
            id: 6,
        },
        {
            path: 'Mc-Donald.png',
            alt: 'Mc-Donald',
            info: 'Mc-Donald',
            id: 7,
        },
        {
            path: 'La-tagliatella.png',
            alt: 'La-tagliatella',
            info: 'La-tagliatella',
            id: 8,
        },
        {
            path: 'kfc.png',
            alt: 'kfc',
            info: 'kfc',
            id: 9,
        },
        {
            path: 'kebab.png',
            alt: 'kebab',
            info: 'kebab',
            id: 10,
        },
        {
            path: 'honest-green.png',
            alt: 'honest-green',
            info: 'honest-green',
            id: 11,
        },
        {
            path: 'Goiko.png',
            alt: 'Goiko',
            info: 'Goiko',
            id: 12,
        },
        {
            path: 'Fanta.png',
            alt: 'Fanta',
            info: 'Fanta',
            id: 13,
        },
        {
            path: 'eatily.png',
            alt: 'eatily',
            info: 'eatily',
            id: 14,
        },
        {
            path: 'Burger-King.png',
            alt: 'Burger-King',
            info: 'Burger-King',
            id: 15,
        },
        {
            path: 'Coca-Cola.png',
            alt: 'Coca-Cola',
            info: 'Coca-Cola',
            id: 16,
        },
    ],

    footerItems:[
        {
            label: 'Ristoranti',
            routeName: 'restaurants',
            storeItem:[
                {

                    pagename: 'Pizzerie',
                    url:"#"
                },
                {
                    pagename: 'Cinese',
                    url:"#"
                },
                {
                    pagename: 'Steak-house',
                    url:"#"
                },
                {
                    pagename: 'Kebab',
                    url:"#"
                },
               

            ]
        },
        {
            label: 'Code_Eat',
            routeName: 'about',
            storeItem:[
                {

                    pagename: 'Contatti',
                    url:"#"
                },
                {
                    pagename: 'Diventa nostro partner',
                    url:"http://127.0.0.1:8000"
                },
                {
                    pagename: 'Lavora con noi',
                    url:"#"
                },
                {
                    pagename: 'Informativa sulla privacy',
                    url:"#"
                },
                {
                    pagename: 'Termini e Condizioni',
                    url:"#"
                }
            ]
        },

        {
            label: 'Social',
            routeName: '#',
            storeItem:[
                { pagename: 'Facebook', url: '#', icon: 'fa-facebook'},
                { pagename: 'Twitter', url: '#', icon: 'fa-twitter' },
                { pagename: 'Instagram', url: '#', icon: 'fa-instagram' },
                { pagename: 'Github', url: '#', icon: 'fa-github' },
                { pagename: 'Youtube', url: '#', icon: 'fa-youtube' }
            ]
        }         
    ],
    total_amount: '',
})