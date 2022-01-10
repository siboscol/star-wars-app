import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'
import Hero from '../components/Hero'
import { capitalize } from '@mui/material/utils'
import { useParams } from 'react-router-dom'
import swapiService, { Result } from '../services/swapi-service'
import { Backdrop, CircularProgress } from '@mui/material'

const imgUrl = 'https://starwars-visualguide.com/assets/img'

export default function OverviewPage() {
  let { resourses = '' } = useParams()
  const [resourcesList, setResourcesList] = useState<Result[]>([])
  const [title, setTitle] = useState<string>('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setResourcesList([])
    swapiService.getResourcesList(resourses).then(res => {
      const { results } = res.data
      if (results) {
        setResourcesList(results)
        setTitle(capitalize(resourses === 'people' ? 'characters' : resourses))
      } else {
        const results: Result[] = Object.keys(res.data).map((resourse: string) => {
          return {
            name: resourse === 'people' ? 'characters' : resourse,
            url: res.data[resourse]
          }
        })
        setResourcesList(results)
        setTitle('Star Wars')
      }
      setLoading(false)
    })
  }, [resourses])

  const getResourseId = (resourseUrl: string) => resourseUrl.split('/').slice(-2)[0]
  const getImgUrl = (resourseUrl: string) => {
    let category = !resourses ? 'categories' : resourses
    category = category === 'people' ? 'characters' : category
    let url = resourseUrl.includes('people')
      ? resourseUrl.replace('people', 'character')
      : resourseUrl
    return `${imgUrl}/${category}/${getResourseId(url)}.jpg`
  }

  return (
    <Container maxWidth="xl">
      <Hero title={title} />
      {!loading && (
        <Grid container spacing={2}>
          {resourcesList.map(resource => (
            <Grid item key={resource.name || resource.title} xs={12} sm={6} md={4}>
              <CardItem
                pageUrl={`${getResourseId(resource.url)}`}
                title={capitalize(resource.name || resource.title || '')}
                imgUrl={`${getImgUrl(resource.url)}`}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  )
}
