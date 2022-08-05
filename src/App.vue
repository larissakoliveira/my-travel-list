<template>

  <router-link class="my-list" to="/my-list">My List</router-link>
  <router-link class="home" to="/">Home</router-link>
    <HomeView title='TRAVELIST'/>
</template>
<router-view />
<script setup>
import HomeView from './views/HomeView.vue'
</script>

<style scope>
.my-list, .home {
  color: aliceblue;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.home {
  margin-left: 20px;
}

</style>
