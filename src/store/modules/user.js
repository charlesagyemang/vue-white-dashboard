import UserService from '@/services/UserService'

export const namespaced = true

export const state = {
  user: {},
  currentUser: {}
}

export const mutations = {
  SET_USER (state, user) {
    state.currentUser = user
  }
}

export const actions = {
  login ({ commit }, dataToSend) {
    return UserService.login(dataToSend)
      .then((response) => {
        commit('SET_USER', response.data)
        const user = response.data
        // eslint-disable-next-line
        localStorage.uberToken = user.token;
        // eslint-disable-next-line

        if (user.role === "ADMIN") {
          localStorage.uberName = user.email.split("@")[0];
        } else if (user.role === "OWNER") {
          localStorage.uberName = user.owner.fullName;
          localStorage.uberOwnerId = user.owner.id;
        } else {
          localStorage.uberName = user.driver.fullName;
          localStorage.uberDriverId = user.driver.id;
        }
        // eslint-disable-next-line
        localStorage.uberEmail = user.email;
        // eslint-disable-next-line
        localStorage.uberId = user.id;
        return user;

      })
      .catch((error) => {
        throw error
      })
  },

  register ({ commit, dispatch }, dataToSend) {
    return UserService.register(dataToSend)
      .then((response) => {
        console.log(response.data)
        commit('SET_USER', response.data)
        const user = response.data
        // eslint-disable-next-line
        localStorage.uberToken = user.token;
        // eslint-disable-next-line
        localStorage.uberName = user.name;
        // eslint-disable-next-line
        localStorage.uberEmail = user.email;
        // eslint-disable-next-line
        localStorage.uberId = user.id;
        const notification = {
          type: 'success',
          message: 'Logged In Successfully'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch((error) => {
        if (error.message === 'Network Error') {
          const notification = {
            type: 'error',
            message: 'Please Check Your Internet Connectivity'
          }
          dispatch('notification/add', notification, { root: true })
        } else {
          const errorResponse = error.response
          const errorMessage = errorResponse.data
          const notification = {
            type: 'error',
            message: 'There was a problem logging you in: ' + errorMessage
          }
          dispatch('notification/add', notification, { root: true })
        }
        throw error
      })
  },

  update ({ commit, dispatch }, updateData) {
    return UserService.update(updateData)
      .then((response) => {
        console.log(response.data)
        commit('SET_USER', response.data)
        const user = response.data
        // eslint-disable-next-line
        localStorage.uberToken = user.token;
        // eslint-disable-next-line
        localStorage.uberName = user.name;
        // eslint-disable-next-line
        localStorage.uberEmail = user.email;
        // eslint-disable-next-line
        localStorage.uberId = user.id;
        const notification = {
          type: 'success',
          message: 'Updated Successfully'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch((error) => {
        if (error.message === 'Network Error') {
          const notification = {
            type: 'error',
            message: 'Please Check Your Internet Connectivity'
          }
          dispatch('notification/add', notification, { root: true })
        } else {
          const errorResponse = error.response
          const errorMessage = errorResponse.data
          const notification = {
            type: 'error',
            message: 'There was a problem logging you in: ' + errorMessage
          }
          dispatch('notification/add', notification, { root: true })
        }
        throw error
      })
  }
}
