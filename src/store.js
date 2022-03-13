// import Vue from 'vue'
// import Vuex from 'vuex'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import router from './routes'
import axios from 'axios'
import App from './App.vue'

const app = createApp(App)
app.use(store)


const store = createStore({
    state: {
        message: 'Welcome, Beautiful People!',
        user: {},
        authenticated: false,
    },
    getters: {
        getMessage(state) {
            return state.message
        },
        getUser(state){
            return state.user
        },
        getAuthenticated(state){
            return state.authenticated
        }
    },
    mutations: {
        SET_USER(state, data){
            state.user = data;
        },
        SET_AUTHENTICATED(state, data){
            state.authenticated = data
        }
    },
    actions: {
        authUser ({ commit }) {
            return axios.get('/api/user').then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data)
                localStorage.setItem("auth", true)
                
                if(router.currentRoute.name !== null){
                    router.push({ name: 'dashboard' })
                }

            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
                localStorage.removeItem("auth")

                if(router.currentRoute.name !== 'login'){
                    router.push({ name: 'login' })
                }
            })
        },
    }
});

export default store;
