import useCounter from './hooks/useCounter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useClock from './hooks/useClock'
import useStopWatch from './hooks/useStopwatch'
import { useTheme } from './context/ThemeContext'
import { useUser } from './context/userContext'

function App() {
  document.title="Anmol"
  const {user} = useUser()
  const{hours,seconds,minutes,running,stop,start,resets,save,values} = useStopWatch()

  const {count,increment,decrement,reset} = useCounter()
  const time = useClock()
  const{toggleTheme} = useTheme();
  
  

  return (
    <>
  <div className='w-screen h-screen justify-center flex ' >
 <div>
       <div className='w-full text-8xl my-5'>{time.toLocaleTimeString()}</div>
 <div className='my-5 flex flex-col justify-center items-center gap-3 text-xl'>
                              {/*Count */}
                                <div className='w-full flex justify-center text-4xl '> {count}</div>
                              <button className='w-30 h-10 border-2 rounded-2xl hover:bg-gray-300' onClick={increment}>+</button>
                              <button className='w-30 h-10 border-2 rounded-2xl hover:bg-gray-300' onClick={decrement}>-</button>
                              <button className='w-30 h-10 border-2 rounded-2xl hover:bg-gray-300' onClick={reset}>Reset</button>
                              </div>

                              {/* Stopwatch Section */}
                              <div className=''>
                                <div className='w-full text-center text-3xl my-10 border-4 p-6 rounded-4xl'>{`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")} `}</div>
                              <div className=''> 
                                <button className='w-30 h-10 border-2 rounded-2xl hover:bg-gray-300' onClick={start}>Start</button>
                              <button className='w-30 h-10 border-2 rounded-2xl hover:bg-gray-300' onClick={stop}>Stop</button>
                              <button className='w-30 h-10 border-2 rounded-2xl hover:bg-gray-300' onClick={resets}>Reset</button>
                              <button className='w-30 h-10 border-2 rounded-2xl hover:bg-gray-300' onClick={save}>Save</button>
                              <div className='my-5 gap-5' style={{display:'flex',flexDirection:'column'}}>
                                {values.map((n)=>(<div className="text-xl py-2 flex justify-center mx-2 border-2 rounded-xl " key={n}>{`${String(Math.floor(n/3600)).padStart(2,"0")}:${String(Math.floor((n%3600)/60)).padStart(2,"0")}:${String(Math.floor(n%60)).padStart(2,"0")}  `}</div>))}
                              </div>
                              </div>
                              </div>

                           <div className='w-full text-center'>
                              
                              <div className='text-6xl my-5'>
                                {`Hello ${user.name}`}
                              </div>
                               <button className='w-30 h-10 border-2 rounded-2xl hover:bg-gray-300' onClick={toggleTheme}>Toggle Theme</button>

                           </div>
 </div>


  </div>

    </>
  )
}

export default App
