import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NextPage } from "next";

import * as Yup from "yup";
import { useFormik } from "formik";
import { authService } from "@/common/service";
import axios from "axios";
import { useSession } from "../store/session/useSession";

import { useRouter } from "next/router";
import LoginLayout from "../components/layouts/login.layout";
import { styled } from "@mui/system";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Paper = styled("div")({
  marginTop: 8, //theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

interface Props {}

const SignUP: { Layout: any } & NextPage<Props> = () => {
  const router = useRouter();
  const { login } = useSession();
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email()
      .min(4, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(4, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      await createAccount(values);
    },
  });
  const createAccount = async (value: any) => {
    try {
      const create = await axios
        .post("/api/sign-up", value)
        .then((res) => res.data);
      login(create);
      router.push("/");
    } catch (e: any) {
      if (e.response) {
        if (e.response.data) {
          const data = e.response.data;
          console.log(data.message);
          alert(data.message);
        }
      }
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <Avatar sx={{ margin: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <br />
        <form
          style={{
            width: "100%", // Fix IE 11 issue.
            marginTop: 3,
          }}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                value={formik.values.name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm_password"
                label="Confirm Password"
                type="confirm_password"
                id="confirm_password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.confirm_password)}
                helperText={
                  formik.touched.confirm_password &&
                  formik.errors.confirm_password
                }
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => formik.handleSubmit()}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/sign-in" variant="body2">
                <br />
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

SignUP.Layout = LoginLayout;
export default SignUP;
