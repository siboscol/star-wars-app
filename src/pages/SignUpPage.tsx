import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import { Link as RouterLink } from 'react-router-dom'

interface IFormInput {
  email: string
  password: string
  firstName: string
  lastName: string
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required')
    .min(2, 'First Name should be of minimum 2 characters length')
    .max(25, 'First Name should be of maximum 25 characters length'),
  lastName: yup
    .string()
    .required('Last Name is required')
    .min(2, 'Last Name should be of minimum 2 characters length')
    .max(25, 'Last Name should be of maximum 25 characters length'),
  email: yup.string().required('Email is required').email(),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(120, 'Password should be of maximum 120 characters length')
})

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  })
  const { signup } = useAuth()

  const onSubmit = (data: IFormInput) => {
    signup(data.firstName, data.lastName, data.email, data.password)
  }

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('firstName')}
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              helperText={errors.firstName?.message}
              error={!!errors.firstName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('lastName')}
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              helperText={errors.lastName?.message}
              error={!!errors.lastName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register('email')}
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              helperText={errors.email?.message}
              error={!!errors.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register('password')}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              helperText={errors.password?.message}
              error={!!errors.password?.message}
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/login" variant="body2" component={RouterLink}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
