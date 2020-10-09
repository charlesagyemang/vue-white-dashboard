import PayoutService from '@/services/PayoutService'

export const namespaced = true

export const state = {
  payouts: [],
  payout: {}
}

export const mutations = {

  ADD_PAYOUT (state, payout) {
    state.payouts.unshift(payout)
  },

  SET_PAYOUTS (state, payouts) {
    state.payouts = payouts
  },

  SET_PAYOUT (state, payout) {
    state.payout = payout
  },

  UPDATE_PAYOUT (state, payoutToUpdate) {
    state.payouts = state.payouts.filter(payout => payout.id !== payoutToUpdate.id)
    state.payouts.unshift(payoutToUpdate)
  },

  DELETE_PAYOUT (state, payoutIdToDelete) {
    state.payouts = state.payouts.filter(
      payout => payout.id !== payoutIdToDelete
    )
  }

}

export const actions = {

  createPayout ({ commit }, payout) {
    console.log('===payout', payout)
    // eslint-disable-next-line
    PayoutService.postPayout(localStorage.uberToken, payout).then((response) => {
      console.log('===payout', response)
      commit('ADD_PAYOUT', response.data)
    }).catch((error) => {
      throw error
    })
  },

  fetchPayouts ({ commit }) {
    // eslint-disable-next-line
    return PayoutService.getPayouts(localStorage.uberToken)
      .then((response) => {
        commit('SET_PAYOUTS', response.data)
      }).catch((error) => {
        throw error
      })
  },

  editPayout ({ commit }, { payoutId, payoutDataToUpdate }) {
    // eslint-disable-next-line
    return PayoutService.editPayout(localStorage.uberToken, payoutId, payoutDataToUpdate)
    .then((response) => {
      commit('UPDATE_PAYOUT', response.data)
      return response.data
    }).catch((error) => {
      throw error
    })
  },

  fetchPayoutById ({ commit, getters }, id) {
    const payout = getters.getPayoutById(id)
    commit('SET_PAYOUT', payout)
    return payout
  },

  fetchPayoutByIdExternal ( { commit }, id ) {
    return PayoutService.getPayout(localStorage.uberToken, id)
    .then((response) => {
      commit('SET_PAYOUT', response.data);
      // commit('SET_PAYOUT_CAR', response.data.cars);
      return response.data
    }).catch((error) => {
      throw error
    })
  },

  deletePayout ({ commit }, payoutIdToDelete) {
    // eslint-disable-next-line
    return PayoutService.deletePayout(localStorage.uberToken, payoutIdToDelete).then((response) => {
      commit('DELETE_PAYOUT', payoutIdToDelete);
    }).catch((error) => {
      throw error;
    })
  }

}

export const getters = {

  getPayoutById: state => id => {
    return state.payouts.find(payout => payout.id === id)
  }

}
