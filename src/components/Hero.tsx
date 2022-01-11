import { Box, capitalize, Container, Typography } from '@mui/material'

type HeroProps = {
  title?: string
}

const Hero = ({ title = 'Star Wars' }: HeroProps) => {
  return (
    <Box
      sx={{
        pt: 4,
        pb: 4
      }}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          {title !== 'Star Wars' ? (
            capitalize(title)
          ) : (
            <img
              src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked@2x-52b4f6d33087.png"
              alt="logo"
              width={220}
            />
          )}
        </Typography>
      </Container>
    </Box>
  )
}

export default Hero
