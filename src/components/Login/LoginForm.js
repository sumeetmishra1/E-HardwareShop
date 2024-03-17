import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Man from "@mui/icons-material/Man";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AuthContext from "../../utils/AuthContext";
import { NavLink } from 'react-router-dom';
import {useHistory } from "react-router-dom";
export default function LoginForm() {
  const [emailValue, setEmailValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const authCtx = React.useContext(AuthContext)
  let history = useHistory()
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    if (
      emailValue.length < 1 ||
      phoneValue.length < 1
    ) {
      setIsLoading(false)
      alert("Please fill Required Details!");
      return;
    }
    const userObj = {
      email: emailValue,
      password: phoneValue,
      returnSecureToken:true
    };
    try {
      var response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDs-a9WDbEuM1KAPJyecEm9fDMLQQah-BQ",
        {
          method: "POST",
          body: JSON.stringify(userObj),
        }
      );
      response = await response.json()
      console.log(response);
      if (response.error) {
        throw Error(response.error.message);
      }
    else{
        var username = response.email.split("@")[0];
      localStorage.setItem('username',username)
      authCtx.login(response.idToken)
      history.push('/')
    }
        
    } catch (e) {
      alert(e);
    }
    setEmailValue("");
    setPhoneValue("");
    setIsLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <Man/>
        </Avatar>
        <Typography component="h1" variant="h5">
         Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="Password"
                label="Password"
                type="Password"
                id="Password"
                autoComplete="Password"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.currentTarget.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
        {isLoading && <p>Loading....</p>}
      </Box>
      <NavLink style={{textDecoration:'none',color:'blue'}} to={'/signup'} >Create New Account?</NavLink>
    </Container>
  );
}
