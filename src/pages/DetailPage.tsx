import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Backdrop, capitalize, CircularProgress, Container, Paper } from '@mui/material'
import swapiService from '../services/swapi-service'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero'

export default function DetailPage() {
  const { resourses = '', id = '' } = useParams()
  const [title, setTitle] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState<any>({})
  const [species, setSpecies] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [films, setFilms] = useState([])
  const [starships, setStarships] = useState([])
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    const resourceName = resourses === 'characters' ? 'people' : resourses
    setLoading(true)
    swapiService.getResourceById(resourceName, id).then(res => {
      const {
        species,
        vehicles,
        films,
        starships,
        planets,
        people,
        pilots,
        characters,
        residents,
        release_date,
        created,
        edited,
        url,
        ...details
      } = res.data
      setDetails(details)
      setTitle(details.name || details.title)
      if (species) {
        setSpecies(species)
      }
      if (vehicles) {
        setVehicles(vehicles)
      }
      if (films) {
        setFilms(films)
      }
      if (starships) {
        setStarships(starships)
      }
      if (planets) {
        setPlanets(planets)
      }
      if (people) {
        setPeople(people)
      }
      if (pilots) {
        setPeople(pilots)
      }
      if (residents) {
        setPeople(residents)
      }
      if (characters) {
        setPeople(characters)
      }
      setLoading(false)
    })
  }, [])

  return (
    <Container maxWidth="xl">
      <Hero title={title} />
      {!loading && (
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
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
              <Typography key={index} variant="h6" gutterBottom>
                {capitalize(detail.replaceAll('_', ' '))}: {details[detail]}
              </Typography>
            ))}
          </Grid>
        </Grid>
      )}
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  )
}
