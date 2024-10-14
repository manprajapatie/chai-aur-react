import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './context/Component/Login'
import Profile from './context/Component/Profile'

function App() {
  

  return (
    <UserContextProvider>  
      
        <h1>
          My Name is project abstract
        </h1>
        <Login />
        <Profile />
       
        </UserContextProvider>
  )
}

export default App
