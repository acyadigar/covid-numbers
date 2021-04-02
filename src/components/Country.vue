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
        span {{countryCases.NewConfirmed.toLocaleString()}}
      li New Deaths 
        span {{countryCases.NewDeaths.toLocaleString()}}
      li New Recovered 
        span {{countryCases.NewRecovered.toLocaleString()}}
      li Total Confirmed 
        span {{countryCases.Confirmed.toLocaleString()}}
      li Total Deaths 
        span {{countryCases.Deaths.toLocaleString()}}
      li Total Recovered 
        span {{countryCases.Recovered.toLocaleString()}}
  .country.else(v-else)
    h1 Pick a country to see the last covid numbers!
</template>

<style scoped>
</style>