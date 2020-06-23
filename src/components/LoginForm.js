import React, { useState} from 'react'
import { capatalize } from '../helpers'

export default function LoginForm({ saveToken }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)

    /* events */
    const updateUsername = event => setUsername(event.target.value)
    const updatePassword = event => setPassword(event.target.value)

    const handleSubmit = event => {
        event.preventDefault() 
        setMessage(null) 
        login()
    }

    const login = () => {
        fetch('http://localhost:4000/login', {
            method: "POST", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({username, password})
        })
        .then(response => {
            console.log('response', response)
            return response.json()
        })
        .then(data => {
            if (data.error) return setMessage(`Error: ${data.error}`)
            setMessage('Success!')
        })
    }

    
    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input  type="text" styles={{color: 'red'}}
                                placeholder="username" 
                                name="username"
                                onChange={updateUsername} 
                                />
                </div>
                <div>
                    <label>Password</label> 
                    <input  type="password" 
                            placeholder="password" 
                            name="password" 
                            onChange={updatePassword}
                            /> 
                </div>
                <button onClick={handleSubmit}>Login</button>
            </form>
            <div>
            {
                message 
                    ? <span>{message}</span>
                    : null 
            }
            </div>
        </div>
    )
}
