import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import '../styles/FilesDragAndDrop.scss'

const FilesDragAndDrop = props => {
  const wrapperRef = useRef(null)

  const [fileList, setFileList] = useState([])

  const onDragEnter = () => wrapperRef.current.classList.add('dragover')

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

  const onDrop = () => wrapperRef.current.classList.remove('dragover')

  const onFileDrop = e => {
    const newFile = e.target.files[0]
    if (newFile) {
      const updatedList = [...fileList, newFile]
      setFileList(updatedList)
      props.onFileChange(updatedList)
    }
  }

  const fileRemove = file => {
    const updatedList = [...fileList]
    updatedList.splice(fileList.indexOf(file), 1)
    setFileList(updatedList)
    props.onFileChange(updatedList)
  }

  return (
    <div
      ref={wrapperRef}
      className="drop-area"
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      Drag and Drop
      <input
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={onFileDrop}
      />
    </div>
  )
}

FilesDragAndDrop.propTypes = {
  onFileChange: PropTypes.func,
}

export default FilesDragAndDrop
