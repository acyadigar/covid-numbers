<template lang='pug'>
#app
  #container
    .brand
      h1 COVID NUMBERS
    HomeForm
    #main
      TotalCases
      Country
    Graph
</template>

<script>
import HomeForm from '@/components/HomeForm'
import TotalCases from '@/components/TotalCases'
import Country from '@/components/Country'
import Graph from '@/components/Graph'

export default {
  name: 'Home',
  components: {
    HomeForm,
    TotalCases,
    Country,
    Graph
  }
}
</script>

<style>
@import './assets/css/normalize.css';
@import './assets/css/style.css';
</style>
