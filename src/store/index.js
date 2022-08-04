import { createStore } from 'vuex'

export default createStore({
  state: {
    list: []
  },
  getters: {
    numberOfCountriesInTheList: (state) => {
      return state.list.length
    }
  },
  // to update synchronous code
  mutations: {
    addCountryToMyList (state, country) {
      if (!state.list.includes(country)) {
        state.list = [...state.list, country]
      }
    },
    removeCountryFromMyList (state, country) {
      state.list = state.list.filter(eachCountry => eachCountry !== country)
    }
  },
  // to update asynchronous code (this code here is just to understand about actions, did not need since the mutation would be ok for this case, so used settimeout to become a asynchronous function)

  actions: {
    actionAddCountryToList ({ commit }, payload) {
      setTimeout(() => { commit('addCountryToMyList', payload) }, 2000)
    },
    actionRemoveCountryFromList (context, payload) {
      context.commit('removeCountryFromMyList', payload)
    }
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
