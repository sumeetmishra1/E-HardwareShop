import { Typography } from "@mui/material";
import ProductList from "../components/Product/ProductList";

export default function Store(){
    return(
        <>
        <Typography sx={{mt:10,color:'blueviolet',fontFamily:'serif',fontSize:'60px',textAlign:'center'}}>Music</Typography>
        <ProductList/>
        </>
    )
}