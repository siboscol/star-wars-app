import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'
import { useEffect, useState } from 'react'
import swapiService, { Result } from '../services/swapi-service'

const imgUrl = 'https://starwars-visualguide.com/assets/img/starships'

export default function StarshipsPage() {
  const [starships, setStarships] = useState<Result[]>([])

  useEffect(() => {
    swapiService.getStarships().then(res => {
      setStarships(res.data.results)
    })
  }, [])

  return (
    <Container sx={{ py: 2 }} maxWidth="xl">
      <Grid container spacing={2}>
        {starships.map((starship, index) => (
          <Grid item key={starship.name} xs={12} sm={6} md={4}>
            <CardItem
              pageUrl={`${starship.url.split('/').slice(-2)[0]}`}
              title={starship.name}
              imgUrl={`${imgUrl}/${starship.url.split('/').slice(-2)[0]}.jpg`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
