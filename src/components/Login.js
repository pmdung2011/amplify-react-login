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
    <div className="container">
      <div class="logo">&nbsp;</div>
      <form onSubmit={handleSubmit} className="login-form">
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
          <input type="submit" className="submit-button" />
        </div>
      </form>
    </div>
  )

  return <div className="app">{renderForm}</div>
}

export default Login
