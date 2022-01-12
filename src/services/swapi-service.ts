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
  async getResourceByUrl(resourseUrl: string) {
    const res = await axios.get(resourseUrl)
    return res.data
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
