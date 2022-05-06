import React from 'react'
import PropTypes from 'prop-types'

import '../styles/FilesDragAndDrop.scss'

export default function FilesDragAndDrop({ onUpload }) {
  return <div className="FilesDragAndDrop__area">Drag and Drop</div>
}

FilesDragAndDrop.propTypes = {
  onUpload: PropTypes.func.isRequired,
}
