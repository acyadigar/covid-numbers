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
        span {{totalCases.NewConfirmed}}
      li New Deaths 
        span {{totalCases.NewDeaths}}
      li New Recovered 
        span {{totalCases.NewRecovered}}
      li Total Confirmed 
        span {{totalCases.TotalConfirmed}}
      li Total Deaths 
        span {{totalCases.TotalDeaths}}
      li Total Recovered 
        span {{totalCases.TotalRecovered}}
</template>

<style scoped>
</style>
