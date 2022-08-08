import { computed } from 'vue'
import { useStore } from 'vuex'

export function useState (arr) {
  const store = useStore()
  const keypair = arr.map(statekey => [statekey, computed(() => store.state[statekey])])
  return Object.fromEntries(keypair)
}

export function useGetters (arr) {
  const store = useStore()
  const keypair = arr.map(getterkey => [getterkey, computed(() => store.getters[getterkey])])
  return Object.fromEntries(keypair)
}

export function useMutations (arr) {
  const store = useStore()
  const keypair = arr.map(mutationskey => [mutationskey, input => store.commit(mutationskey, input)])
  return Object.fromEntries(keypair)
}

// since composition api does not have mapping function like options api, created these.
