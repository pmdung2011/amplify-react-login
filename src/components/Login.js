import { useState } from 'react'
import { Auth } from 'aws-amplify'

function Login() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let handleSubmit = async function (event) {
    event.preventDefault()
    let response = await Auth.signIn(email, password)
    console.log('auth response: ', response)
  }

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
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
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  )
}

export default Login
