import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import CartItem from './CartItem';

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
export default function Cart({openCart=false,closeCart}) {
  


  const DrawerList = (
    <Box sx={{ width: 500 }} role="presentation" >
      {cartElements.map((element)=>{
        return(
            <CartItem element={element}/>
        )
      })}
    </Box>
  );

  return (
    <div>
      <Drawer anchor='right' open={openCart} >
        <Typography sx={{textAlign:'center',fontSize:"30px",mt:'2',fontFamily:'cursive',color:'grey'}}>Cart</Typography>
        {DrawerList}
        <Button sx={{color:'aquamarine', fontSize:'20px',fontFamily:'cursive'}}>Purchase</Button>
        <Button sx={{border:'HighlightText'}} onClick={()=>closeCart()}>Exit</Button>
      </Drawer>
    </div>
  );
}
