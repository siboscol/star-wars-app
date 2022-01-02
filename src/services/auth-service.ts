import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/auth'

class AuthService {
  async login(username: string, password: string) {
    const res = await axios
      .post(`${BASE_URL}/signin`, {
        username,
        password
      })
    if (res.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(res.data))
    }
    return res.data
  }

  logout() {
    localStorage.removeItem('user')
  }

  register(username: string, email: string, password: string) {
    return axios.post(`${BASE_URL}/signup`, {
      username,
      email,
      password
    })
  }

  getCurrentUser() {
    const userStr = localStorage.getItem('user')
    if (userStr) return JSON.parse(userStr)
    return null
  }

  getAuthHeader() {
    const userStr = localStorage.getItem('user')
    let user = null
    if (userStr) user = JSON.parse(userStr)

    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken }
    } else {
      return {}
    }
  }
}

export default new AuthService()
