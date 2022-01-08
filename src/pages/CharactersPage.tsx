import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CardItem from '../components/CardItem'
import { useEffect, useState } from 'react'
import swapiService, { Result } from '../services/swapi-service'

const imgUrl = 'https://starwars-visualguide.com/assets/img/characters'

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Result[]>([])

  useEffect(() => {
    swapiService.getCharacters().then(res => {
      setCharacters(res.data.results)
    })
  }, [])

  return (
    <Container sx={{ py: 2 }} maxWidth="xl">
      <Grid container spacing={2}>
        {characters.map((character, index) => (
          <Grid item key={character.name} xs={12} sm={6} md={4}>
            <CardItem
              pageUrl={`${index + 1}`}
              title={character.name}
              imgUrl={`${imgUrl}/${index + 1}.jpg`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
