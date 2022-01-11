import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Outlet } from 'react-router-dom'

export default function SignUpInLayout() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://media.comicbook.com/2020/07/star-wars-skywalker-saga-wallpaper-1231363.jpeg?auto=webp&width=1280&height=720&crop=1280:720,smart)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: t => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Outlet />
      </Grid>
    </Grid>
  )
}
