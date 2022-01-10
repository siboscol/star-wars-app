import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'
import { useEffect, useState } from 'react'
import swapiService, { Result } from '../services/swapi-service'

const imgUrl = 'https://starwars-visualguide.com/assets/img/films'

export interface Film extends Result {
  title: string
}

export default function FilmsPage() {
  const [films, setFilms] = useState<Film[]>([])

  useEffect(() => {
    swapiService.getFilms().then(res => {
      setFilms(res.data.results)
    })
  }, [])

  return (
    <Container sx={{ py: 2 }} maxWidth="xl">
      <Grid container spacing={2}>
        {films.map((film, index) => (
          <Grid item key={film.title} xs={12} sm={6} md={4}>
            <CardItem
              pageUrl={`${film.url.split('/').slice(-2)[0]}`}
              title={film.title}
              imgUrl={`${imgUrl}/${film.url.split('/').slice(-2)[0]}.jpg`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
