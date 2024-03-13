import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
export default function Movie({details={}}){
    return(
        <Box key={details.id} sx={{mt:2}}>
            <Avatar src={details.avatar} alt={details.first_name} sx={{height:100 ,width:100}}  key={details.id}></Avatar>
            <Typography>{details.first_name}</Typography>
        </Box>
    )
}