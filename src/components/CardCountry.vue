<script>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const { result } = useQuery(gql`
      query Countries {
        countries {
          name
          capital
          emoji
          continent {
            name
          }
          currency
          languages {
            name
          }
        }
      }
  `)
    const countries = computed(() => result.value?.countries ?? [])
    const newSearch = ref('')
    let countryNotFoundError = ref(false)
    const filteredCountries = computed(() => {
      if (newSearch.value) {
        const countryFound = countries.value.filter((country) => country.name.toLowerCase().includes(newSearch.value.toLowerCase()))
        if (countryFound.length === 0) {
          console.log(countryNotFoundError)
          countryNotFoundError = true
          console.log(countryNotFoundError)
        }
        return countryFound
      }
      return countries.value
    })
    // get the store
    const store = useStore()
    const addToMyList = (country) => {
      store.dispatch('actionAddCountryToList', country)
    }
    return {
      result,
      filteredCountries,
      newSearch,
      countryNotFoundError,
      addToMyList
    }
  }
}
</script>

<template>
<div class="search">
  <label class="search search-label">Search for a country</label>
   <input type="text" v-model="newSearch" class="search search-input" placeholder="search"/>
  <h3 v-if="countryNotFoundError">Country Not Found</h3>
</div>
<div class="container">
  <div  class="card-content-div" v-for="country in filteredCountries" :key="country.code">
      <h4 class="card-content">{{ country.name }}</h4>
      <h5 class="card-content">Capital: {{ country.capital }} </h5>
      <h5 class="card-content">{{ country.continent.name }}</h5>
      <p class="card-content">{{ country.currency }}</p>
      <p class="card-content">Language: {{ country.languages[0]?.name }}</p>
      <img class="card-content image" v-bind:src="`https://source.unsplash.com/1600x900/?${country.name}-nature`"/>
      <button v-on:click="addToMyList(country)" type="button" class="btn add-list-btn">Add to My List</button>
  </div>
</div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: auto auto auto;
  min-height: 30px;
  min-width: 50px;
  text-align: center;
  margin-top: 20px;
}

.card-content {
  margin: 0.2em;
}
.card-content-div:hover {
  background-color: black;
  cursor: pointer;
}

.card-content-div {
  border: 2px solid white;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.image {
  max-width: 20em;
  max-height: 20em;
  margin: 0 auto;
}

.search-input, .search-btn {
  margin: 0 auto;
  max-width: 25%;
}

.search {
  display: flex;
  flex-direction: column;
}

.search-label {
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.add-list-btn {
  max-width: 50%;
  margin: 10px auto;
  cursor: pointer;
}

@media (max-width: 500px) {
.search-input, .search-btn {
  margin: 0 auto;
  max-width: 50%;
}

}
</style>
