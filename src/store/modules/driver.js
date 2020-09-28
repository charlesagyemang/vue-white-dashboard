import DriverService from '@/services/DriverService'

export const namespaced = true

export const state = {
  drivers: [],
  driver: {}
}

export const mutations = {

  ADD_DRIVER (state, driver) {
    state.drivers.unshift(driver)
  },

  SET_DRIVERS (state, drivers) {
    state.drivers = drivers
  },

  SET_DRIVER (state, driver) {
    state.driver = driver
  },

  UPDATE_DRIVER (state, driverToUpdate) {
    state.drivers = state.drivers.filter(driver => driver.id !== driverToUpdate.id)
    state.drivers.unshift(driverToUpdate)
  },

  DELETE_DRIVER (state, driverIdToDelete) {
    state.drivers = state.drivers.filter(
      driver => driver.id !== driverIdToDelete
    )
  }

}

export const actions = {

  createDriver ({ commit }, driver) {
    console.log('===driver', driver)
    // eslint-disable-next-line
    DriverService.postDriver(localStorage.uberToken, driver).then((response) => {
      console.log('===driver', response)
      commit('ADD_DRIVER', response.data)
    }).catch((error) => {
      throw error
    })
  },

  fetchDrivers ({ commit }) {
    // eslint-disable-next-line
    return DriverService.getDrivers(localStorage.uberToken)
      .then((response) => {
        commit('SET_DRIVERS', response.data)
      }).catch((error) => {
        throw error
      })
  },

  editDriver ({ commit }, { driverId, driverDataToUpdate }) {
    // eslint-disable-next-line
    return DriverService.editDriver(localStorage.uberToken, driverId, driverDataToUpdate)
    .then((response) => {
      commit('UPDATE_DRIVER', response.data)
      return response.data
    }).catch((error) => {
      throw error
    })
  },

  fetchDriverById ({ commit, getters }, id) {
    const driver = getters.getDriverById(id)
    commit('SET_DRIVER', driver)
    return driver
  },

  deleteDriver ({ commit }, driverIdToDelete) {
    // eslint-disable-next-line
    return DriverService.deleteDriver(localStorage.uberToken, driverIdToDelete).then((response) => {
      commit('DELETE_DRIVER', driverIdToDelete);
    }).catch((error) => {
      throw error;
    })
  }

}

export const getters = {

  getDriverById: state => id => {
    return state.drivers.find(driver => driver.id === id)
  }

}
