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
            label: 'Restaurants',
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
         
    ],

  
    socialLinks: [
        { name: 'Facebook', url: '#', icon: 'fa-facebook'},
        { name: 'Twitter', url: '#', icon: 'fa-twitter' },
        { name: 'Instagram', url: '#', icon: 'fa-instagram' },
        { name: 'Github', url: '#', icon: 'fa-github' },
        { name: 'Youtube', url: '#', icon: 'fa-youtube' }
        ],

})