import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";


export default function MovieForm(){
    const[nameValue,setNameValue] = useState('')
    const[avatarValue,setAvatarValue] = useState('')
    function submitUserForm(){
        const userObj={
            name:nameValue,
            avatar:avatarValue
        }
        console.log(userObj)
        setAvatarValue('')
        setNameValue('')
    }
    return(
        <form style={{display:'block',border:'2px solid gold',marginTop:'80px', padding:'4px'}}>
            <label htmlFor="name">Name</label>
            <Input id="name" sx={{m:2}} value={nameValue} onChange={(e)=>setNameValue(e.target.value)}/>
            <label htmlFor="Avatar">Avatar</label>
            <Input id="Avatar" sx={{m:2}} value={avatarValue} onChange={(e)=>setAvatarValue(e.target.value)} />
            <Button onClick={submitUserForm} >Add</Button>
        </form>
    )
}