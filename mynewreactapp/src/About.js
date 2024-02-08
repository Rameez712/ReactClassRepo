import React  from "react"; 
import { useNavigate } from "react-router-dom";

function About(){
const navigateHook = useNavigate();

    const handleClick=()=>{

        navigateHook('/Home');
    }

    return(
        <>
        <h1>About Page</h1>
        <button onClick={handleClick}>Nav to Home</button>
        </>
    )
}

export default About;