import React, { useState, useRef } from 'react'

import Content from '../components/Content'
import '../styles/Upload.scss'
export default function Upload(props) {
  const initialStateFiles = { files: [] }
  const [selectedFiles, setSelectedFiles] = useState(initialStateFiles)

  const [modalOpen, setModalOpen] = useState(false)
  const fileInput = useRef(null)

  const clearStateFiles = () => {
    setSelectedFiles({ ...initialStateFiles })
  }

  const clear = props => {
    setModalOpen(props)
    clearStateFiles()
  }

  const changeHandler = (event: { target: { files: any } }) => {
    var files = event.target.files
    console.log(files)
    var filesArr = Array.prototype.slice.call(files)
    console.log(filesArr.length)
    setSelectedFiles({ files: [...filesArr] })
    setModalOpen(true)
  }

  const handleSubmission = () => {}
  return (
    <div className="container">
      <fieldset className="upload-form">
        <legend>sftp.stfu.com</legend>
        <div className="logo">&nbsp;</div>

        <div className="uploader-container">
          <h2>Upload Documents</h2>

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
            {modalOpen && (
              <Content content={selectedFiles} setOpenModal={setModalOpen} />
            )}
            <p className="mid-text">OR</p>

            <button className="button-drag-drop" onClick={handleSubmission}>
              Drag and drop
            </button>
            {/* <button onClick={signOut}>Sign out</button> */}
          </div>
        </div>
      </fieldset>
    </div>
  )
}
