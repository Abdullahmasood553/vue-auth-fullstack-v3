<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="saveContact">
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Enter Name</label>
                            <input type="text" class="form-control" v-model="user.name" placeholder="Enter name">
                        </div>

                        <div class="form-group">
                            <label class="form-label mt-4">Enter Email</label>
                            <input type="email" class="form-control" v-model="user.email" placeholder="Enter email">
                        </div>

                        <div class="form-group">
                            <label class="form-label mt-4">Enter Password</label>
                            <input type="password" v-model="user.password" class="form-control"
                                placeholder="Enter Password">
                        </div>

                        <div class="form-group">
                            <label class="form-label mt-4">Enter Password</label>
                            <input type="password" v-model="user.password_confirmation" class="form-control"
                                placeholder="Enter Confirm Password">
                        </div>

                        <button class="btn btn-primary mt-4">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
// import router from '../routes'
    export default {
        name: 'Register',
        data() {
            return {
                user: {},
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        },
        created() {

        },
        methods: {
            async saveContact() {
                    let formData = new FormData();
                    formData.append('name', this.user.name);
                    formData.append('email', this.user.email);
                    formData.append('password', this.user.password);
                    formData.append('password_confirmation', this.user.password_confirmation);
                    let url = 'http://127.0.0.1:8000/api/register';
                    await axios.post(url, formData).then((response) => {
                        console.log(response);
                        if (response.status == 200) {
                            this.user.name = '';
                            this.user.email = '';
                            this.user.password = '';
                            this.user.password_confirmation = '';
                        
                            //  router.push('/login');
                        } else {
                            console.log('Error');
                            alert('Error');
                        }
                    }).catch(error => {
                        this.errors.push(error.response);
                    });
            }
        }
    }
</script>