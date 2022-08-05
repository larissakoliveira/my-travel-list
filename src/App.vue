<template>
  <router-link class="my-list" to="/my-list">My List - {{numberOfCountriesInTheList}}</router-link>
  <router-link class="home" to="/">Home</router-link>
   <router-link class="register" to="/register">Register</router-link>
    <router-link class="login" to="/login">Login</router-link>
<router-view />
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const numberOfCountriesInTheList = computed(() => store.getters.numberOfCountriesInTheList)
</script>

<style scope>
.my-list, .home, .register, .login {
  color: aliceblue;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
    margin-left: 20px;
}

</style>
