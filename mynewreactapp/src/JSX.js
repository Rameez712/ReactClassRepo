import React from "react";
import App2 from "./App2";
import styles from './mycss.module.css'

function JSX(){

  const name ="Rameez";
  const url = "http://google.com"

  const clickFunc = ()=>{

    alert("Hi")
  }

  const names = ["name1","name2","name3"];

  return(
    <div>
        <span className={styles.color}  style={{color:"blue"}}>Hi Rameez</span> 
     <h1>Hello {name} </h1> 
     <a href={url}>url</a>
     <button onClick={clickFunc}>Click</button>
      <ul>
       {names.map((t)=>(
           <li>{t}</li>
       ))} 

      </ul>
    </div>
  )
}



export default JSX;