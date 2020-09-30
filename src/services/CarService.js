import apiClient from './axiosInstance'

const headers = (token) => {
  return { headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }}
}

export default {
  getCars (token) {
    return apiClient.get('/car/get/all', headers(token));
  },
  getCar (token, id) {
    return apiClient.get(`/car/${id}`, headers(token))
  },
  postCar (token, car) {
    return apiClient.post('/car/create', car, headers(token))
  },
  editCar (token, carId, carDataToUpdate) {
    return apiClient.patch(`/car/edit/${carId}`, carDataToUpdate, headers(token))
  },
  deleteCar (token, carIdToDelete) {
    return apiClient.delete(`/car/delete/${carIdToDelete}`, headers(token))
  }
}
