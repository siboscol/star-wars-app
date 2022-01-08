import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'
import { useEffect, useState } from 'react'
import swapiService from '../services/swapi-service'

export default function HomePage() {
  const [resources, setResources] = useState({})

  useEffect(() => {
    swapiService.getResources().then(res => {
      setResources(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <Container sx={{ py: 2 }} maxWidth="xl">
      <Grid container spacing={2}>
        {Object.keys(resources).map(resource => (
          <Grid item key={resource} xs={12} sm={6} md={4}>
            <CardItem item={resource} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
