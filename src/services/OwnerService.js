import apiClient from './axiosInstance'

const headers = (token) => {
  return { headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }}
}

export default {
  getOwners (token) {
    return apiClient.get('/mock/owners', headers(token));
  },
  getOwner (token, id) {
    return apiClient.get(`/mock/owners/${id}`, headers(token))
  },
  postOwner (token, owner) {
    return apiClient.post('/mock/create.new', owner, headers(token))
  },
  editOwner (token, ownerId, ownerDataToUpdate) {
    return apiClient.patch(`/mock/owners/edit/${ownerId}`, ownerDataToUpdate, headers(token))
  },
  deleteOwner (token, ownerIdToDelete) {
    return apiClient.delete(`/mock/owners/delete/${ownerIdToDelete}`, headers(token))
  }
}
