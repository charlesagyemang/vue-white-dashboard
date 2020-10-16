import apiClient from './axiosInstance'

const headers = (token) => {
  return { headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }}
}

export default {
  login (loginData) {
    return apiClient.post('/users/login', loginData)
  },
  register (registerData) {
    return apiClient.post(`/users`, registerData)
  },
  update (updateData) {
    // eslint-disable-next-line
    return apiClient.post(`/users/update/${localStorage.uberId}`, updateData, headers(localStorage.uberToken));
  }
  // api/users/update/${user.id}
}
