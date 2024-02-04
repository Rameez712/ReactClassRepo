import React, { useEffect,useState } from "react";

function UseEffectComp(){
    const [count,setCount]=  useState(0);
    const [count2,setCount2]=  useState(0);
useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))

        console.log("Useeffect console")
},[count]);
    return(
            <>
            Count1: {count}
            <br/>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <br/>
            Count2: {count2}
            <br/>
            <button onClick={()=>setCount2(count2+1)}>Click2</button>
            </>

    )
}

export default UseEffectComp;