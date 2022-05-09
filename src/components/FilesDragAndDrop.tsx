import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'

import fileValidated from '../util/FileValidation'
import '../styles/FilesDragAndDrop.scss'

const FilesDragAndDrop = ({ onFileChange }) => {
  const wrapperRef = useRef(null)
  const drag = React.useRef(null)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    wrapperRef.current.addEventListener('dragover', dragOver)
    wrapperRef.current.addEventListener('dragenter', dragEnter)
    wrapperRef.current.addEventListener('dragleave', dragLeave)
    wrapperRef.current.addEventListener('drop', handleDrop)

    return () => {
      wrapperRef.current.removeEventListener('dragover', dragOver)
      wrapperRef.current.removeEventListener('dragenter', dragEnter)
      wrapperRef.current.removeEventListener('dragleave', dragLeave)
      wrapperRef.current.removeEventListener('drop', handleDrop)
    }
  }, [])

  const dragOver = (e: {
    preventDefault: () => void
    stopPropagation: () => void
  }) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const dragEnter = (e: {
    preventDefault: () => void
    stopPropagation: () => void
    target: any
  }) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.target !== drag.current) {
      setDragging(true)
    }
  }

  const dragLeave = (e: {
    preventDefault: () => void
    stopPropagation: () => void
    target: any
  }) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.target === drag.current) {
      setDragging(false)
    }
  }

  const handleDrop = (e: {
    preventDefault: () => void
    stopPropagation: () => void
    dataTransfer: { files: any }
  }) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
    // this is required to convert FileList object to array
    let files = [...e.dataTransfer.files]

    // check if some uploaded file is not in one of the allowed formats
    const updatedFilesArr = [] //Array of validated files

    for (var i = 0; i < files.length; i++) {
      if (fileValidated.isValidateFormat(files[i])) {
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

      if (fileValidated.isValidateFileName(files[i])) {
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

      if (files[i].size < 1) {
        console.log('File is empty')
        toast.warn('Cannot upload empty file', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }

      if (fileValidated.isValidated(files[i])) {
        console.log('File ', files[i].name, ' is valid')
        updatedFilesArr.push(files[i])
      }
    }

    if (updatedFilesArr && updatedFilesArr.length) {
      onFileChange(updatedFilesArr)
    }
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <div ref={wrapperRef} className="drop-area">
        {dragging && (
          <div ref={drag} className="dnd-animation">
            Drop files here
          </div>
        )}
        <span className="dnd-title">Drag and Drop</span>
      </div>
    </React.Fragment>
  )
}

FilesDragAndDrop.propTypes = {
  onFileChange: PropTypes.func.isRequired,
}

export default FilesDragAndDrop
