import { createWebHistory, createRouter } from "vue-router";

//import Router from 'vue-router';
import Connection from '@/components/Connexion.vue';
import Cart from '@/components/Cart.vue';
import Shop from '@/components/Shop.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Connection',
            component: Connection
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shop
        }
    ]
});

export default router;
