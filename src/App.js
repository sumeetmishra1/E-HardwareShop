import React from 'react';
import { Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { Contact } from './pages/Contact';
function App() {
  

  return (
    <div >
      <Navbar/>
      <Cart />
      <Route path="/home">
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
      
      <Footer/>
      
    </div>
  );
}

export default App;
