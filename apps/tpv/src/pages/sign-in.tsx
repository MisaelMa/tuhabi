import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NextPage } from 'next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter} from 'next/router'
import { useSession } from '../store/session/useSession'
import LoginLayout from '../components/layouts/login.layout';
import { setCookies } from 'cookies-next';
import { setTokenApi } from '../common/service/api';
import { styled } from '@mui/system';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://signati.io">
        Signati
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Paper = styled('div')({
  marginTop: 8, //theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
const AvatarCenter = styled('div')({
  display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
})


interface Props {}

const LoginPage: {Layout:any} & NextPage<Props> = () => {

  const router = useRouter()
  const {login, user} = useSession()

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .min(4, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(4, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema:SignupSchema,
    onSubmit: (values: any) => {
     // alert(JSON.stringify(values, null, 2));
     loginapp(values)
    },
  });
  const loginapp = async (values:any) => {

    try {
      const data = await axios.post("/api/login", values).then((res)=>res.data)
      // const data = await authService.signIn(values)
      setCookies('token', data.token);
      setTokenApi(data.token)
      login(data)
      console.log(data);
      
      // router.push("/")
   } catch(e: any){
     if (e.response){
       if (e.response.data){
         const data = e.response.data
         console.log(data.message)
         alert(data.message)
       }
     }
   }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        {JSON.stringify(user.email)}
        <Card sx={{ borderRadius: '10px'}}>
          <CardContent>
            <AvatarCenter>
              <Avatar
                sx={{ width: 25,
                height: 25,}}
                src="https://avatars1.githubusercontent.com/u/52678977?s=400&u=040aa07fa564985892d0fd115a2764579845502d&v=4"
              />
            </AvatarCenter>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <br/>
            <form style={{ width: '100%',
    marginTop: 1,}} noValidate>
              <TextField
                variant="outlined"
                margin="dense"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}

              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                autoComplete="current-password"
              />
              <br/>
              <br/>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={()=>formik.handleSubmit()}
              >
                Sign In
              </Button>
              <br/>
              <br/>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
};
LoginPage.Layout = LoginLayout
export default LoginPage;