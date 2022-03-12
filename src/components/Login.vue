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
                            <input type="password" v-model="user.password" class="form-control"
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
            async login() {
                    let formData = new FormData();
                    formData.append('email', this.user.email);
                    formData.append('password', this.user.password);
                    let url = 'http://127.0.0.1:8000/api/login';
                    await axios.post(url, formData).then(response => {
                    console.log(response);
                    if (response.data.status == 200) { 
                        // this.$toasted.show('hello billo')
                    localStorage.setItem('usertoken', response.data.token);
                    router.push({name:'Home'})
                    this.email = ''
                    this.password = ''
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }
}
</script>