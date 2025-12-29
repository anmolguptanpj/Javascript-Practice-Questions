import useCounter from './hooks/useCounter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useClock from './hooks/useClock'
import useStopWatch from './hooks/useStopwatch'

function App() {
  document.title="Anmol"

  const{hours,seconds,minutes,running,stop,start,resets} = useStopWatch()

  const {count,increment,decrement,reset} = useCounter()
  const time = useClock()
  

  return (
    <>
    <div>{time.toLocaleTimeString()}</div>
 <div> {count}</div>
 <button onClick={increment}>+</button>
 <button onClick={decrement}>-</button>
 <button onClick={reset}>Reset</button>
 <div>{`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")} `}</div>
 <div> 
  <button onClick={start}>Start</button>
 <button onClick={stop}>Stop</button>
 <button onClick={resets}>Reset</button>
 </div>



    </>
  )
}

export default App
