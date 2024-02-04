import React  from "react";
import { Link } from "react-router-dom";


  

function Navbar(){


    return(
        <>
            <div style={{backgroundColor:"lightblue",height:"30px"}}>
            <Link to="/HomePage" >Home</Link>
            <Link to="/AboutPage" style={{marginLeft:"10px"}}>About</Link>
            </div>
            <br/>
            <br/>
        </>

    )
}

export default Navbar;
