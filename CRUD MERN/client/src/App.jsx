import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import "./App.css";

function App() {

 const [form, setForm] = useState({});
 const [users, setUsers] = useState({});

  const handleForm=(e)=>{
    // console.log(e.target.value,e.target.name);
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=async (e)=>{
    e.preventDefault()
    const response=await fetch("http://localhost:3000/demo", {
      // method: "GET",
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    });
    const data=await response.json()
    console.log(data);

  }



 const getUsers=async ()=>{
    const response=await fetch("http://localhost:3000/demo", {
      method: "GET",
    });
    const data=await response.json()
    // console.log(data);
    setUsers(data)
 }

 useEffect(()=>{
   getUsers()
 },[])
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="container mx-auto m-6 p-7 border-green-400 rounded-lg border-2 w-auto">
        {/* <p className="text-white">{JSON.stringify(form)}</p> */}
        <form action="" className="" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <span className="font-bold text-2xl text-green-300">Username</span>
            <input
            name="username"
              type="text"
              className="border-4 m-4 p-2 rounded-sm outline-none "
              onChange={handleForm}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="font-bold text-2xl text-green-300">Password</span>
            <input
            name="password"
              type="password"
              className="border-4 m-4 p-2 rounded-sm outline-none "
              onChange={handleForm}
            />
          </div>
          <input
            type="submit"
            className="p-3 flex m-3 border-2 bg-slate-600 text-white cursor-pointer rounded-xl"
          />
        </form>

        
      </div>
    </div>
  );
}

export default App;
