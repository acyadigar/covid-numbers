<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Global',
  computed:{
    ...mapState(['totalCases']),
  },
  methods:{
    ...mapActions(['fetchTotalCases'])
  },
  created(){
    this.fetchTotalCases()
  }
}
</script>

<template lang='pug'>
.section
  .global.card
    h1.card-header All over the World
    p
      em Updated Daily
    ul.gl.numbers-list
      li New Confirmed 
        span {{totalCases.NewConfirmed.toLocaleString()}}
      li New Deaths 
        span {{totalCases.NewDeaths.toLocaleString()}}
      li New Recovered 
        span {{totalCases.NewRecovered.toLocaleString()}}
      li Total Confirmed 
        span {{totalCases.TotalConfirmed.toLocaleString()}}
      li Total Deaths 
        span {{totalCases.TotalDeaths.toLocaleString()}}
      li Total Recovered 
        span {{totalCases.TotalRecovered.toLocaleString()}}
</template>

<style scoped>
</style>
