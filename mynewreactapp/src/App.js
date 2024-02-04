import React  from "react";
import App2 from './App2'
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";


function App(){

function Home (){
    return(
      <>
        <h1>Home Page </h1>
      </>
    )
}

function About (){
  return(
    <>
      <h1>About Page </h1>
    </>
  )
}
  
  return(
    <>
        
        <BrowserRouter>
        <div style={{backgroundColor:"lightblue",height:"30px"}}>
    
        <Link to="/Home" >Home</Link>
        <Link to="/About" style={{marginLeft:"10px"}}>About</Link>
        </div>
        <br/>
        <br/>
          <Routes>
          <Route path="/" element={<Home/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
    
  )
}


export default App;
