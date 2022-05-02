import React, { useState, useRef } from 'react'
import { Auth } from 'aws-amplify'
import '../styles/Upload.scss'
export default function Upload(props) {
  const [selectedFiles, setSelectedFiles] = useState(undefined)
  const [isSelected, setIsSelected] = useState(false)
  const [progressInfos, setProgressInfos] = useState({ val: [] });
  const fileInput = useRef(null)

  const changeHandler = event => {
    // var files = event.target.files
    // console.log(files)
    // var filesArr = Array.prototype.slice.call(files)
    // console.log(typeof filesArr)
    // var temp = [...selectedFiles, ...filesArr]
    // setSelectedFiles(temp)
    // console.log(selectedFiles)
    setSelectedFiles(event.target.files);
    setProgressInfos({ val: [] });
    setIsSelected(true)
  }

  // async function signOut() {
  //   try {
  //     await Auth.signOut()
  //   } catch (error) {
  //     console.log('error signing out: ', error)
  //   }
  // }

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
