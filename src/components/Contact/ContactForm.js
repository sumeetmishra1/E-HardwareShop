import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ContactSupport  from '@mui/icons-material/ContactSupport';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
export default function ContactForm() {
const[nameValue,setNameValue]=React.useState('')
const[emailValue,setEmailValue]=React.useState('')
const[phoneValue,setPhoneValue]=React.useState('')
  const handleSubmit = async(event) => {
    event.preventDefault();
    if(nameValue.length<1 || emailValue.length<1 || phoneValue.length <1){
        alert("Please fill Required Details!")
       return;
    }
    const userObj={
        name:nameValue,
        email:emailValue,
        phone:phoneValue
    }
    try{
        const response = await fetch('https://e-commerce-comm-default-rtdb.firebaseio.com/users.json',{
            method:'POST',
            body:JSON.stringify(userObj)
        })
        if(response.status>=400){
            throw Error("Something Went Wrong in the Server")
        }
        
        console.log(response)
    }
    catch(e){
        alert(e)
    }
    setEmailValue('')
    setNameValue('')
    setPhoneValue('')
  };

  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <ContactSupport />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  value={nameValue}
                  onChange={(e)=> setNameValue(e.currentTarget.value)}
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
                  onChange={(e)=>setEmailValue(e.currentTarget.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Phone"
                  label="Phone"
                  type="number"
                  id="Phone"
                  autoComplete="Phone"
                  value={phoneValue}
                  onChange={(e)=> setPhoneValue(e.currentTarget.value)}
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
        </Box>
      </Container>
  );
}