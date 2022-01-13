import { capitalize } from '@mui/material/utils'
import { Result, SWAPI_URL } from './services/SwapiService'

export const SW_IMAGES_URL = 'https://starwars-visualguide.com/assets/img'

export const getPageUrl = (resourseUrl: string) => {
  return resourseUrl.replace(SWAPI_URL, '')
}

export const getImgUrl = (resourseUrl: string) => {
  const urlSuffix = resourseUrl.replace(SWAPI_URL, '').slice(0, -1)
  const url = urlSuffix.replace('people', 'characters')
  const final = `${SW_IMAGES_URL}${url}.jpg`
  return final
}

export const getResourseId = (resourseUrl: string) => resourseUrl.split('/').slice(-2)[0]

export const getTitle = (resource: Result) =>
  capitalize(resource.name || `Episode ${resource.episode_id}: ${resource.title}` || '')
