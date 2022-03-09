<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{{ title }}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> -->
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Name
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item"  href="javascript:void(0)" @click="logout">Logout</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>
</template>


<script>
   import axios from 'axios'
  import router from '../routes'
export default {
    name: 'Header',
    props: {
        title: String
    },
    methods: {
      async logout() {  
          const token =  localStorage.getItem('usertoken');
                const config = {
              headers: { 
                Authorization: `Bearer ${token}`, Accept: 'application/json', 'Content-Type': 'application/json' 
                }
          };

         const bodyParameters = {
          key: "value"
        };

          let url = 'http://127.0.0.1:8000/api/logout';
          await axios.post(url, bodyParameters, config).then((response) => {
              console.log(response);
            if(response.status) {
               localStorage.removeItem('usertoken');
            } else if(response.message == 401) {
              console.log('error');
            }
          router.push("/login");
        }).catch(error => {
          console.log(error);
        });
      }
    }
}
</script>