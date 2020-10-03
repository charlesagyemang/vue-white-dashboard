import apiClient from './axiosInstance'

const headers = (token) => {
  return { headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }}
}

export default {
  getStatistics (token) {
    // apiClient.headers = headers(token)
    // eslint-disable-next-line
    return apiClient.get(`/statistics/?creatorId=${localStorage.uberId}`, headers(token))
  }
}
