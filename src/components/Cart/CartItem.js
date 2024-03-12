import { Box, Input, Typography ,Avatar} from "@mui/material"
import Button from "@mui/material/Button"
export default function CartItem({element={},CartCtx}){
    return(
        <Box display={"flex"} mb={3} >
            <Avatar
            src={element.imageUrl}
            alt={element.title}
            height={30}
            width={30}
            sx={{mr:1,ml:1}}
            />
            <Typography sx={{mr:2}}>{element.title}</Typography>
            <Typography sx={{mr:5}}>${element.price}</Typography>
            <Input sx={{width:'10px',borderColor:'ActiveBorder',mr:5}} defaultValue={element.quantity}/>
            <Button onClick={()=>CartCtx.removeItem(element.id)}>Remove</Button>
        </Box>
    )
}