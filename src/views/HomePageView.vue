<template>
  <div class="container">
    <header class="header">
      <h1 class='title'> {{ props.title }}</h1>
    <router-link class="my-list" to="/my-list">My List</router-link>
  </header>
    <!-- <SearchCountry/> -->
    <CardCountry/>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import CardCountry from '@/components/CardCountry.vue'
// import SearchCountry from '../components/SearchCountry.vue'

const props = defineProps({
  title: String
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  display: flex;
  flex-direction: column;
}
.header {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.title {
  color: rgb(205, 46, 46);
}

.my-list {
  color: aliceblue;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
