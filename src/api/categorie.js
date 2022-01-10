import axios from 'axios'

const BASE_URL = 'http://localhost/my_project/public/index.php/api/categories'
const BASE_URL_M = 'http://localhost/my_project/public/index.php/api/messages'
const BASE_URL_U = 'http://localhost/my_project/public/index.php/api/users'

async function getCategories () {
  return await axios.get(BASE_URL)
}

async function getCategorie (id) {
  return await axios.get(BASE_URL+'/'+id)
}

async function getMessages () {
  return await axios.get(BASE_URL_M)
}

async function postCategorie (data) {
  return await axios.post(BASE_URL, data)
}
async function postMessage (data) {
  return await axios.post(BASE_URL_M, data)
}
async function deleteMessage (data) {
  return await axios.delete(BASE_URL_M, data)
}
async function postUser (data) {
  return await axios.post(BASE_URL_U, data)
}

export {getCategories, getCategorie,getMessages, postCategorie, postMessage,postUser,deleteMessage}

