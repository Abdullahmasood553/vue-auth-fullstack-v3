
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './routes'
import axios from 'axios'

const app = createApp(App)
app.use(store)


const store = createStore({
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
            state.user = data
        },
        SET_AUTHENTICATED(state, data){
            state.authenticated = data
        }
    },
    actions: {
        authUser ({ commit }) {
            let url = 'http://127.0.0.1:8000/api/login';
            return axios.post(url).then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data)
                localStorage.setItem("auth", true)
                
                if(router.currentRoute.name !== null){
                    router.push({ name: 'Home' })
                }

            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
                localStorage.removeItem("auth");

                if(router.currentRoute.name !== 'login'){
                    router.push({ name: 'Login' })
                }
            })
        },
    }
});

export default store;
