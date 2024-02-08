import React  from "react";
import App2 from './App2'
import { BrowserRouter,Routes,Route,Link, useParams, useNavigate } from "react-router-dom";
import About from './About';
import Home from './Home';
import User from './User';


function App(){

  return(
    <>
        
        <BrowserRouter>
        <div style={{backgroundColor:"lightblue",height:"30px"}}>
    
        <Link to="/Home" >Home</Link>
        <Link to="/About" style={{marginLeft:"10px"}}>About</Link>
        <Link to="/User/1" style={{marginLeft:"10px"}}>User</Link>

        </div>
        <br/>
        <br/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/User/:id" element={<User/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
    
  )
}


export default App;
