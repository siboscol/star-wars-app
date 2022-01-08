import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, ImageListItemBar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const imgUrl_base = 'https://starwars-visualguide.com/assets/img/categories'

type CardItemProps = {
  item: string
}

const CardItem = ({ item }: CardItemProps): JSX.Element => {
  const navigate = useNavigate()
  let resource = item
  let title = item.charAt(0).toUpperCase() + item.slice(1)
  if (item === 'people') {
    resource = 'character'
    title = 'Characters'
  }
  const imgUrl = `${imgUrl_base}/${resource}.jpg`

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onClick={() => navigate(`/${resource}`)}
    >
      <CardActionArea>
        <CardMedia component="img" height="240" image={imgUrl} alt={title} />
        <ImageListItemBar title={title} />
      </CardActionArea>
    </Card>
  )
}

export default CardItem
