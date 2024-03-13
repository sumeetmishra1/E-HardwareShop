import Typography from "@mui/material/Typography";
import FacebookIcon from '@mui/icons-material/Facebook'
import  Container from "@mui/material/Container";
export default function Footer(){
    return(
        <Container maxWidth={true} sx={{bgcolor:'gray',position:'absolute'}}>
        <Typography sx={{fontSize:'20px'}}>E-Hardware Shop</Typography>
        <FacebookIcon sx={{fontSize:'40px'}}></FacebookIcon>
        </Container>
    )
}