import axios from 'axios'

const SWAPI_URL = 'https://swapi.dev/api'

export interface Result {
  url: string
  name: string
}

class SwapiService {
  getResources() {
    return axios.get(`${SWAPI_URL}`)
  }
  getResourceById(resourse: string, id: string) {
    return axios.get(`${SWAPI_URL}/${resourse}/${id}`)
  }
  getCharacters() {
    return axios.get(`${SWAPI_URL}/people`)
  }
  getFilms() {
    return axios.get(`${SWAPI_URL}/films`)
  }
  getPlanets() {
    return axios.get(`${SWAPI_URL}/planets`)
  }
  getVehicles() {
    return axios.get(`${SWAPI_URL}/vehicles`)
  }
  getSpecies() {
    return axios.get(`${SWAPI_URL}/species`)
  }
  getStarships() {
    return axios.get(`${SWAPI_URL}/starships`)
  }
  getPeopleById(peopleId: number) {
    return axios.get(`${SWAPI_URL}/people/${peopleId}`)
  }
}

export default new SwapiService()
