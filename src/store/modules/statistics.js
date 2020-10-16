import StatisticsService from '@/services/StatisticsService'

export const namespaced = true

export const state = {
  statistics: {
    userCount: '',
    carCount: '',
    documentLinkCount: '',
    driverCount: '',
    incomeTaxCount: '',
    insuranceCount: '',
    monthlyExpenseCount: '',
    ownerCount: '',
    roadWorthyCount: '',
    salesCount: '',
  }
}

export const mutations = {
  SET_STATISTICS (state, stat) {
    state.statistics = stat
    console.log('set stat', state.statistics)
  }
}

export const actions = {

  getStatistics ({ commit, dispatch }) {
    // eslint-disable-next-line
    StatisticsService.getStatistics(localStorage.uberToken).then((response) => {
      console.log('Gotten Stats', response.data)
      commit('SET_STATISTICS', response.data)
      const notification = {
        type: 'success',
        message: 'Stats Gotten Successfully'
      }
      dispatch('notification/add', notification, { root: true })
    }).catch((error) => {
      const notification = {
        type: 'error',
        message: 'There was a fetchig stats: ' + error.message
      }
      dispatch('notification/add', notification, { root: true })
    })
  }

}
