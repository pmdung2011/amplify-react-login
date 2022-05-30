const getToken = () => {
  return localStorage.getItem('token')
}

const setToken = (token: string) => {
  localStorage.setItem('token', token)
}

const AuthData = {
  getToken,
  setToken,
}

export default AuthData
