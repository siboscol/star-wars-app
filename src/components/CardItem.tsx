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

  const handleImageError = (e: any) => {
    e.target.onerror = null
    e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
      onClick={() => navigate(pageUrl)}
    >
      <CardActionArea>
        <CardMedia component="img" image={imgUrl} alt={title} onError={handleImageError} />
        <ImageListItemBar title={title} />
      </CardActionArea>
    </Card>
  )
}

export default CardItem
