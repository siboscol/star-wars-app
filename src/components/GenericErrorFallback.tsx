import { Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FallbackProps } from 'react-error-boundary'

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate()

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{ minHeight: '80vh' }}
    >
      <Grid item xs={3}>
        <p>Something went wrong:</p>
        <pre style={{ color: 'red' }}>{error.message}</pre>
        <Button
          variant="contained"
          onClick={() => {
            resetErrorBoundary()
            navigate('/')
          }}
        >
          Go to Home
        </Button>
      </Grid>
    </Grid>
  )
}
