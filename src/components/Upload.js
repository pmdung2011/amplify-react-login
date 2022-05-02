import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Auth } from 'aws-amplify'

import Login from './Login'
export default function Upload() {
  const [selectedFile, setSelectedFile] = useState()
  const [isSelected, setIsSelected] = useState(false)

  const changeHandler = event => {
    setSelectedFile(event.target.files[0])
    setIsSelected(true)
  }

  async function signOut() {
    try {
      await Auth.signOut()
      return (
        <Router>
          <Routes>
            <Route exact path="/login" component={<Login />} />
          </Routes>
        </Router>
      )
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  const handleSubmission = () => {}
  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  )
}
