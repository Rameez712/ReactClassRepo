import React, { useState, useEffect, useContext } from "react";

const App=()=>{

  const [count,setCount] = useState(0);
  

  function handleButtonClick(){

    setCount(count+1);
        console.log(count)
  }


  return(
    <div>
      {count}
      <br/>
      <br/>
    <button onClick={handleButtonClick}>Click here</button>
    </div>
  )
}

export default App;



// In React, the return statement in a functional component defines what will be rendered to the UI. When you click the button, the handleButtonClick method will be called first, and then the return statement will be executed to update the UI.

// In your handleButtonClick method, you have the following code:

// javascript
// Copy code
// function handleButtonClick() {
//   // setName(name);
//   setName("Rameez");
//   console.log(name);
//  }
// Here's the sequence of events when you click the button:

// The handleButtonClick method is invoked when the button is clicked.
// The setName("Rameez") statement updates the state variable name to "Rameez".
// React schedules a re-render to reflect the updated state.
// The return statement is executed, rendering the component with the updated name value.
// The updated UI, including the new name value, is displayed.