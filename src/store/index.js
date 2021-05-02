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
    graphTotalData : null,
    graphDailyData: null
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
    SET_CUMULATIVE_GRAPH_DATA(state, data){
      state.graphTotalData = data
    },
    SET_DAILY_GRAPH_DATA(state, data){
      state.graphDailyData = data
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
      const lastTwoDays = result.data.slice(-2)
      const today = lastTwoDays.reduce((yesterday, today) => {
        const values = {
        NewConfirmed: today.Confirmed - yesterday.Confirmed,
        NewDeaths: today.Deaths - yesterday.Deaths,
        NewRecovered: today.Recovered - yesterday.Recovered
      }
        return values
      })
      const todaysNumbers = {
        ...today,
        ...lastTwoDays[1] // today's numbers
      }
      commit('SET_LIVE_CASES', todaysNumbers)
    },
    async fetchGraphCountry({commit}, data){
      const result = await http.get(`/total/country/${data}`)

      // Setting cumulative data 
      // from Dayone
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
      const countryDataCumulative = [confirmedLine, recoverLine, deathLine]

      // Setting daily data
      // for last 90 days
      const newCases = []
      for(let i = 0; i <= 90; i++){
        let lastTwoDays = result.data.slice(-2)
        const today = lastTwoDays.reduce((yesterday, today) => {
          const newValues = {
            NewConfirmed: today.Confirmed - yesterday.Confirmed,
            NewDeaths: today.Deaths - yesterday.Deaths,
            NewRecovered: today.Recovered - yesterday.Recovered,
            Date: today.Date    
          }
          return newValues
        })
        newCases.push(today)
        result.data.pop()
      }

      const dailydates = newCases.map(data => data.Date.split('T')[0])
      const dailyconfirmed = newCases.map(data => data.NewConfirmed)
      const dailydeaths = newCases.map(data => data.NewDeaths)
      const dailyrecovered = newCases.map(data => data.NewRecovered)
      const dailyconfirmedLine = {
        type: 'scatter',
        mode: 'lines',
        name: 'Confirmed',
        x: dailydates,
        y: dailyconfirmed,
        line: {color: '#17BECF'}
      }
      const dailydeathLine = {
        type: 'scatter',
        mode: 'lines',
        name: 'Deaths',
        x: dailydates,
        y: dailydeaths,
        line: {color: '#7F7F7F'}
      }
      const dailyrecoverLine = {
        type: 'scatter',
        mode: 'lines',
        name: 'Recover',
        x: dailydates,
        y: dailyrecovered,
        line: {color: '#F7EA00'}
      }
      const countryDataDaily = [dailyconfirmedLine, dailyrecoverLine, dailydeathLine]

      commit('SET_CUMULATIVE_GRAPH_DATA', countryDataCumulative)
      commit('SET_DAILY_GRAPH_DATA', countryDataDaily)
    }
  }
})
