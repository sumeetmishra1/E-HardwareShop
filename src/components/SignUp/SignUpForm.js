import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Man from "@mui/icons-material/Man";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
export default function SignUpForm() {
  const [nameValue, setNameValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [phoneValue, setPhoneValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    if (
      nameValue.length < 1 ||
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
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDs-a9WDbEuM1KAPJyecEm9fDMLQQah-BQ",
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
    } catch (e) {
      alert(e);
    }
    setEmailValue("");
    setNameValue("");
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
          SignUp
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="Name"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                value={nameValue}
                onChange={(e) => setNameValue(e.currentTarget.value)}
              />
            </Grid>
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
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I Accept Terms & Conditions"
                required
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
      <NavLink style={{textDecoration:'none',color:'blue'}} to={'/signin'} >Already Have?</NavLink>
    </Container>
  );
}
