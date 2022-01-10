import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'
import { useEffect, useState } from 'react'
import swapiService, { Result } from '../services/swapi-service'

const imgUrl = 'https://starwars-visualguide.com/assets/img/planets'

export default function PlanetsPage() {
  const [planets, setPlanets] = useState<Result[]>([])

  useEffect(() => {
    swapiService.getPlanets().then(res => {
      setPlanets(res.data.results)
    })
  }, [])

  return (
    <Container sx={{ py: 2 }} maxWidth="xl">
      <Grid container spacing={2}>
        {planets.map((planet, index) => (
          <Grid item key={planet.name} xs={12} sm={6} md={4}>
            <CardItem
              pageUrl={`${planet.url.split('/').slice(-2)[0]}`}
              title={planet.name}
              imgUrl={`${imgUrl}/${planet.url.split('/').slice(-2)[0]}.jpg`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
