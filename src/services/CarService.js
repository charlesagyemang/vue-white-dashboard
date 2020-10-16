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
  },

  ////////////////////////////////////////
  postInsurance (token, insurance) {
    return apiClient.post('/insurance/create', insurance, headers(token))
  },

  postRoadworthy (token, roadworthy) {
    return apiClient.post('/roadworthy/create', roadworthy, headers(token))
  },

  postIncometax (token, incometax) {
    return apiClient.post('/incometax/create', incometax, headers(token))
  },

  postMonthlyexpense (token, monthlyexpense) {
    return apiClient.post('/monthlyexpense/create', monthlyexpense, headers(token))
  },

  postDocumentlink (token, documentlink) {
    return apiClient.post('/documentlink/create', documentlink, headers(token))
  },
  ////////////////////////////////////////


  ////////////////GET ALL TAB/////////////

  getInsurances (token) {
    return apiClient.get('/insurance/get/all', headers(token));
  },

  getMonthlyexpenses (token) {
    return apiClient.get('/monthlyexpense/get/all', headers(token));
  },

  getIncometaxes (token) {
    return apiClient.get('/incometax/get/all', headers(token));
  },

  getRoadworthies (token) {
    return apiClient.get('/roadworthy/get/all', headers(token));
  },

  getDocumentlinks (token) {
    return apiClient.get('/documentlink/get/all', headers(token));
  },
  ///////////////////////////////////////


  //////////////////EDIT SERVICE/////////////////////
  editMonthlyExpense (token, monthlyExpenseId, monthlyExpenseDataToUpdate) {
    return apiClient.patch(`/monthlyexpense/edit/${monthlyExpenseId}`, monthlyExpenseDataToUpdate, headers(token))
  },
  ////////////////// EDIT ENDS HERE/////////////////



  /////////////////DELETE HERE////////////
  deleteMonthlyExpense (token, monthlyExpenseIdToDelete) {
    return apiClient.delete(`/monthlyexpense/delete/${monthlyExpenseIdToDelete}`, headers(token))
  },
  ///////////////////////////////////////
}
