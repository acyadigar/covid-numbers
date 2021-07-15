import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/axios'

Vue.use(Vuex)

import graph from './graph'

export default new Vuex.Store({
  modules: {
    graph
  },
  state: {
    options: {},
    totalCases: {},
    countryCases: {}
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
    }
  }
})
