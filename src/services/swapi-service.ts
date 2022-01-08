import axios from 'axios'

const SWAPI_URL = 'https://swapi.dev/api'

class SwapiService {
  getResources() {
    return axios.get(`${SWAPI_URL}`)
  }
  getPeopleById(peopleId: number) {
    return axios.get(`${SWAPI_URL}/people/${peopleId}`)
  }
}

export default new SwapiService()
