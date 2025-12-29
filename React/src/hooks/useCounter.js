import { useState } from "react";

 export default function useCounter(inititalState = 0){
    const[count,setCount]= useState(inititalState)

    const increment = () => {
        setCount(c=>c+1)
    }

    const decrement = () =>{
        setCount(c=>c-1)
    }

    const reset = ()=> {
        setCount(inititalState)
    }

    return {count,increment,decrement,reset}

 }