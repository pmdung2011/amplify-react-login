import React from 'react'
import axios from 'axios'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { ToastContainer, toast } from 'react-toastify'

import UploadService from '../services/FileUploadService'
import getSignedUrl from '../services/GetPresignedURL'
import '../styles/Content.scss'

function Content(props: any) {
  const [progress, setProgress] = React.useState(0)
  const listFiles = props.content.files

  //Invoke upload service file by file
  const handleUpload = e => {
    e.preventDefault() //prevent the form from submitting

    var options = {
      headers: {
        'Content-Type': 'pdf',
      },
      onUploadProgress: (progressEvent: any) => {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        console.log(percentCompleted)
        setProgress(percentCompleted)
      },
    }

    for (let i = 0; i < listFiles.length; i++) {
      // const file = props.content.files[i]
      var signedUrl = getSignedUrl(listFiles[i].name)
      axios
        .put(signedUrl, listFiles[i], options)
        .then(res => {
          if (res.status === 200) {
            console.log('File uploaded successfully')
            toast.success('File uploaded successfully')
          } else {
            console.log('File upload failed')
            toast.error('File upload failed')
          }
          console.log(res)
        })
        .catch(err => console.log(err))
    }
  }

  const fileRemove = (file: any) => {
    console.log('File removed:', file)
    props.content.files.splice(props.content.files.indexOf(file), 1)
  }

  return (
    <div className="modal">
      <div className="modalContainer">
        <ToastContainer />
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              props.setOpenModal(false)
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <ul>
            {props.content?.files.map((file: any, index: any) => (
              <li key={index} className="file-item">
                <div className="file-name">{file.name}</div>
                <ProgressBar variant="success" now={progress} />
              </li>
            ))}
          </ul>
        </div>

        <div className="footer">
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    </div>
  )
}

export default Content
