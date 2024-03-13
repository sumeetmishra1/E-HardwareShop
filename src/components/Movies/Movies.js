import { Typography } from "@mui/material";
import { useState } from "react";
import Movie from "./Movie";
export  default function Movies (){
    const[movies,channgeMovie]=useState([])
    const[isLoading,changeLoadingState] = useState(false);
    async function movieHandler(){
        changeLoadingState(true)
        let data = await fetch('https://reqres.in/api/users?page=2')
        data = await data.json()
        changeLoadingState(false)
       channgeMovie(data.data)
    }
    return(

        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <Typography sx={{mt:10,color:'black',fontFamily:'serif',fontSize:'60px',textAlign:'center'}}>Users</Typography>
        <button onClick={movieHandler}>Fetch Users</button>
        {isLoading?<h1>Loading</h1>:
        movies.map(movie=>{
          return <Movie details={movie}/>
          })}
        </div>
    )
}