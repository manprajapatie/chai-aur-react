import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>  
      <div>
        <h1>
          My Name is project abstract
        </h1>
        </div>
       
        </UserContextProvider>
  )
}

export default App
