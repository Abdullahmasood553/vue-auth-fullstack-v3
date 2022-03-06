<template>
    <Header title="ABNATION" />
    <router-view></router-view>
</template>

<script>
  import Header from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Header
  } 
}
</script>


