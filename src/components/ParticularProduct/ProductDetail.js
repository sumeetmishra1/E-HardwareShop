import { Container, FormControl, Grid, Typography,Button } from "@mui/material";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import ProductImage from "./ProductImage";
export function ProductDetails() {
  return (
    <Container sx={{ m: 10, backgroundColor: 'white',fontFamily:'fantasy' }}>
        <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <ProductImage/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography sx={{color:'gray',fontWeight:'bold',fontSize:20,my:1}}>Levis</Typography>
          <Typography>Men Full Sleeve Shirt</Typography>
          <Typography sx={{my:1,fontSize:25,fontWeight:'bold'}}>₹348</Typography>
          <Box sx={{ maxWidth: 80, }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Size</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={'S'}>S</MenuItem>
                <MenuItem value={'M'}>M</MenuItem>
                <MenuItem value={'L'}>L</MenuItem>
              </Select>
              </FormControl>
              <Box sx={{display:"flex",my:2}}>
              <Button sx={{color:'orange',fontFamily:'monospace',border:1,minWidth:125,height:30,mr:2}}>Order Now</Button>
              <Button  sx={{fontFamily:'monospace',border:1,minWidth:125,height:30}}>Add To Cart</Button>
              </Box>
          </Box>
          
          <Typography sx={{borderTop:1,pt:1}}>Rating & Review </Typography>
          
      <Rating name="half-rating" defaultValue={2.5} precision={1} />
      <Box sx={{m:1}}>
      <Box sx={{mt:2}}>
        <Typography sx={{fontWeight:'bold'}}>Ramesh </Typography>
        <Typography>Loved It</Typography>
      </Box>
      <Box sx={{mt:2}}>
        <Typography sx={{fontWeight:'bold'}}>Sanjeev </Typography>
        <Typography>Bad Product</Typography>
      </Box>
      <Box sx={{mt:2}}>
        <Typography sx={{fontWeight:'bold'}}>Fikee </Typography>
        <Typography>Got It</Typography>
      </Box>
      </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
