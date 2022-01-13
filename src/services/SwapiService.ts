import axios from 'axios'

// TODO Swap to following server if issues while retrieving data
// export const SWAPI_URL = 'https://swapi.py4e.com/api'
export const SWAPI_URL = 'https://swapi.dev/api'

export interface Result {
  episode_id?: number
  url: string
  name: string
  title?: string
}

class SwapiService {
  async get(url: string) {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      throw Error('Network error while fetching resourses')
    }
  }
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
  async getResoursesByUrls(urls: string[]) {
    try {
      const urlsPromises = urls.map(url => axios.get(url))
      const res = await Promise.all(urlsPromises)
      return res.map(res => res.data)
    } catch {
      throw Error('Error fetching resourses urls')
    }
  }
}

export default new SwapiService()
