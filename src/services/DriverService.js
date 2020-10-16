import apiClient from './axiosInstance'

const headers = (token) => {
  return { headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }}
}

export default {
  getDrivers (token) {
    return apiClient.get('/driver/get/all', headers(token));
  },
  getDriver (token, id) {
    return apiClient.get(`/driver/${id}`, headers(token))
  },
  postDriver (token, driver) {
    return apiClient.post('/driver/create', driver, headers(token))
  },
  editDriver (token, driverId, driverDataToUpdate) {
    return apiClient.patch(`/driver/edit/${driverId}`, driverDataToUpdate, headers(token))
  },
  deleteDriver (token, driverIdToDelete) {
    return apiClient.delete(`/driver/delete/${driverIdToDelete}`, headers(token))
  }
}
