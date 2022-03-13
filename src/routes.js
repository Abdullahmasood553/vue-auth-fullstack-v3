import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

const routes = [
    {
        name: 'Login',
        path: '/login',
        component: Login,
        meta: {
            requiresVisitor: true,
        }
    },
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true,
        }
    },
    {
        name: 'Register',   
        path: '/register',
        component: Register,
        meta: {
            requiresVisitor: true,
        }
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;