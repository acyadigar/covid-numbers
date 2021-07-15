<template lang='pug'>
.graph(v-if='graphTotalData && graphDailyData')
  button(@click='switchGraphs') >
  transition(name="slide-fade")
    Plotly(v-if='totalGraph' :data="graphTotalData" :layout="layout" :display-mode-bar="false")
  transition(name="slide-fade")
    Plotly(v-if='!totalGraph' :data='graphDailyData' :layout='dailyLayout' :display-mode-bar='false')
</template>

<script>
import { Plotly } from 'vue-plotly'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      graphTotalData: state => state.graph.graphTotalData,
      graphDailyData: state => state.graph.graphDailyData
    })
  },
  components: {
    Plotly
  },
  methods: {
    switchGraphs(){
      this.totalGraph = !this.totalGraph
    }
  },
  data(){
    return{
    totalGraph: true,
    layout:{
      title: "Covid Numbers Since Dayone (cumulative)"
    }, 
    dailyLayout:{
      title: "Covid Numbers For Last 90 Days (day by day)"
    }
  }
}
}</script>

<style scoped>
</style>