import { useCallback, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'
import Hero from '../components/Hero'
import { useParams } from 'react-router-dom'
import swapiService, { Result } from '../services/SwapiService'
import { Backdrop, CircularProgress, Pagination } from '@mui/material'
import SearchField from '../components/SearchField'
import { getResourseId, getTitle, SW_IMAGES_URL } from '../tools'
import { useErrorHandler } from 'react-error-boundary'

export default function OverviewPage() {
  const { resourses = '' } = useParams()
  const [resourcesList, setResourcesList] = useState<Result[]>([])
  const [search, setSearch] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [page, setPage] = useState<number>(0)
  const [pagination, setPagination] = useState<boolean>(false)
  const [count, setCount] = useState(10)
  const [loading, setLoading] = useState(false)
  const handleError = useErrorHandler()

  const getResourcesList = async (resourses: string, page?: number, search?: string) => {
    setLoading(true)
    swapiService
      .getResourcesList(resourses, page, search)
      .then(res => {
        const { results, count } = res.data
        if (results) {
          if (resourses === 'films') {
            const sortedFilms = results.sort((filmA: Result, filmB: Result) => {
              return (filmA.episode_id as number) - (filmB.episode_id as number)
            })
            setResourcesList(sortedFilms)
          } else {
            setResourcesList(results)
          }
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
        handleError(e)
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
    getResourcesList(resourses, value, search)
  }

  const getImgUrl = useCallback(
    (resourseUrl: string) => {
      let category = !resourses ? 'categories' : resourses
      category = category === 'people' ? 'characters' : category
      let url = resourseUrl.includes('people')
        ? resourseUrl.replace('people', 'character')
        : resourseUrl
      return `${SW_IMAGES_URL}/${category}/${getResourseId(url)}.jpg`
    },
    [resourcesList]
  )

  return (
    <Container maxWidth="lg">
      <Hero title={title} />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mb: 4 }}
      >
        <Grid item>
          {resourses && (
            <SearchField
              callback={search => {
                setPage(1)
                setSearch(search)
                getResourcesList(resourses, undefined, search)
              }}
              delay={500}
            />
          )}
        </Grid>
        {pagination && (
          <Grid item>
            <Pagination count={count} page={page} onChange={handleChange} />
          </Grid>
        )}
      </Grid>
      {!loading && (
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {resourcesList.map(resource => (
            <Grid item key={resource.name || resource.title} xs={12} sm={3} md={3}>
              <CardItem
                pageUrl={`${getResourseId(resource.url)}`}
                title={getTitle(resource)}
                imgUrl={`${getImgUrl(resource.url)}`}
              />
            </Grid>
          ))}
          {!resourcesList.length && (
            <Grid item xs={12} sm={4} md={4}>
              <div>{`No ${resourses || 'resources'} found.`}</div>
            </Grid>
          )}
        </Grid>
      )}
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  )
}
