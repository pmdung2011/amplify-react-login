import axios from 'axios'

const baseURL = 'https://apileads.parza.pfs-sandbox.com/v1/lead/upload?leadId='

const getSignedUrl = async (fileName: string) => {
  const newUrl = baseURL + fileName
  const response = await axios.get(newUrl)
  return JSON.stringify(response)
}

export default getSignedUrl
