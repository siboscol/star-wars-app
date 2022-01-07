const fakeAuthProvider = {
  isAuthenticated: false,
  login(email: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      fakeAuthProvider.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify({ email, password }))
      resolve(email)
    })
  },
  logout() {
    return new Promise<void>((resolve, reject) => {
      fakeAuthProvider.isAuthenticated = false
      localStorage.removeItem('user')
      resolve()
    })
  },
  getCurrentUser(): Promise<string> {
    return new Promise((resolve, reject) => {
      const userStr = localStorage.getItem('user')
      if (userStr){
        const user = JSON.parse(userStr)
        resolve(user.email)
      }
      reject()
    })
  }
}

export { fakeAuthProvider }
