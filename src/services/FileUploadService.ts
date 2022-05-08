// import axios from 'axios'
// import getPreUrl from '../services/GetPresignedURL'

// const upload = async (file: any, onUploadProgress: any) => {
//   var signedUrl = getPreUrl(file.name)

//   var options = {
//     headers: {
//       'Content-Type': file.type,
//     },
//     onUploadProgress: (progressEvent: any) => {
//       var percentCompleted = Math.round(
//         (progressEvent.loaded * 100) / progressEvent.total
//       )
//       console.log(percentCompleted)
//     },
//   }

//   return await axios.put(signedUrl, file, options)
// }
// const getFiles = () => {
//   return axios.get('/files')
// }
// const FileUploadService = {
//   upload,
//   getFiles,
// }
// export default FileUploadService
