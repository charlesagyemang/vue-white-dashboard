import OwnerService from '@/services/OwnerService'

export const namespaced = true

export const state = {
  owners: [],
  owner: {}
}

export const mutations = {

  ADD_OWNER (state, owner) {
    state.owners.unshift(owner)
  },

  SET_OWNERS (state, owners) {
    state.owners = owners
  },

  SET_OWNER (state, owner) {
    state.owner = owner
  },

  UPDATE_OWNER (state, ownerToUpdate) {
    state.owners = state.owners.filter(owner => owner.id !== ownerToUpdate.id)
    state.owners.unshift(ownerToUpdate)
  },

  DELETE_OWNER (state, ownerIdToDelete) {
    state.owners = state.owners.filter(
      owner => owner.id !== ownerIdToDelete
    )
  }

}

export const actions = {

  createOwner ({ commit, dispatch }, owner) {
    console.log('===owner', owner)
    // eslint-disable-next-line
    OwnerService.postOwner(localStorage.uberToken, owner).then((response) => {
      console.log('===owner', response)
      commit('ADD_OWNER', response.data)
      const notification = {
        type: 'success',
        message: 'Your owner Item has Been Created!'
      }
      dispatch('notification/add', notification, { root: true })
    }).catch((error) => {
      const notification = {
        type: 'error',
        message: 'There was a problem creating your owner item: ' + error.message
      }
      dispatch('notification/add', notification, { root: true })
    })
  },

  fetchOwners ({ commit, dispatch }) {
    // eslint-disable-next-line
    return OwnerService.getOwners(localStorage.uberToken)
      .then((response) => {
        commit('SET_OWNERS', response.data)
      }).catch((error) => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },

  editOwner ({ commit, dispatch }, { ownerId, ownerDataToUpdate }) {
    // eslint-disable-next-line
    OwnerService.editOwner(localStorage.uberToken, ownerId, ownerDataToUpdate).then((response) => {
      commit('UPDATE_OWNER', response.data)
      const notification = {
        type: 'success',
        message: 'Your Event has Been Updated!'
      }
      dispatch('notification/add', notification, { root: true })
    }).catch((error) => {
      const notification = {
        type: 'error',
        message: 'There was a problem updating your event: ' + error.message
      }
      dispatch('notification/add', notification, { root: true })
    })
  },

  fetchOwnerById ({ commit, getters }, id) {
    const owner = getters.getOwnerById(id)
    if (owner) {
      commit('SET_OWNER', owner)
      return owner
    } else {
      // eslint-disable-next-line
      return OwnerService.getOwner(localStorage.uberToken, id)
        .then((response) => {
          commit('SET_OWNER', response.data)
          return response.data
        })
    }
  },

  deleteOwner ({ commit, dispatch }, ownerIdToDelete) {
    // eslint-disable-next-line
    OwnerService.deleteOwner(localStorage.uberToken, ownerIdToDelete).then((response) => {
      commit('DELETE_OWNER', ownerIdToDelete)
      const notification = {
        type: 'success',
        message: 'Your Event has Been Deleted!'
      }
      dispatch('notification/add', notification, { root: true })
    }).catch((error) => {
      const notification = {
        type: 'error',
        message: 'There was a problem updating your event: ' + error.message
      }
      dispatch('notification/add', notification, { root: true })
    })
  }

}

export const getters = {

  getownerById: state => id => {
    return state.owners.find(owner => owner.id === id)
  }

}
