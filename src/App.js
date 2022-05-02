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
      setCurrentUser(event.payload.data.username)
    })
  })
  return <div>{currentUser ? <Upload user={currentUser} /> : <Login />}</div>
}
