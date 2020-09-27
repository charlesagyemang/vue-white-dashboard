import CarService from '@/services/CarService'

export const namespaced = true

export const state = {
  cars: [],
  car: {}
}

export const mutations = {

  ADD_CAR (state, car) {
    state.cars.unshift(car)
  },

  SET_CARS (state, cars) {
    state.cars = cars
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

  editCar ({ commit }, { carId, carDataToUpdate }) {
    // eslint-disable-next-line
    return CarService.editCar(localStorage.uberToken, carId, carDataToUpdate)
    .then((response) => {
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
