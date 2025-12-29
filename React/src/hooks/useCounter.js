import { useState } from "react";

 export default function useCounter(inititalState = 0){
    const[count,setCount]= useState(inititalState)

    const increment = () => {
        count < 20? setCount(prev=>prev+1) : setCount(count)
    }

    const decrement = () =>{
        count > 0? setCount(prev=>prev-1) : setCount(count)
    }

    const reset = ()=> {
        setCount(inititalState)
    }

    return {count,increment,decrement,reset}

 }