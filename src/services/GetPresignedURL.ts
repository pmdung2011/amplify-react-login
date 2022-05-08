import axios from 'axios'

const baseURL = 'https://apileads.parza.pfs-sandbox.com/v1/lead/upload?leadId='

const getPreURL = async (fileName: string) => {
  const newUrl = baseURL + fileName
  const response = await axios.get(newUrl)
  return response.data.url
}

export default getPreURL
