import apiClient from './axiosInstance'

const headers = (token) => {
  return { headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }}
}

export default {
  getPayouts (token) {
    return apiClient.get('/payout/get/all', headers(token));
  },
  getPayout (token, id) {
    return apiClient.get(`/payout/${id}`, headers(token))
  },
  postPayout (token, payout) {
    return apiClient.post('/payout/create', payout, headers(token))
  },
  editPayout (token, payoutId, payoutDataToUpdate) {
    return apiClient.patch(`/payout/edit/${payoutId}`, payoutDataToUpdate, headers(token))
  },
  deletePayout (token, payoutIdToDelete) {
    return apiClient.delete(`/payout/delete/${payoutIdToDelete}`, headers(token))
  }
}
