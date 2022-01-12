import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {
  Avatar,
  Backdrop,
  Box,
  capitalize,
  CircularProgress,
  Container,
  Paper
} from '@mui/material'
import swapiService, { Result } from '../services/swapi-service'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Related from '../components/Related'
import { getPageUrl, getImgUrl } from '../tools'

type Related = {
  [key: string]: string[]
}

export default function DetailPage() {
  const { resourses = '', id = '' } = useParams()
  const [title, setTitle] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState<any>({})
  const [related, setRelated] = useState<Related>({})
  const [homeworld, setHomeworld] = useState<Result>()

  useEffect(() => {
    const resourceName = resourses === 'characters' ? 'people' : resourses
    setLoading(true)
    setHomeworld(undefined)
    swapiService.getResourceById(resourceName, id).then(res => {
      const {
        name,
        title,
        episode_id,
        release_date,
        created,
        edited,
        url,
        homeworld,
        films,
        characters,
        planets,
        people,
        pilots,
        species,
        residents,
        starships,
        vehicles,
        ...details
      } = res.data
      setDetails(details)
      const related: Related = {
        films,
        characters,
        planets,
        people,
        pilots,
        species,
        residents,
        starships,
        vehicles
      }
      setRelated(related)
      if (title && episode_id) {
        setTitle(`Episode ${episode_id}: ${title}`)
      }
      if (name) {
        setTitle(name)
      }
      if (homeworld) {
        swapiService.getResourceByUrl(homeworld).then(planet => {
          setHomeworld(planet)
        })
      }
      setLoading(false)
    })
  }, [resourses])

  return (
    <Container maxWidth="xl">
      <Hero title={title} />
      {!loading && (
        <Grid container spacing={5} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                minHeight: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(https://starwars-visualguide.com/assets/img/${
                  resourses === 'people' ? 'characters' : resourses
                }/${id}.jpg), url('https://starwars-visualguide.com/assets/img/placeholder.jpg')`
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            {Object.keys(details).map((detail, index) => (
              <Typography key={index} variant="subtitle1" gutterBottom>
                {capitalize(detail.replaceAll('_', ' '))}:{' '}
                <Box sx={{ color: 'warning.light', display: 'inline', fontSize: 14 }}>
                  {details[detail]}
                </Box>
              </Typography>
            ))}
            {homeworld && (
              <Typography variant="subtitle1" gutterBottom>
                Homeworld:{' '}
                <Box
                  sx={{ color: 'warning.light', display: 'inline', fontSize: 14 }}
                  component={Link}
                  to={getPageUrl(homeworld.url)}
                >
                  {homeworld.name}
                  <Avatar
                    src={getImgUrl(homeworld.url)}
                    alt=" "
                    sx={{
                      backgroundImage:
                        'url(https://starwars-visualguide.com/assets/img/placeholder-small.jpg)',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </Box>
              </Typography>
            )}
          </Grid>
        </Grid>
      )}
      <Grid container spacing={5}>
        {Object.keys(related)
          .filter(r => related[r])
          .map((r: string, index: number) => (
            <Grid item key={index} xs={12} sm={4} md={3}>
              <Related name={r} urls={related[r]} />
            </Grid>
          ))}
      </Grid>
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  )
}
