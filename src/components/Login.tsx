import { useState } from 'react'
import { Auth } from 'aws-amplify'
import { ToastContainer, toast } from 'react-toastify'

import AuthData from '../util/AuthData'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/Login.scss'

function Login() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let handleSubmit = async function (event) {
    event.preventDefault()
    try {
      const user = await Auth.signIn(email, password)
      console.log(user)
      console.log('ID_token: ', user.signInUserSession.idToken.jwtToken)
      //Save token to localStorage
      AuthData.setToken(user.signInUserSession.idToken.jwtToken)
    } catch (error) {
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log('error signing in', error)
    }
  }

  const renderForm = (
    <div className="container">
      <fieldset className="login-form">
        <legend>sftp.stfu.com</legend>
        <form onSubmit={handleSubmit}>
          <div className="logo">&nbsp;</div>
          <div className="input-form-container">
            <div className="login-title">
              <h2 className="title">File Transfer Log In</h2>
            </div>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                name="uname"
                required
                onChange={e => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="pass"
                required
                onChange={e => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div className="button-container">
              <input type="submit" className="submit-button" />
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  )

  return (
    <div className="app">
      {renderForm}
      <ToastContainer />
    </div>
  )
}

export default Login
