import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, ImageListItemBar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type CardItemProps = {
  pageUrl: string
  title: string
  imgUrl: string
}

const CardItem = ({ pageUrl, title, imgUrl }: CardItemProps): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onClick={() => navigate(pageUrl)}
    >
      <CardActionArea>
        <CardMedia component="img" height="240" image={imgUrl} alt={title} />
        <ImageListItemBar title={title} />
      </CardActionArea>
    </Card>
  )
}

export default CardItem
