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
    })
  }, [])

  const capitalize = (item: string) => item.charAt(0).toUpperCase() + item.slice(1)

  return (
    <Container sx={{ py: 2 }} maxWidth="xl">
      <Grid container spacing={2}>
        {Object.keys(resources).map(resource => (
          <Grid item key={resource} xs={12} sm={6} md={4}>
            <CardItem
              pageUrl={`/${resource === 'people' ? 'characters' : resource}`}
              title={capitalize(resource === 'people' ? 'characters' : resource)}
              imgUrl={`https://starwars-visualguide.com/assets/img/categories/${
                resource === 'people' ? 'character' : resource
              }.jpg`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
