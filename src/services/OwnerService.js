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
    return apiClient.get('/owner/get/all', headers(token));
  },
  getOwner (token, id) {
    return apiClient.get(`/mock/owners/${id}`, headers(token))
  },
  postOwner (token, owner) {
    return apiClient.post('/owner/create', owner, headers(token))
  },
  editOwner (token, ownerId, ownerDataToUpdate) {
    return apiClient.patch(`/owner/edit/${ownerId}`, ownerDataToUpdate, headers(token))
  },
  deleteOwner (token, ownerIdToDelete) {
    return apiClient.delete(`/mock/owners/delete/${ownerIdToDelete}`, headers(token))
  }
}
