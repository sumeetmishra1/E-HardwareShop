import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { Contact } from './pages/Contact';
import { ProductDetails } from './components/ParticularProduct/ProductDetail';
function App() {
  

  return (
    <div style={{backgroundColor:'whitesmoke'}} >
      <Navbar/>
      
      <Cart />
      <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/about" >
        <AboutPage/>
      </Route>
      <Route path="/store" >
        <Store/>
      </Route>
      <Route path="/product-detail">
      <ProductDetails/>
      </Route>
      </Switch>
      
      <Footer/>
      
    </div>
  );
}

export default App;
