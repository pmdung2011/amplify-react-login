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
      // console.log('auth event', event)
      // console.log('user: ', event.payload.data)
      if (!event.payload.data.username) {
        alert('User not found!')
      } else {
        setCurrentUser(event.payload.data.username)
      }
    })
  })
  return <div>{currentUser ? <Upload /> : <Login />}</div>
}
