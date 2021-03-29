<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Form',
  data(){
    return{
      selectedOption: '',
      date: '',
      isLoading: false,
      error: ''
    }
  },
  computed:{
    ...mapState(['options']),
    isNull(){
      if(!this.selectedOption) return true
      return false
    }
  },
  methods:{
    ...mapActions(['fetchOptions', 'fetchCountyData']),
    sendSlug(e){
      e.preventDefault()
      this.isLoading = true
      this.error = ''
      this.fetchCountyData(this.selectedOption)
      .then(() => this.isLoading = false)
      .catch(() => {
        this.isLoading = false
        this.error = `No confirmed cases for ${this.selectedOption}!`
      })
    },
    getDate(){
      const today = new Date().toLocaleString().split(' ')[0] 
      this.date = today
    }
  },
  created(){
    this.fetchOptions()
    this.getDate()
  }
}
</script>

<template lang='pug'>
.main
  form
    .form-container
      label Country
      select(v-model='selectedOption')
        option(disabled selected value='') Pick a country!
        option(v-for='option in options') {{option.Country}}
      button.slug-button(@click="sendSlug" :disabled='isNull') Show {{selectedOption}}
    p {{date}}
    p.error(v-if='error')
      em {{error}}
    p.loading(v-if='isLoading')
      em Please wait...
</template>

<style scoped>
</style>