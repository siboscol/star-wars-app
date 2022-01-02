import axios from 'axios'
import AuthService from './auth-service'

const SWAPI_URL = 'https://swapi.dev/api'

class SwapiService {
  getPeopleById(peopleId: number) {
    return axios.get(`${SWAPI_URL}/people/${peopleId}`)
  }
}

export default new SwapiService()
