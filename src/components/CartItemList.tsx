import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

type CardItemListProps = {
  list: string[]
}

const CardItemList = ({ list }: CardItemListProps): JSX.Element => {
  return (
    <Container sx={{ py: 2 }} maxWidth="xl">
      <Grid container spacing={2}>
        {list.map(item => (
          <Grid item key={item} xs={12} sm={6} md={4}>
            <CardItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CardItemList
