import React from 'react'
import '../styles/Content.scss'

function Content(props: any) {
  console.log(props.content.files[0].name)
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
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              props.setOpenModal(false)
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Content
