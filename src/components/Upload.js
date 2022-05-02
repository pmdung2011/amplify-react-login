import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import '../styles/Upload.scss'
export default function Upload(props) {
  const [selectedFile, setSelectedFile] = useState()
  const [isSelected, setIsSelected] = useState(false)

  const changeHandler = event => {
    setSelectedFile(event.target.files[0])
    setIsSelected(true)
  }

  async function signOut() {
    try {
      await Auth.signOut()
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  const handleSubmission = () => {}
  return (
    <div className="container">
      <fieldset className="upload-form">
        <legend>sftp.stfu.com</legend>
        <div className="logo">&nbsp;</div>
        <h2>Upload documents</h2>

        <div className="input-container">
          <label className="uploader">
            Pick from File Explorer
            <input type="file" multiple name="file" onChange={changeHandler} />
          </label>
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
            <p>OR</p>
          )}

          <button className="button-container" onClick={handleSubmission}>
            Drag and Drop
          </button>
          {/* <button onClick={signOut}>Sign out</button> */}
        </div>
      </fieldset>
    </div>
  )
}
