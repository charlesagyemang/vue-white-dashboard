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
    return apiClient.get('/mock/drivers', headers(token));
  },
  getDriver (token, id) {
    return apiClient.get(`/mock/drivers/${id}`, headers(token))
  },
  postDriver (token, driver) {
    return apiClient.post('/mock/create.new', driver, headers(token))
  },
  editDriver (token, driverId, driverDataToUpdate) {
    return apiClient.patch(`/mock/drivers/edit/${driverId}`, driverDataToUpdate, headers(token))
  },
  deleteDriver (token, driverIdToDelete) {
    return apiClient.delete(`/mock/drivers/delete/${driverIdToDelete}`, headers(token))
  }
}
