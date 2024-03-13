import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './pages/Home';
import  Root  from './pages/Root';
import AboutPage from './pages/About';
function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      children:[
        {path:'/', element:<Home/>},
        {path:'/about', element:<AboutPage/>}
      ]
    }
    
  ])

  return (
    <div >
      <Cart />
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
