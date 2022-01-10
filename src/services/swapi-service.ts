import axios from 'axios'

const SWAPI_URL = 'https://swapi.dev/api'

export interface Result {
  url: string
  name: string
  title?: string
}

class SwapiService {
  getResourcesList(resourses: string = '') {
    return axios.get(`${SWAPI_URL}/${resourses}`)
  }
  getResourceById(resourse: string, id: string) {
    return axios.get(`${SWAPI_URL}/${resourse}/${id}`)
  }
}

export default new SwapiService()
