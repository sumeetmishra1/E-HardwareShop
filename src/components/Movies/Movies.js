import { Typography ,Button} from "@mui/material";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import MovieForm from "./MovieForm";
export  default function Movies (){
    const[movies,channgeMovie]=useState([])
    const[isLoading,changeLoadingState] = useState(false);
    const[isError,setIsError] = useState(false)

    useEffect(()=>{
        movieHandler()
    },[]);
    async function movieHandler(){
        try{
        changeLoadingState(true)
        setIsError(false)
        let data = await fetch('https://reqres.in/api/users?page=2')
        data = await data.json()
        changeLoadingState(false)
        channgeMovie(data.data)
        }
        catch(e){
            changeLoadingState(false)
            setIsError(true)
        }
        
    }
    return(

        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <MovieForm />
        <Typography sx={{color:'black',fontFamily:'serif',fontSize:'60px',textAlign:'center'}}>Users</Typography>
        <Button onClick={movieHandler}>Fetch Users</Button>
        {isError && <p>Something Went Wrong</p>}
        {isLoading?<h1>Loading</h1>:
        movies.map(movie=>{
          return <Movie key={movie.id} details={movie} />
          })}
        </div>
    )
}