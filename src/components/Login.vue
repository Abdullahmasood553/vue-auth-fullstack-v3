<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <form >
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Enter Email</label>
                            <input type="email" class="form-control" v-model="user.email" placeholder="Enter email">
                        </div>

                        <div class="form-group">
                            <label class="form-label mt-4">Enter Password</label>
                            <input type="password" v-model="user.password"  class="form-control"
                                placeholder="Enter Password">
                        </div>

                        <button class="btn btn-primary mt-4" @click.prevent="login">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import router from '../routes'
    export default {
        name: 'Login',
        data() {
            return {
                user: {},
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                alert('Clicked');
                axios.post('http://127.0.0.1:8000/api/login').then(response => {
                      if (response.status == 200) { 
                        localStorage.setItem('usertoken', response.data.token)
                        this.email = ''
                        this.password = ''
                        router.push({name: 'Home'})
                            }
                        }).catch(error => {
                            console.log(error);
                        });
            }
        }
    }
</script>