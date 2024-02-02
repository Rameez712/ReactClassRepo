import React, { useState } from "react";
import App2 from "./App2";

function UseState(){

  //let name = "Rameez"
  const[state,setState]=useState("Rameez state");

  const buttonClik = ()=>{
   
    setState("Ahmed State");
  }

  return(
    <>
     <h1>Hi {state}</h1> 
      <button onClick={buttonClik}>buttonClik</button>


    </>
  )
}



export default UseState;