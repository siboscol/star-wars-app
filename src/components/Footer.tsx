import { Box, Container, Link, Typography } from '@mui/material'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were
      freely collected from{' '}
      <Link color="inherit" href="http://starwars.wikia.com/wiki/Main_Page">
        Wookiepedia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto'
      }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  )
}
