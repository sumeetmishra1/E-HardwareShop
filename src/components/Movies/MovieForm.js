import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";


export default function MovieForm(){
    const[nameValue,setNameValue] = useState('')
    const[avatarValue,setAvatarValue] = useState('')
    async function submitUserForm(){
        const userObj={
            name:nameValue,
            description:avatarValue
        }
        console.log(userObj)
       const response = await fetch('https://e-commerce-comm-default-rtdb.firebaseio.com/movies.json',{
            method:'POST',
            body:JSON.stringify(userObj)
        })
        console.log(response)
        setAvatarValue('')
        setNameValue('')
    }
    return(
        <form style={{display:'block',border:'2px solid gold',marginTop:'80px', padding:'4px'}}>
            <label htmlFor="name">Title</label>
            <Input id="name" sx={{m:2}} value={nameValue} onChange={(e)=>setNameValue(e.target.value)}/>
            <label htmlFor="Avatar">Description</label>
            <Input id="Avatar" sx={{m:2}} value={avatarValue} onChange={(e)=>setAvatarValue(e.target.value)} />
            <Button onClick={submitUserForm} >Add</Button>
        </form>
    )
}