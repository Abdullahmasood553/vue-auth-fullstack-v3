import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'


const routes = [
    {
        name: 'Login',
        path: '/login',
        component: Login,
        meta: { guestOnly: true }
    },
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'Register',   
        path: '/register',
        component: Register
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;