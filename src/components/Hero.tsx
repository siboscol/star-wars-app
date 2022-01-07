import { Box, Container, Typography } from '@mui/material'

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 6,
        pb: 6
      }}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Star Wars
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          All the Star Wars data you've ever wanted
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Planets, Spaceships, Vehicles, People, Films and Species
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          From all SEVEN Star Wars films Now with The Force Awakens data!
        </Typography>
        <Typography variant="h4" align="center" color="text.secondary" paragraph>
          Now with The Force Awakens data!
        </Typography>
      </Container>
    </Box>
  )
}
