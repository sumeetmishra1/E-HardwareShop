import React from 'react';
import NavbarTop from './components/Navbar';
import ProductList from './components/Product/ProductList';
import Typography from '@mui/material/Typography';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
function App() {
  const [isOpen, setOpen] = React.useState(false);
  function openCart(){
    setOpen(true)
  }
  function closeCart(){
    setOpen(false)
  }
  return (
    <div className="App">
      <NavbarTop openCart={openCart} />
      <Cart openCart={isOpen} closeCart={closeCart} />
      <Typography sx={{mt:2,color:'blueviolet',fontFamily:'serif',fontSize:'60px',textAlign:'center'}}>Music</Typography>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
