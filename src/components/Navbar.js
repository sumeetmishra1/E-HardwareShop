import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import ConstructionIcon from '@mui/icons-material/Construction';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { NavLink } from 'react-router-dom';
import CartContext from '../utils/CartContext';


function Navbar() {
const cartCtx= React.useContext(CartContext)
  return (
    <AppBar  sx={{position:'fixed',top:0,left:0}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink  to={'/home'} style={{textDecoration:'none'}}>
          <ConstructionIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </NavLink>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          HardwareShop
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <NavLink to={'/home'} style={{textDecoration:'none'}}><Typography sx={{ m: 2, color: 'white', display: 'block', }}>Home</Typography></NavLink>
            <NavLink to={'/store'} style={{textDecoration:'none'}}><Typography sx={{ m: 2, color: 'white', display: 'block' }}>Store</Typography></NavLink>
            <NavLink to={'/about'} style={{textDecoration:'none'}}><Typography sx={{ m: 2, color: 'white', display: 'block' }}>About</Typography></NavLink>
            <NavLink to={'/contact'} style={{textDecoration:'none'}}><Typography sx={{ m: 2, color: 'white', display: 'block' }}>Contact</Typography></NavLink>
          </Box>
          <ShoppingCartTwoToneIcon onClick={()=>cartCtx.openCloseCart(true)}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;