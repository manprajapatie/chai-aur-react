import React, {useState, useContext} from "react";
import UserContext from "../UserContext";

function Login(){
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({userName, password})

    }
    return(
        <div>

            <h1>Login Page</h1>            
            <input
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={(e) => setuserName(e.target.value) }
            />
            
            <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login