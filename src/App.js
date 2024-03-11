import React from 'react';
import NavbarTop from './components/Navbar';
import ProductList from './components/Product/ProductList';
import Typography from '@mui/material/Typography';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <NavbarTop/>
      <Typography sx={{mt:2,color:'blueviolet',fontFamily:'serif',fontSize:'60px',textAlign:'center'}}>Music</Typography>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
