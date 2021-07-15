import http from '@/axios'

export default {
  namespaced: true,
  state: {
    graphTotalData : null,
    graphDailyData: null
  },
  mutations: {
    SET_CUMULATIVE_GRAPH_DATA(state, data){
      state.graphTotalData = data
    },
    SET_DAILY_GRAPH_DATA(state, data){
      state.graphDailyData = data
    }
  },
  actions: {
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
}