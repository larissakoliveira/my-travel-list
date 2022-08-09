// import { useQuery } from '@vue/apollo-composable'
// import gql from 'graphql-tag'
import { createStore } from 'vuex'

export default createStore({
  state: {
    list: []
    // countriesList: []
  },
  getters: {
    numberOfCountriesInTheList: (state) => {
      return state.list.length
    }
  },
  // to update sync code
  mutations: {
    addCountryToMyList (state, country) {
      if (!state.list.includes(country)) {
        state.list = [...state.list, country]
        alert(`${country.name} was successfully added to your list`)
      } else {
        alert(`${country.name} is already added to your list`)
      }
    },
    removeCountryFromMyList (state, country) {
      state.list = state.list.filter(eachCountry => eachCountry !== country)
    },
    setCountries (state, countries) {
      state.countriesList = countries
    }
  },
  // to update asynchronous code (this code here is just to understand about actions, did not need since the mutation would be ok for this case, so used settimeout to become a asynchronous function)

  actions: {
    actionAddCountryToList ({ commit }, payload) {
      setTimeout(() => {
        commit('addCountryToMyList', payload)
      }, 500)
    },
    actionRemoveCountryFromList (context, payload) {
      context.commit('removeCountryFromMyList', payload)
    }
  //   async actionsGetCountries ({ commit }) {
  //     const { result } = await useQuery(gql`
  //     query Countries {
  //       countries {
  //         name
  //         capital
  //         emoji
  //         continent {
  //           name
  //         }
  //         currency
  //         languages {
  //           name
  //         }
  //       }
  //     }
  // `)
  //     console.log(result)
  //     commit('setCountries', result.value?.countries)
  //   }
  },
  modules: {}
})

// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     counter: 10
//   },
//   getters: {
//     times2 (state) {
//       return state.counter * 2
//     }
//   },
//   mutations: {
//     setCounter (state, value) {
//       state.counter = value
//     }
//   },
//   actions: {},
//   modules: {}
// })
