<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="saveContact">
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Enter Name</label>
                            <input type="text" class="form-control" v-model="contact.name" placeholder="Enter name">
                        </div>

                        <div class="form-group">
                            <label class="form-label mt-4">Enter Email</label>
                            <input type="email" class="form-control" v-model="contact.email" placeholder="Enter email">
                        </div>

                        <div class="form-group">
                            <label class="form-label mt-4">Enter Password</label>
                            <input type="password" v-model="contact.password" class="form-control"
                                placeholder="Enter Password">
                        </div>

                        <div class="form-group">
                            <label class="form-label mt-4">Enter Password</label>
                            <input type="password" v-model="contact.password_confirmation" class="form-control"
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
                contact: {},
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
                    formData.append('name', this.contact.name);
                    formData.append('email', this.contact.email);
                    formData.append('password', this.contact.password);
                    formData.append('password_confirmation', this.contact.password_confirmation);
                    let url = 'http://127.0.0.1:3000/api/register';
                    await axios.post(url, formData).then((response) => {
                        console.log(response);
                        if (response.status == 200) {
                            this.contact.name = '';
                            this.contact.email = '';
                            this.contact.password = '';
                            this.contact.password_confirmation = '';
                        
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