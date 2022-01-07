import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function CardItemList() {
  return (
    <Container sx={{ py: 2 }} maxWidth="xl">
      <Grid container spacing={2}>
        {cards.map(card => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <CardItem />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
