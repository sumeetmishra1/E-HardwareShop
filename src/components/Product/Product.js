 import  Button  from "@mui/material/Button"
import  Box from "@mui/material/Box"
 import  Typography  from "@mui/material/Typography"
 import { useContext } from "react"
import CartContext from "../../utils/CartContext"
 export default function Product({product={},addProduct=()=>{}}){
    const CartCtx = useContext(CartContext)
    return(
        <Box>
             <Typography sx={{textAlign:'center'}}>{product.title}</Typography>
            <img
            src={product.imageUrl}
            alt={product.title}
            />
            <Typography sx={{textAlign:'start',}}>{product.price}</Typography>
            <Button sx={{textAlign:'end'}} onClick={()=>CartCtx.addToCart(product)}>Add To Cart</Button>
        </Box>
    )
 }