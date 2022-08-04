<template>
<h1>MY LIST HERE</h1>
<p>Number of countries in this list: {{numberOfCountries}}</p>
<ul v-for="country in myList" v-bind:key="country.code">
  <li>
    {{country.name}}
  </li>
</ul>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup () {
    const store = useStore()
    const numberOfCountries = computed(() => store.getters.numberOfCountries)
    const myList = computed(() => store.state.list)

    return {
      myList,
      numberOfCountries
    }
  }
}

</script>

<!--
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore() // same as this.$store
    const counter = computed(() => store.state.counter)
    const times2 = computed(() => store.getters.times2)
    const inc = () => store.commit('setCounter', counter.value + 1)
    return {
      inc,
      counter,
      times2
    }
  }
}
</script> -->

<!-- <script>
import { useGetters, useState, useMutations } from '@/helpers/helpers'

export default {
  setup () {
    const { counter } = useState(['counter'])
    const { times2 } = useGetters(['times2'])
    const { setCounter } = useMutations(['setCounter'])
    const inc = () => setCounter(counter.value + 1)
    return {
      inc,
      counter,
      times2
    }
  }
}
</script> -->
