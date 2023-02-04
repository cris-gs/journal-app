import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert';

import { AuthLayouth } from '../layout/AuthLayouth';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'The email must have an @'], 
  password: [ (value) => value.length >= 6  , 'The password must have more than 6 characters'], 
  displayName: [ (value) => value.length >= 1  , 'The name is required'], 
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo(() => status === 'checking' , [status]);

  const { 
    displayName, email, password, onInputChange, formState, 
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm( formData, formValidations );

  // console.log( displayNameValid );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted( true );
    

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }

  return (
  
    <AuthLayouth title="Create acount">
      <h1>FormValid: { isFormValid ? 'Valid' : 'Incorrect' }</h1>

      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster' >
        <Grid container>

        <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              label='Full name'
              type='text'
              placeholder='Jon Snow'
              fullWidth
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>
          
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              label='Email'
              type='email'
              placeholder='example@google.com'
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
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
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
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

            <Grid item xs={ 12 }>
              <Button 
                disabled={ isCheckingAuthentication }
                type='submit'
                variant='contained'
                fullWidth
              >
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
