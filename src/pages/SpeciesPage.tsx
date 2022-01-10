import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'
import { useEffect, useState } from 'react'
import swapiService, { Result } from '../services/swapi-service'

const imgUrl = 'https://starwars-visualguide.com/assets/img/species'

export default function SpeciesPage() {
  const [species, setSpecies] = useState<Result[]>([])

  useEffect(() => {
    swapiService.getSpecies().then(res => {
      setSpecies(res.data.results)
    })
  }, [])

  return (
    <Container sx={{ py: 2 }} maxWidth="xl">
      <Grid container spacing={2}>
        {species.map((s, index) => (
          <Grid item key={s.name} xs={12} sm={6} md={4}>
            <CardItem
              pageUrl={`${s.url.split('/').slice(-2)[0]}`}
              title={s.name}
              imgUrl={`${imgUrl}/${s.url.split('/').slice(-2)[0]}.jpg`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
