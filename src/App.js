import Amplify, { Hub } from 'aws-amplify'
import { useState, useEffect } from 'react'

import '@aws-amplify/ui-react/styles.css'

import awsExports from './aws-exports'

import Upload from './components/Upload'
import Login from './components/Login'
Amplify.configure(awsExports)

export default function App() {
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    Hub.listen('auth', event => {
      console.log('auth event', event)
      setCurrentUser(event.payload.data)
    })
  })
  return (
    <div>
      {/* <AmplifyProvider theme={theme}>
        <Authenticator hideSignUp={true}>
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user.username}</h1>
              <Upload />
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </AmplifyProvider> */}

      {currentUser ? <Upload /> : <Login />}
    </div>
  )
}
