import React, { useState, useRef } from 'react'
import { Auth } from 'aws-amplify'
import '../styles/Upload.scss'
export default function Upload(props) {
  const [selectedFile, setSelectedFile] = useState()
  const [isSelected, setIsSelected] = useState(false)
  const fileInput = useRef(null)
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
          <div className="uploader ">
            Pick from File Explorer
            <input
              type="file"
              name="files"
              ref={fileInput}
              multiple
              onChange={changeHandler}
              style={{ display: 'none' }}
            />
            <button
              className="upload-btn"
              onClick={() => fileInput.current.click()}
            >
              Select
            </button>
          </div>

          <p>OR</p>

          <button className="button-drag-drop" onClick={handleSubmission}>
            Drag and Drop
          </button>
          {/* <button onClick={signOut}>Sign out</button> */}
        </div>
      </fieldset>
    </div>
  )
}
