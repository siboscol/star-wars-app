import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, ImageListItemBar } from '@mui/material'

export default function CardItem(): JSX.Element {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://source.unsplash.com/random"
          alt="random"
        />
        <ImageListItemBar title="Random" />
      </CardActionArea>
    </Card>
  )
}
