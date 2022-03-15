<template>
    <div class="container">
        <div class="py-5">
            <div class="row">
                <div class="col-6 offset-3">
                    <div class="card card-default">
                        <div class="card-header">
                            Register
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="saveContact">

                                <div class="alert alert-danger" v-if="errors.length">
                                    <ul class="mb-0">
                                        <li v-for="(error, index) in errors" :key="index">
                                            {{ error }}
                                        </li>
                                    </ul>
                                </div>

                                <div class="form-group">
                                    <label class="form-label mt-4">Enter Name</label>
                                    <input type="text" class="form-control" v-model="user.name"
                                        placeholder="Enter name">
                                </div>

                                <div class="form-group">
                                    <label class="form-label mt-4">Enter Email</label>
                                    <input type="email" class="form-control" v-model="user.email"
                                        placeholder="Enter email">
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

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    import router from '../routes'
      import Swal from 'sweetalert2'
    export default {
        name: 'Register',
        data() {
            return {
                user: {},
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                errors: []
            }
        },
        created() {

        },
        methods: {
            async saveContact() {
                this.errors = [];
                
                if (!this.name) {
                    this.errors.push('Name is required');
                }
                if (!this.email) {
                    this.errors.push('Email is required');
                }
                if (!this.password) {
                    this.errors.push('Password is required');
                }
                if (!this.password_confirmation) {
                    this.errors.push('Confirm Password is required');
                }
                if (this.password !== this.password_confirmation) {
                    this.errors.push('Password do not match');
                }

                if (!this.errors.length) {
                    let formData = new FormData();
                    formData.append('name', this.user.name);
                    formData.append('email', this.user.email);
                    formData.append('password', this.user.password);
                    formData.append('password_confirmation', this.user.password_confirmation);
                    let url = 'http://127.0.0.1:8000/api/register';
                    await axios.post(url, formData).then((response) => {
                        console.log(response);
                        if (response.data.status == 200) {
                              Swal.fire({
                            icon: 'success',
                            title: 'Success...',
                            text: response.data.message,
                        })
                            this.user.name = '';
                            this.user.email = '';
                            this.user.password = '';
                            this.user.password_confirmation = '';
                            alert(response.data.message);
                            router.push('/login');
                        } else {
                            console.log('Error');
                              Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: response.data.message,
                        })
                        }
                    }).catch(error => {
                        this.errors.push(error.response);
                    });
                }
            }
        }
    }
</script>