import axios from 'axios'

const BASE_URL = 'http://localhost:8888/apiLP2022/public/index.php/api/categories'

async function getCategories () {
  return await axios.get(BASE_URL)
}

async function getCategorie (id) {
  return await axios.get(BASE_URL+'/'+id)
}

async function postCategorie (data) {
  return await axios.post(BASE_URL, data)
}

export {getCategories, getCategorie, postCategorie}

