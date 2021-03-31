<script>
import { mapState } from 'vuex'
export default {
  name: 'Country',
  computed:{
    ...mapState(['countryCases'])
  }
}
</script>

<template lang="pug">
.section
  .country.card(v-if='countryCases.Confirmed')
    h1.card-header Numbers for {{countryCases.Country}}
    p
      em Updated Daily
    ul.country.numbers-list
      li New Confirmed 
        span {{countryCases.NewConfirmed}}
      li New Deaths 
        span {{countryCases.NewDeaths}}
      li New Recovered 
        span {{countryCases.NewRecovered}}
      li Total Confirmed 
        span {{countryCases.Confirmed}}
      li Total Deaths 
        span {{countryCases.Deaths}}
      li Total Recovered 
        span {{countryCases.Recovered}}
  .country.else(v-else)
    h1 Pick a country to see the last covid numbers!
</template>

<style scoped>
</style>