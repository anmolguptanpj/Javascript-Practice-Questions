import { useEffect, useRef, useState } from "react";

function useStopWatch(){
    const[time,setTime]= useState(0)
    const intervalref=useRef(null);
    const[isRunning,setIsRunning]=useState(false);
    const [values,setValues] = useState([])


    useEffect(()=>{
       if(isRunning){
         intervalref.current = setInterval(()=>{setTime(p=>p+1)},1000)
       }

       return () =>{
        clearInterval(intervalref.current);
        intervalref.current=null;
       }
    },[isRunning])
    console.log(time)
    console.log(intervalref)
    const hours = Math.floor(time/3600)
    const minutes = Math.floor((time%3600)/60)
    const seconds = time%60
    const start =()=>{ setIsRunning(true)}
    const stop = ()=>{setIsRunning(false)}
    const resets = ()=>{setIsRunning(false)
        setTime(0)
        console.log("reset button is clicked")
    }
    const save = ()=>{setValues(prev => [...prev,time]);
        console.log("saved")
    }


    

    return{
        hours,minutes,seconds,start,stop,resets,isRunning,save,values
    }
 

}
export default useStopWatch;
