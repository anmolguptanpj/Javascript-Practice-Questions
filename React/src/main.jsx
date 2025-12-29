
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { UserProvider } from './context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  
    <ThemeProvider>
    <UserProvider>
        <App />
    </UserProvider>
    </ThemeProvider>
  
)
