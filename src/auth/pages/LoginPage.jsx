import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import  Google  from '@mui/icons-material/Google'
import Link from '@mui/material/Link'
import Alert from "@mui/material/Alert";

import { AuthLayouth } from '../layout/AuthLayouth';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useMemo } from "react";

const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm( formData );

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = ( event ) => {
    event.preventDefault();
    // console.log({ email, password });
    dispatch( startLoginWithEmailPassword({ email, password }) );
    
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch( startGoogleSignIn() );
  }

  return (
  
    <AuthLayouth title="Login">
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              label='Email'
              type='email'
              placeholder='example@google.com'
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              label='Password'
              type='password'
              placeholder='*******'
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mt:1 }}>
            
            <Grid 
              item 
              xs={ 12 }
              display={ !!errorMessage ? '' : 'none' }
            >
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button
                disabled={ isAuthenticating } 
                type="submit" 
                variant='contained'
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button
                disabled={ isAuthenticating }  
                variant='contained'
                fullWidth
                onClick={ onGoogleSignIn }
              >
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
