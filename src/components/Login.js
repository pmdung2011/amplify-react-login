import { useState } from 'react'
import { Auth } from 'aws-amplify'
import '../styles/Login.scss'

function Login() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let handleSubmit = async function (event) {
    event.preventDefault()
    let response = await Auth.signIn(email, password)
    console.log('auth response: ', response)
  }

  const renderForm = (
    <div className="form-login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div class="logo">&nbsp;</div>
        <div className="login-title">
          <h2 className="title">File Transfer Login</h2>
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
          <input type="submit" />
        </div>
      </form>
    </div>
  )

  return (
    <div className="app">
      <div className="login-form">{renderForm}</div>
    </div>
  )
}

export default Login
