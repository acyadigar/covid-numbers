<template lang='pug'>
#app
  #container
    .brand
      h1 COVID NUMBERS
    HomeForm
    #main
      TotalCases
      SelectedCountry
</template>

<script>
import HomeForm from '@/components/HomeForm'
import TotalCases from '@/components/TotalCases'
import SelectedCountry from '@/components/SelectedCountry'

export default {
  name: 'Home',
  components: {
    HomeForm,
    TotalCases,
    SelectedCountry
  }
}
</script>

<style>
@import './assets/css/normalize.css';
@import './assets/css/style.css';
</style>
