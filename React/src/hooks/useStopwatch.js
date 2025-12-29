import { useEffect, useRef, useState } from "react";

function useStopWatch(){
    const[time,setTime]= useState(0)
    const intervalref=useRef(null);
    const[isRunning,setIsRunning]=useState(false);


    useEffect(()=>{
       if(isRunning){
         intervalref.current = setInterval(()=>{setTime(p=>p+1)},1000)
       }
       if(!isRunning){
        clearInterval(intervalref.current)
       }

       return () =>{
        clearInterval(intervalref.current);
       }
    },[isRunning])

    const hours = Math.floor(time/3600)
    const minutes = Math.floor((time%3600)/60)
    const seconds = time%60
    const start =()=>{ setIsRunning(true)}
    const stop = ()=>{setIsRunning(false)}
    const reset = ()=> {setIsRunning(false);
        clearInterval(intervalref.current)
        intervalref.current=null
        setTime(0);
    }

    return{
        hours,minutes,seconds,start,stop,reset,isRunning
    }
 

}
export default useStopWatch;
