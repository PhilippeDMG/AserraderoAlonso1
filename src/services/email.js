import axios from "axios"
// const baseUrl = 'http://localhost:3001/api/emails'
const baseUrl = "/api/emails"

export const sendEmail = async (email) => {
  return await axios.post(baseUrl, email).then((res) => res.data)
}
