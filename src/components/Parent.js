import React from 'react'
import Child from './Child'
import Child2 from './Child2'
import Child3 from './Child3'
import {useState} from "react"

function Parent() {
    // const [name,setName]=useState("Akmal")

    let [counter,setCounter]=useState(0)
    const increment=()=>{
        if(counter===10){
           for(let i=0;i<10;i++){
            console.log("Arslan");
           }
        }
        else{
            
            setCounter(counter+1);
        }
    }
    const decrement=()=>{
        if(counter===0){
            setCounter(counter=0)
        }
        else{
            setCounter(counter-1)   
        }
       
    }
  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
     
    </div>
  )
}

export default Parent
