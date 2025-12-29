import useCounter from './hooks/useCounter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useClock from './hooks/useClock'
import useStopWatch from './hooks/useStopwatch'
import { useTheme } from './context/ThemeContext'

function App() {
  document.title="Anmol"

  const{hours,seconds,minutes,running,stop,start,resets,save,values} = useStopWatch()

  const {count,increment,decrement,reset} = useCounter()
  const time = useClock()
  const{toggleTheme} = useTheme();
  

  return (
    <>
  <div >
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
 <button onClick={save}>Save</button>
 <div style={{display:'flex',flexDirection:'column'}}>
  {values.map((n)=>(<div>{n}</div>))}
 </div>
 </div>

<button onClick={toggleTheme}>Toggle Theme</button>
  </div>

    </>
  )
}

export default App
