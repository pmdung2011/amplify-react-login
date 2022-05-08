import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Auth } from 'aws-amplify'

import Content from '../components/Content'
import DragnDrop from '../components/FilesDragAndDrop'
import '../styles/Upload.scss'
export default function Upload(props) {
  //props is passed for future use
  const initialStateFiles = { files: [] }
  const [selectedFiles, setSelectedFiles] = useState(initialStateFiles)

  const [modalOpen, setModalOpen] = useState(false)
  const fileInput = useRef(null)

  const closeModal = () => {
    setModalOpen(false)
    setSelectedFiles(initialStateFiles) // reset selected files
  }

  // async function signOut() {
  //   try {
  //     await Auth.signOut()
  //     window.location.reload()
  //   } catch (error) {
  //     console.log('error signing out: ', error)
  //   }
  // }

  //Validate file type
  const getPdfType = (file: any) => {
    return file.type === 'application/pdf'
  }

  var numbers = /^[0-9]+$/

  const handleSelect = (event: { target: { files: any } }) => {
    var files = event.target.files
    if (!files) {
      return
    }
    var filesArr = Array.prototype.slice.call(files)
    console.log('Selected files:', filesArr)

    const isNotValidateFormat = filesArr.find(
      (file: { type: string }) => file.type !== 'application/pdf'
    )

    const isValidateFileName = filesArr.find((file: { name: string }) =>
      file.name.match(numbers)
    )

    if (isNotValidateFormat) {
      console.log('Only pdf files are allowed!!!')
      toast.warn('Only pdf files are allowed!!!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    if (!isValidateFileName) {
      console.log('Not valid file name')
      toast.warn('Not valid file name!!!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    //Retrieve only pdf files
    filesArr = filesArr.filter(getPdfType)
    console.log('Selected files after validated: ', filesArr)
    setSelectedFiles({ files: filesArr })
    setModalOpen(true)
    fileInput.current.value = null // reset file input to re-render when selecting same file
  }

  //Drag and Drop selecting files
  const onFileChange = (filesProp: any) => {
    console.log(filesProp)
    if (filesProp.length > 0) {
      setSelectedFiles({ files: filesProp })
      setModalOpen(true)
    }
  }
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
            {modalOpen && selectedFiles.files.length > 0 && (
              <Content content={selectedFiles} setOpenModal={closeModal} />
            )}
            <p className="mid-text">OR</p>

            <DragnDrop onFileChange={onFileChange} />
          </div>
        </div>
        <div className="upload-status">
          <ToastContainer />
        </div>
      </fieldset>
    </div>
  )
}
