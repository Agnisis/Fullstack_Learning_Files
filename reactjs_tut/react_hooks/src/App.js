import React from "react";
import { useState } from "react";


function App() {
  const [name, setname] = useState("agnisis")
  const [flag, setflag] = useState(false);
  const [steps, setsteps] = useState(0);
  const [names,setNames]=useState([]);
  // let a="agnisis";
  function changeName() {

    console.log("Clicked");

    //  return a;
    // return setname("akash");
    return setflag(!flag);

  }

  function increment() {
    // return setsteps(steps+1);
     setsteps((prevState)=> prevState+1);
    setsteps((prevState)=> prevState+1);

  }
  function decrement() {
    return setsteps(steps-1);

  }

  function addNames(e){

    
  }
  return (
    <div className="App">
      <div>Hello,{flag ? name : ""}</div>
      <button onClick={changeName}>Click me</button>

      <hr/>

      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>

      <hr/>
       

       <form onSubmit={addNames}>
        <input 
        type="text" value={name}  
        placeholder="add names"
        onChange={(e)=>setNames(e.target.value)}
        />

        <button>Submit</button>
       </form>

    </div>

  );
}

export default App;
