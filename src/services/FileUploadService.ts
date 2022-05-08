import axios from 'axios'
import getPreUrl from '../services/GetPresignedURL'

const upload = (file: any, onUploadProgress: any) => {
  var signedUrl = getPreUrl(file.name)

  var options = {
    headers: {
      'Content-Type': file.type,
    },
    onUploadProgress: onUploadProgress,
  }

  return axios.put(signedUrl, file, options)
}
const getFiles = () => {
  return axios.get('/files')
}
const FileUploadService = {
  upload,
  getFiles,
}
export default FileUploadService
