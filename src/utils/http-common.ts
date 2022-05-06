import axios from 'axios'
export default axios.create({
  baseURL: 'https://apileads.parza.pfs-sandbox.com/v1/lead/upload',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
