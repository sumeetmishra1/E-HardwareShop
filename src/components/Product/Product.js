 import  Button  from "@mui/material/Button"
import  Box from "@mui/material/Box"
 import  Typography  from "@mui/material/Typography"
 
 export default function Product({product={}}){
    console.log(product)
    return(
        <Box>
             <Typography sx={{textAlign:'center'}}>{product.title}</Typography>
            <img
            src={product.imageUrl}
            alt={product.title}
            />
            <Typography sx={{textAlign:'start',}}>{product.price}</Typography>
            <Button sx={{textAlign:'end'}}>Add To Cart</Button>
        </Box>
    )
 }