<template lang='pug'>
.graph
  Plotly(:data="graphData" :layout="layout" :display-mode-bar="false")
</template>

<script>
import { Plotly } from 'vue-plotly'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['graphData'])
  },
  components: {
    Plotly
  },
  data(){
    return{
    layout:{
      title: "Covid Numbers Since Dayone"
    }
  }
}
}</script>

<style scoped>
.graph {
  margin-top: 2rem;
}
</style>