import {reactive} from 'vue';

export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    imagBasePath: 'http://127.0.0.1:8000/storage/',
    

    menuItems: [
        {
            label: 'Home',
            routeName: 'homepage'
        },
        {
            label: 'Restaurants',
            routeName: 'restaurants'
        },
        {
            label: 'About',
            routeName: 'about'
        },
        
    ],

    footerItems:[
        {
            label: 'Store',
            routeName: 'store',
            storeItem:[
                {

                    pagename: 'Nails',
                    url:"#"
                },
                {
                    pagename: 'Creams',
                    url:"#"
                },
                {
                    pagename: 'Face',
                    url:"#"
                },
                {
                    pagename: 'Body',
                    url:"#"
                },
                {
                    pagename: 'Hair',
                    url:"#"
                },
                {
                    pagename: 'Wellness',
                    url:"#"
                }

            ]
        },
        {
            label: 'About',
            routeName: 'about',
            storeItem:[
                {

                    pagename: 'Who',
                    url:"#"
                },
                {
                    pagename: 'Where',
                    url:"#"
                },
                {
                    pagename: 'When',
                    url:"#"
                },
                {
                    pagename: 'How',
                    url:"#"
                },
                {
                    pagename: 'Why',
                    url:"#"
                }
            ]
        },
        {
            label: 'Contacts',
            routeName: 'contacts',
            storeItem:[
                {

                    pagename: 'Contrada Fiorentino, 28, Appartamento 53',
                    url:"#"
                },
                {
                    pagename: 'Genova',
                    url:"#"
                },
                {
                    pagename: '79547',
                    url:"#"
                },
                {
                    pagename: '+20 67 7212625',
                    url:"#"
                },
                {
                    pagename: 'make-up@make_up.up',
                    url:"#"
                },
            ]
        },
    ],





})