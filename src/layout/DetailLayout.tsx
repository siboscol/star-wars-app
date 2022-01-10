import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { capitalize, Container, Paper } from '@mui/material'
import swapiService from '../services/swapi-service'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DetailLayout() {
  const location = useLocation()
  let resource = location.pathname.slice(1).split('/')[0]
  const { id = '' } = useParams()
  const [details, setDetails] = useState<any>({})
  const [species, setSpecies] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [films, setFilms] = useState([])
  const [starships, setStarships] = useState([])
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    resource = resource === 'characters' ? 'people' : resource
    swapiService.getResourceById(resource, id).then(res => {
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
    })
  }, [])

  return (
    <Container maxWidth="xl">
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
                resource === 'people' ? 'characters' : resource
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
    </Container>
  )
}
