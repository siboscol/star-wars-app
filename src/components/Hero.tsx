import { Box, capitalize, Container, Typography } from '@mui/material'

type HeroProps = {
  title?: string
}

const Hero = ({ title = 'Star Wars' }: HeroProps) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 4,
        pb: 4
      }}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          {capitalize(title)}
        </Typography>
      </Container>
    </Box>
  )
}

export default Hero
