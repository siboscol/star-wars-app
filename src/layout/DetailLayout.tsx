import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { Container, Paper } from '@mui/material'

interface MainProps {
  posts: ReadonlyArray<string>
  title: string
}

export default function Main() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography>
              Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet
              fermentum. Aenean lacinia bibendum nulla sed consectetur.
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            '& .markdown': {
              py: 3
            }
          }}
        >
          <Typography variant="h6" gutterBottom>
            TITLE OF THE PAGE
          </Typography>
          <Divider />
        </Grid>
      </Grid>
    </Container>
  )
}
