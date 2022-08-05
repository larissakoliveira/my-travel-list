<template>
  <div class="container">
    <header class="header">
      <h1 class='title'>TRAVELIST</h1>
      <h3>LogOut</h3>
  </header>
    <CardCountry/>
    </div>
</template>

<script setup>

// import { defineProps } from 'vue'
import CardCountry from '@/components/CardCountry.vue'
// import SearchCountry from '../components/SearchCountry.vue'

// const props = defineProps({
//   title: String
// })

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

h3 {
  cursor: pointer;
}

</style>
