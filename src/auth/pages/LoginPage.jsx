import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import  Google  from '@mui/icons-material/Google'
import Link from '@mui/material/Link'
import { AuthLayouth } from '../layout/AuthLayouth';

export const LoginPage = () => {
  return (
  
    <AuthLayouth title="Login">
      <form>
        <Grid container>
          
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
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant='contained'fullWidth>
                <Google/>
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{ mt:1 }}>
            <Link component={ RouterLink } color='inherit' to="/auth/register">
              Create acount
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayouth>
    
  )
}
