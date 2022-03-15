import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import utils from './utilities'


//sweet alert 2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';





// createApp(App).use(router).mount('#app')


function isLoggedIn() {
    return store.getters.getAuthenticated;
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isLoggedIn()) {
            next({
                name: 'Login',
            })
        } else {
            next()
        }
    }else if (to.matched.some(record => record.meta.requiresVisitor)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (isLoggedIn()) {
            next({
                name: 'Home',
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

// check authentication
let auth = localStorage.getItem("auth");

if(auth) {
    store.dispatch('authUser').then(() => {
        const app = createApp(App);
        app.use(router);
        app.use(store);
        app.use(VueSweetalert2);
        app.prototype.$utils = utils
        app.mount('#app');
    });
} else {
    const app = createApp(App);
    app.use(router);
    app.use(store);
    app.mount('#app');
}
