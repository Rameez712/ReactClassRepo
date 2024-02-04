import React, { useState } from "react";
import App2 from "./App2";

function UseState(){

  const[state,setState]=useState("Rameez state");


  const buttonClick = ()=>{
    setState("Ahmed State");
  }

  return(
    <>
     <h1>Hi {state}</h1> 
      <button onClick={buttonClick}>buttonClick</button>
    </>
  )
}



export default UseState;