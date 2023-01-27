import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import  Google  from '@mui/icons-material/Google'
import Link from '@mui/material/Link'
import { AuthLayouth } from '../layout/AuthLayouth';

export const RegisterPage = () => {
  return (
  
    <AuthLayouth title="Create acount">
      <form>
        <Grid container>

        <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              label='Full name'
              type='text'
              placeholder='Jon Snow'
              fullWidth
            />
          </Grid>
          
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              label='Email'
              type='email'
              placeholder='example@google.com'
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              label='Password'
              type='password'
              placeholder='*******'
              fullWidth
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mt:1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant='contained'fullWidth>
                Create acount
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{ mt:1 }}>
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={ RouterLink } color='inherit' to="/auth/login">
              Get into
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayouth>
    
  )
}
