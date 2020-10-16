import apiClient from './axiosInstance'

const headers = (token) => {
  return { headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }}
}

export default {
  getSaless (token) {
    return apiClient.get('/sales/get/all', headers(token));
  },
  getSales (token, id) {
    return apiClient.get(`/sales/${id}`, headers(token))
  },
  postSales (token, sales) {
    return apiClient.post('/sales/create', sales, headers(token))
  },
  editSales (token, salesId, salesDataToUpdate) {
    return apiClient.patch(`/sales/edit/${salesId}`, salesDataToUpdate, headers(token))
  },
  deleteSales (token, salesIdToDelete) {
    return apiClient.delete(`/sales/delete/${salesIdToDelete}`, headers(token))
  }
}
