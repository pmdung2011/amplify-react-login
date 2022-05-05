import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

// import uploadService from '../services/upload-files.service'
import '../styles/Content.scss'

function Content(props: any) {
  const [progress, setProgress] = React.useState(0)

  //Invoke upload service to s3 file by file
  const handleUpload = () => {
    for (let i = 0; i < props.content.files.length; i++) {
      console.log('Uploading file: ', props.content.files[i])
      // const file = props.content.files[i]
      // uploadService(file)
    }
  }

  return (
    <div className="modal">
      <div className="modalContainer">
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
                <ProgressBar variant="success" now={60} />
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
