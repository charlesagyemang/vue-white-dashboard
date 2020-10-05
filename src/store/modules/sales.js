import SalesService from '@/services/SalesService'

export const namespaced = true

export const state = {
  saless: [],
  sales: {}
}

export const mutations = {

  ADD_SALES (state, sales) {
    state.saless.unshift(sales)
  },

  SET_SALESS (state, saless) {
    state.saless = saless
  },

  SET_SALES (state, sales) {
    state.sales = sales
  },

  UPDATE_SALES (state, salesToUpdate) {
    state.saless = state.saless.filter(sales => sales.id !== salesToUpdate.id)
    state.saless.unshift(salesToUpdate)
  },

  DELETE_SALES (state, salesIdToDelete) {
    state.saless = state.saless.filter(
      sales => sales.id !== salesIdToDelete
    )
  }

}

export const actions = {

  createSales ({ commit }, sales) {
    console.log('===sales', sales)
    // eslint-disable-next-line
    SalesService.postSales(localStorage.uberToken, sales).then((response) => {
      console.log('===sales', response)
      commit('ADD_SALES', response.data)
    }).catch((error) => {
      throw error
    })
  },

  fetchSaless ({ commit }) {
    // eslint-disable-next-line
    return SalesService.getSaless(localStorage.uberToken)
      .then((response) => {
        commit('SET_SALESS', response.data)
        return response.data
      }).catch((error) => {
        throw error
      })
  },

  editSales ({ commit }, { salesId, salesDataToUpdate }) {
    // eslint-disable-next-line
    return SalesService.editSales(localStorage.uberToken, salesId, salesDataToUpdate)
    .then((response) => {
      commit('UPDATE_SALES', response.data)
      return response.data
    }).catch((error) => {
      throw error
    })
  },

  fetchSalesById ({ commit, getters }, id) {
    const sales = getters.getSalesById(id)
    commit('SET_SALES', sales)
    return sales
  },

  // fetchSalesByIdExternal ( { commit } ) {
  //   return SalesService.getSales(localStorage.uberToken, localStorage.uberSalesId)
  //   .then((response) => {
  //     commit('SET_SALES', response.data);
  //     // commit('SET_SALES_CAR', response.data.cars);
  //     return response.data
  //   }).catch((error) => {
  //     throw error
  //   })
  // },

  deleteSales ({ commit }, salesIdToDelete) {
    // eslint-disable-next-line
    return SalesService.deleteSales(localStorage.uberToken, salesIdToDelete).then((response) => {
      commit('DELETE_SALES', salesIdToDelete);
    }).catch((error) => {
      throw error;
    })
  }

}

export const getters = {

  getSalesById: state => id => {
    return state.saless.find(sales => sales.id === id)
  }

}
