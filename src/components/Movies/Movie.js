import { Box, Typography } from "@mui/material";
export default function Movie({details={}}){
    return(
        <Box  sx={{mt:2}}>
            <Typography>{details.name}</Typography>
            <Typography>{details.description}</Typography>
        </Box>
    )
}