 import { Outlet } from "react-router-dom";
 import Navbar from "../components/Navbar.js";
 import Footer from '../components/Footer/Footer.js';
 export  default function Root(){
    return(
        <>
        <Navbar />
        <Outlet/>
        <Footer/>
        </>
    )
 }