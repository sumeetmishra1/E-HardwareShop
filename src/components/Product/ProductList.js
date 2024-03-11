import  Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Product from "./Product"

const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
export default function ProductList(){
    return(
        <Container maxWidth="md">
            <Grid container spacing={2}>
                {productsArr.map((product)=>{
                    return(
                    <Grid item xs={5} >
                    <Product product={product}/>
                 </Grid>
                )})}
            </Grid>
        </Container>
    )
}