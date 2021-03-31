import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: { Token: process.env.VUE_APP_TOKEN }
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: {},
    totalCases: {},
    countryCases: {},
    graphData : null
  },
  mutations: {
    SET_OPTIONS(state, data){
      state.options = data
    },
    SET_TOTAL_CASES(state, data){
      state.totalCases = data
    },
    SET_LIVE_CASES(state, data){
      state.countryCases = data
    },
    SET_GRAPH_DATA(state, data){
      state.graphData = data
    }
  },
  actions: {
    async fetchTotalCases({commit}){
      const result = await http.get('/summary')
      commit('SET_TOTAL_CASES', result.data.Global)
    },
    async fetchOptions({commit}){
      const result = await http.get('/countries')
      const sortedCountries = result.data.sort((first, next) => {
        return first.Country > next.Country ? 1 : -1
      })
      commit('SET_OPTIONS', sortedCountries)
    },
    async fetchCountyData({commit}, data){
      // const result = await http.get(`/live/country/${data}/status/confirmed`)
      const result = await http.get(`/total/country/${data}`)
      const len = result.data.length
      const lastTwoDays = [
        result.data[len-1],
        result.data[len-2]
      ]
      const today = lastTwoDays.reduce((today, yesterday) => {
        const values = {
        NewConfirmed: today.Confirmed - yesterday.Confirmed,
        NewDeaths: today.Deaths - yesterday.Deaths,
        NewRecovered: today.Recovered - yesterday.Recovered
      }
        return values
      })
      const todaysNumbers = {
        ...today,
        ...lastTwoDays[0] // today's numbers
      }
      commit('SET_LIVE_CASES', todaysNumbers)
    },
    async fetchGraphCountry({commit}, data){
      const result = await http.get(`/total/dayone/country/${data}`)
      const dates = result.data.map(data => data.Date.split('T')[0])
      const confirmed = result.data.map(data => data.Confirmed)
      const deaths = result.data.map(data => data.Deaths)
      const recovered = result.data.map(data => data.Recovered)
      const confirmedLine = {
        type: 'scatter',
        mode: 'lines',
        name: 'Confirmed',
        x: dates,
        y: confirmed,
        line: {color: '#17BECF'}
      }
      const deathLine = {
        type: 'scatter',
        mode: 'lines',
        name: 'Deaths',
        x: dates,
        y: deaths,
        line: {color: '#7F7F7F'}
      }
      const recoverLine = {
        type: 'scatter',
        mode: 'lines',
        name: 'Recover',
        x: dates,
        y: recovered,
        line: {color: '#F7EA00'}
      }
      const countryData = [confirmedLine, recoverLine, deathLine]
      // const countryData = {
      //   x: dates,
      //   y: confirmed,
      //   type: 'scatter',
      // }
      commit('SET_GRAPH_DATA', countryData)
    }
  }
})
