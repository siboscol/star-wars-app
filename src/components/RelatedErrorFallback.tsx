import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { FallbackProps } from 'react-error-boundary'

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div">
          Something went wrong:
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="error" gutterBottom>
          {error.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            resetErrorBoundary()
            navigate(location.pathname)
          }}
        >
          Retry
        </Button>
      </CardActions>
    </Card>
  )
}
