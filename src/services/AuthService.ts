class AuthService {
  login(email: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      localStorage.setItem('user', JSON.stringify({ email, password }))
      resolve(email)
    })
  }
  logout() {
    return new Promise<void>((resolve, reject) => {
      localStorage.removeItem('user')
      resolve()
    })
  }
  signup(firstName: string, lastName: string, email: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      localStorage.setItem('user', JSON.stringify({ firstName, lastName, email, password }))
      resolve(email)
    })
  }
  getCurrentUser(): Promise<string> {
    return new Promise((resolve, reject) => {
      const userStr = localStorage.getItem('user')
      if (userStr) {
        const user = JSON.parse(userStr)
        resolve(user.email)
      }
      resolve('')
    })
  }
}

export default new AuthService()
