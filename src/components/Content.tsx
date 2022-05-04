import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

import '../styles/Content.scss'

function Content(props: any) {
  console.log(props.content.files)
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
              <li key={index}>
                <p className="file-name">{file.name}</p>
                <p className="progress-bar">
                  <ProgressBar variant="success" now={40} />
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer">
          <button>Upload</button>
        </div>
      </div>
    </div>
  )
}

export default Content
