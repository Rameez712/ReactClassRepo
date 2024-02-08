import React, { useEffect, useRef, useState } from "react";


function UseRefComp(){
   // const[count,setCount] = useState(0);
    let refVal = useRef(0);

    useEffect(()=>{
        refVal.current = refVal.current+1
       // setCount(count+1);

    })
  
    return(

        <>
        Count:{refVal.current}
      {/*  StateCount :{count} */}
        </>
    )
}

export default UseRefComp;