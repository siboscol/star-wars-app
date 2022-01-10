import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'
import { useEffect, useState } from 'react'
import swapiService, { Result } from '../services/swapi-service'

const imgUrl = 'https://starwars-visualguide.com/assets/img/vehicles'

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Result[]>([])

  useEffect(() => {
    swapiService.getVehicles().then(res => {
      setVehicles(res.data.results)
    })
  }, [])

  return (
    <Container sx={{ py: 2 }} maxWidth="xl">
      <Grid container spacing={2}>
        {vehicles.map((vehicle, index) => (
          <Grid item key={vehicle.name} xs={12} sm={6} md={4}>
            <CardItem
              pageUrl={`${vehicle.url.split('/').slice(-2)[0]}`}
              title={vehicle.name}
              imgUrl={`${imgUrl}/${vehicle.url.split('/').slice(-2)[0]}.jpg`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
