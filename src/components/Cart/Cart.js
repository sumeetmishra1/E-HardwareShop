import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import CartItem from './CartItem';
import CartContext from '../../utils/CartContext';

export default function Cart() {
  
const CartCtx=React.useContext(CartContext)
console.log(CartCtx.items)
  const DrawerList = (
    <Box sx={{ width: 500 }} role="presentation" >
      {CartCtx.items.map((element)=>{
        return(
            <CartItem element={element} key={element.id} CartCtx={CartCtx}/>
        )
      })}
    </Box>
  );

  return (
    <div>
      <Drawer anchor='right' open={CartCtx.isCartOpen} >
        <Typography sx={{textAlign:'center',fontSize:"30px",mt:1,mb:2,fontFamily:'cursive',color:'grey'}}>Cart</Typography>
        {DrawerList}
        <Button sx={{color:'aquamarine', fontSize:'20px',fontFamily:'cursive'}}>Purchase</Button>
        <Button sx={{border:'HighlightText'}} onClick={()=>CartCtx.openCloseCart(false)}>Exit</Button>
      </Drawer>
    </div>
  );
}
