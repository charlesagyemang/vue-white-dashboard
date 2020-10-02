import CarService from '@/services/CarService'

export const namespaced = true

export const state = {
  cars: [],
  car: {},
  carInsurnaces: [],
  carRoadworthies:[],
  carIncometaxes: [],
  carMonthlyexpenses: [],
}

export const mutations = {

  ADD_CAR (state, car) {
    state.cars.unshift(car)
  },

  SET_CARS (state, cars) {
    state.cars = cars
  },

  SET_CAR_INSURANCES (state, carInsurnaces) {
    state.carInsurnaces = carInsurnaces
  },

  SET_CAR_ROADWORTHIES (state, carRoadWorthies) {
    state.carRoadworthies = carRoadWorthies
  },

  SET_CAR_INCOMETAXES (state, carIncomeTaxes) {
    state.carIncometaxes = carIncomeTaxes
  },

  SET_CAR_MONTHLYEXPENSES (state, carMonthlyExpenses) {
    state.carMonthlyexpenses = carMonthlyExpenses
  },

  SET_CAR (state, car) {
    state.car = car
  },

  UPDATE_CAR (state, carToUpdate) {
    state.cars = state.cars.filter(car => car.id !== carToUpdate.id)
    state.cars.unshift(carToUpdate)
  },

  DELETE_CAR (state, carIdToDelete) {
    state.cars = state.cars.filter(
      car => car.id !== carIdToDelete
    )
  }

}

export const actions = {

  createCar ({ commit }, car) {
    console.log('===car', car)
    // eslint-disable-next-line
    CarService.postCar(localStorage.uberToken, car).then((response) => {
      console.log('===car', response)
      commit('ADD_CAR', response.data)
    }).catch((error) => {
      throw error
    })
  },

  fetchCars ({ commit }) {
    // eslint-disable-next-line
    return CarService.getCars(localStorage.uberToken)
      .then((response) => {
        commit('SET_CARS', response.data)
      }).catch((error) => {
        throw error
      })
  },

  fetchCarInsurnaces ({ commit }) {
    // eslint-disable-next-line
    return CarService.getInsurances(localStorage.uberToken)
      .then((response) => {
        commit('SET_CAR_INSURANCES', response.data)
      }).catch((error) => {
        throw error
      })
  },

  fetchCarRoadworthies ({ commit }) {
    // eslint-disable-next-line
    return CarService.getRoadworthies(localStorage.uberToken)
      .then((response) => {
        commit('SET_CAR_ROADWORTHIES', response.data)
      }).catch((error) => {
        throw error
      })
  },


  fetchCarIncometaxes ({ commit }) {
    // eslint-disable-next-line
    return CarService.getIncometaxes(localStorage.uberToken)
      .then((response) => {
        commit('SET_CAR_INCOMETAXES', response.data)
      }).catch((error) => {
        throw error
      })
  },


  fetchCarMonthlyexpenses ({ commit }) {
    // eslint-disable-next-line
    return CarService.getMonthlyexpenses(localStorage.uberToken)
      .then((response) => {
        commit('SET_CAR_MONTHLYEXPENSES', response.data)
      }).catch((error) => {
        throw error
      })
  },

  editCar ({ commit }, { carId, carDataToUpdate }) {
    // eslint-disable-next-line
    return CarService.editCar(localStorage.uberToken, carId, carDataToUpdate)
    .then((response) => {
      console.log("==edit====", response.data);
      commit('UPDATE_CAR', response.data)
      return response.data
    }).catch((error) => {
      throw error
    })
  },

  addInsurance ({ commit }, { insuranceDetails }) {
    // eslint-disable-next-line
    return CarService.postInsurance(localStorage.uberToken, insuranceDetails)
    .then((response) => {
      console.log("==edit====", response.data);
      commit('UPDATE_CAR', response.data)
      return response.data
    }).catch((error) => {
      throw error
    })
  },

  addRoadworthy ({ commit }, { roadworthyDetails }) {
    // eslint-disable-next-line
    return CarService.postRoadworthy(localStorage.uberToken, roadworthyDetails)
    .then((response) => {
      console.log("==edit====", response.data);
      commit('UPDATE_CAR', response.data)
      return response.data
    }).catch((error) => {
      throw error
    })
  },

  /////////////////////
  addIncometax ({ commit }, { incometaxDetails }) {
    // eslint-disable-next-line
    return CarService.postIncometax(localStorage.uberToken, incometaxDetails)
    .then((response) => {
      console.log("==edit====", response.data);
      commit('UPDATE_CAR', response.data)
      return response.data
    }).catch((error) => {
      throw error
    })
  },

  addMonthlyexpense ({ commit }, { monthlyexpenseDetails }) {
    // eslint-disable-next-line
    return CarService.postMonthlyexpense(localStorage.uberToken, monthlyexpenseDetails)
    .then((response) => {
      console.log("==edit====", response.data);
      commit('UPDATE_CAR', response.data)
      return response.data
    }).catch((error) => {
      throw error
    })
  },

  addDocumentlink ({ commit }, { documentlinkDetails }) {
    // eslint-disable-next-line
    return CarService.postDocumentlink(localStorage.uberToken, documentlinkDetails)
    .then((response) => {
      console.log("==edit====", response.data);
      commit('UPDATE_CAR', response.data)
      return response.data
    }).catch((error) => {
      throw error
    })
  },

  fetchCarById ({ commit, getters }, id) {
    const car = getters.getCarById(id)
    commit('SET_CAR', car)
    return car
  },

  deleteCar ({ commit }, carIdToDelete) {
    // eslint-disable-next-line
    return CarService.deleteCar(localStorage.uberToken, carIdToDelete).then((response) => {
      commit('DELETE_CAR', carIdToDelete);
    }).catch((error) => {
      throw error;
    })
  }

}

export const getters = {

  getCarById: state => id => {
    return state.cars.find(car => car.id === id)
  }

}
