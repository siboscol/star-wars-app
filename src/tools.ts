import { capitalize } from '@mui/material/utils'
import { Result } from './services/swapi-service'

export const imgBaseUrl = 'https://starwars-visualguide.com/assets/img'

export const getPageUrl = (resourseUrl: string) => {
  return resourseUrl.replace('https://swapi.dev/api', '')
}

export const getImgUrl = (resourseUrl: string) => {
  const urlSuffix = resourseUrl.replace('https://swapi.dev/api', '').slice(0, -1)
  const url = urlSuffix.replace('people', 'characters')
  const final = `${imgBaseUrl}${url}.jpg`
  return final
}

export const getResourseId = (resourseUrl: string) => resourseUrl.split('/').slice(-2)[0]

export const getTitle = (resource: Result) =>
  capitalize(resource.name || `Episode ${resource.episode_id}: ${resource.title}` || '')
