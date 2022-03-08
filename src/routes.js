import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'


const routes = [
    {
        name: 'Login',
        path: '/',
        component: Login
    },
    {
        name: 'Home',
        path: '/home',
        component: Home
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