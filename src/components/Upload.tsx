import React, { useState, useRef } from 'react'

import Content from '../components/Content'
import '../styles/Upload.scss'
export default function Upload(props) {
  //props is passed for future use
  const initialStateFiles = { files: [] }
  const [selectedFiles, setSelectedFiles] = useState(initialStateFiles)

  const [modalOpen, setModalOpen] = useState(false)
  const fileInput = useRef(null)

  console.log(selectedFiles)
  console.log(modalOpen)

  const closeModal = () => {
    setModalOpen(false)
    setSelectedFiles(initialStateFiles) // reset selected files
  }

  const changeHandler = (event: { target: { files: any } }) => {
    var files = event.target.files
    console.log(files)
    var filesArr = Array.prototype.slice.call(files)
    setSelectedFiles({ files: filesArr })
    setModalOpen(true)
    fileInput.current.value = null // reset file input to re-render when selecting same file
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
                className="select-btn"
                onClick={() => fileInput.current.click()}
              >
                Select
              </button>
            </div>
            {modalOpen && (
              <Content content={selectedFiles} setOpenModal={closeModal} />
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
