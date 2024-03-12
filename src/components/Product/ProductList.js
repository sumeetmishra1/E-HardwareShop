import  Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Product from "./Product"
import { useContext } from "react"
import CartContext from "../../utils/CartContext"

const productsArr = [

    {
    id:1,

    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    id:2,
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    id:3,
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
        id:4,
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
export default function ProductList(){
    const CartCtx = useContext(CartContext)
    console.log(CartCtx.items)
    function addProduct(item){
       CartCtx.addToCart(item)
    }
    return(
        <Container maxWidth="md" key={1}>
            <Grid container spacing={2}>
                {productsArr.map((product)=>{
                    return(
                    <Grid item xs={5} key={product.id} >
                    <Product product={product} addProduct={addProduct} />
                 </Grid>
                )})}
            </Grid>
        </Container>
    )
}