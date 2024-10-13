import React, {useState, useContext} from "react";

function Login(){
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = () =>{

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