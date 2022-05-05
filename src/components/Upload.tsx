import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Content from '../components/Content'
import '../styles/Upload.scss'
export default function Upload(props) {
  //props is passed for future use
  const initialStateFiles = { files: [] }
  const [selectedFiles, setSelectedFiles] = useState(initialStateFiles)

  const [modalOpen, setModalOpen] = useState(false)
  const fileInput = useRef(null)

  // console.log(selectedFiles)

  const closeModal = () => {
    setModalOpen(false)
    setSelectedFiles(initialStateFiles) // reset selected files
  }

  const handleUpload = (e: { preventDefault: () => void }) => {
    e.preventDefault() //prevent the form from submitting

    toast.success('File Upload Successful', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  //Validate file type and file size here
  const getPdfType = (file: any) => {
    return file.type === 'application/pdf'
  }

  const handleSelect = (event: { target: { files: any } }) => {
    var files = event.target.files
    if (!files) {
      return
    }
    var filesArr = Array.prototype.slice.call(files)
    console.log('Selected files:', filesArr)

    //Retrieve only pdf files
    filesArr = filesArr.filter(getPdfType)
    console.log('Selected files after validated: ', filesArr)
    setSelectedFiles({ files: filesArr })
    setModalOpen(true)
    fileInput.current.value = null // reset file input to re-render when selecting same file
  }

  const handleDragDrop = () => {}

  //Render Upload component
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
                onChange={handleSelect}
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
              <Content
                content={selectedFiles}
                setOpenModal={closeModal}
                handleUpload={handleUpload}
              />
            )}
            <p className="mid-text">OR</p>

            <button className="button-drag-drop" onClick={handleDragDrop}>
              Drag and drop
            </button>
            {/* <button onClick={signOut}>Sign out</button> */}
          </div>
        </div>
        <div className="upload-status">
          <ToastContainer />
        </div>
      </fieldset>
    </div>
  )
}
