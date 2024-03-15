import { Grid } from "@mui/material"


export default function ProductImage(){
    return(
        <Grid container spacing={2}>
            <Grid item xs={7} sm={2} spacing={2} >
                <img
                src="images/hoodie1 (1).webp"
                height={100}
                width={100}
                alt="1"
                />
                <img
                src="images/hoodie1 (2).webp"
                height={100}
                width={100}
                alt="1"
                />
                <img
                src="images/hoodie1 (3).webp"
                height={100}
                width={100}
                alt="1"
                />
                <img
                src="images/hoodie1 (4).webp"
                height={100}
                width={100}
                alt="1"
                />
            </Grid>
            <Grid item xs={7} sm={5} spacing={2} ml={1}>
                <img
                src="images/hoodie1 (4).webp"
                height={530}
                width={500}
                alt="s"
                >
                </img>
            </Grid>
            
        </Grid>

        
    )
}