import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import Restaurants from './pages/Restaurants.vue';
import About from './pages/About.vue';
import Restaurant from './pages/Restaurant.vue';
import Plate from './pages/Plate.vue';
import Checkout from './pages/Checkout.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/restaurants',
            name: 'restaurants',
            component: Restaurants
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/restaurants/:slug',
            name: 'restaurant',
            component: Restaurant,
            props: true
        },
        {
            path: '/restaurant/:slug',
            name: 'plate',
            component: Plate
        },

        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout
        },

        {
            path: '/:catchAll(.*)',
            name: 'Error404',
            component: () => import('../src/components/Error404.vue')
        },



       
    ]
});

export { router };