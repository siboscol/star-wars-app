import axios from 'axios'

const SWAPI_URL = 'https://swapi.dev/api'

export interface Result {
  episode_id?: number
  url: string
  name: string
  title?: string
}

class SwapiService {
  getResourcesList(resourses: string = '', page?: number, search?: string) {
    return axios.get(
      `${SWAPI_URL}/${resourses}${page || search ? '?' : ''}${page ? `page=${page}` : ''}${
        search ? `&search=${search}` : ''
      }`
    )
  }
  getResourceById(resourse: string, id: string) {
    return axios.get(`${SWAPI_URL}/${resourse}/${id}`)
  }
}

export default new SwapiService()
