import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

function isLoggedIn() {
    if(localStorage.getItem('usertoken')) {
        return true;
    } else {
        return false;
    }
}

// const isLoggedIn = false;

const routes = [
    {
        name: 'Login',
        path: '/login',
        component: Login,
    },
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: { requiresAuth: true }
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

// router.beforeEach((to, from , next) => {
//     if(to.meta.requiresAuth) {
//         if(isLoggedIn) {
//             next('');
//             console.log('Next');
//         } else{
//             next();
//             console.log('login');
//         }
//     } else {
//         next();
//     }
// });


router.beforeEach((to, from, next) => {
   
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    console.log(requiresAuth);
    // Check for protected route
    if (requiresAuth && !isLoggedIn) next('login')
    else next();
});



export default router;