import axios from 'axios'

const SWAPI_URL = 'https://swapi.dev/api'

export interface Result {
  episode_id?: number
  url: string
  name: string
  title?: string
}

class SwapiService {
  getResourcesList(resourses: string = '', page: number = 1) {
    return axios.get(`${SWAPI_URL}/${resourses}${page > 1 ? `?page=${page}` : ''}`)
  }
  getResourceById(resourse: string, id: string) {
    return axios.get(`${SWAPI_URL}/${resourse}/${id}`)
  }
}

export default new SwapiService()
