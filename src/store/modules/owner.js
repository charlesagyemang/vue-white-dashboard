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

  createOwner ({ commit }, owner) {
    console.log('===owner', owner)
    // eslint-disable-next-line
    OwnerService.postOwner(localStorage.uberToken, owner).then((response) => {
      console.log('===owner', response)
      commit('ADD_OWNER', response.data)
    }).catch((error) => {
      throw error
    })
  },

  fetchOwners ({ commit }) {
    // eslint-disable-next-line
    return OwnerService.getOwners(localStorage.uberToken)
      .then((response) => {
        commit('SET_OWNERS', response.data)
      }).catch((error) => {
        throw error
      })
  },

  editOwner ({ commit }, { ownerId, ownerDataToUpdate }) {
    // eslint-disable-next-line
    console.log("Details", ownerDataToUpdate);
    return OwnerService.editOwner(localStorage.uberToken, ownerId, ownerDataToUpdate)
    .then((response) => {
      commit('UPDATE_OWNER', response.data)
      return response.data
    }).catch((error) => {
      throw error
    })
  },

  fetchOwnerById ({ commit, getters }, id) {
    const owner = getters.getOwnerById(id)
    commit('SET_OWNER', owner)
    return owner
  },

  deleteOwner ({ commit }, ownerIdToDelete) {
    // eslint-disable-next-line
    return OwnerService.deleteOwner(localStorage.uberToken, ownerIdToDelete).then((response) => {
      commit('DELETE_OWNER', ownerIdToDelete);
    }).catch((error) => {
      throw error;
    })
  }

}

export const getters = {

  getOwnerById: state => id => {
    return state.owners.find(owner => owner.id === id)
  }

}
