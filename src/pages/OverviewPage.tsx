import { useCallback, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'
import Hero from '../components/Hero'
import { capitalize } from '@mui/material/utils'
import { useParams } from 'react-router-dom'
import swapiService, { Result } from '../services/swapi-service'
import { Backdrop, CircularProgress, Pagination } from '@mui/material'

const imgUrl = 'https://starwars-visualguide.com/assets/img'

export default function OverviewPage() {
  let { resourses = '' } = useParams()
  const [resourcesList, setResourcesList] = useState<Result[]>([])
  const [title, setTitle] = useState<string>('')
  const [page, setPage] = useState<number>(0)
  const [pagination, setPagination] = useState<boolean>(false)
  const [count, setCount] = useState(10)
  const [loading, setLoading] = useState(false)

  const getResourcesList = async (resourses: string, page: number) => {
    setLoading(true)
    swapiService
      .getResourcesList(resourses, page)
      .then(res => {
        const { results, count } = res.data
        if (results) {
          setResourcesList(results)
          setCount(Math.ceil(count / 10))
          setPagination(count > 10)
          setTitle(resourses === 'people' ? 'characters' : resourses)
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
      })
      .catch(e => {
        console.log(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getResourcesList(resourses, 1)
  }, [resourses])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    getResourcesList(resourses, value)
  }

  const getImgUrl = useCallback(
    (resourseUrl: string) => {
      let category = !resourses ? 'categories' : resourses
      category = category === 'people' ? 'characters' : category
      let url = resourseUrl.includes('people')
        ? resourseUrl.replace('people', 'character')
        : resourseUrl
      return `${imgUrl}/${category}/${getResourseId(url)}.jpg`
    },
    [resourcesList]
  )

  const getResourseId = (resourseUrl: string) => resourseUrl.split('/').slice(-2)[0]

  return (
    <Container maxWidth="lg">
      <Hero title={title} />
      {!loading && (
        <Container>
          {pagination && (
            <Grid container justifyContent="flex-end" spacing={3} sx={{ mb: 4 }}>
              <Grid item>
                <Pagination count={count} page={page} onChange={handleChange} />
              </Grid>
            </Grid>
          )}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {resourcesList.map(resource => (
              <Grid item key={resource.name || resource.title} xs={12} sm={4} md={4}>
                <CardItem
                  pageUrl={`${getResourseId(resource.url)}`}
                  title={capitalize(resource.name || `Episode ${resource.episode_id}: ${resource.title}` || '')}
                  imgUrl={`${getImgUrl(resource.url)}`}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  )
}
