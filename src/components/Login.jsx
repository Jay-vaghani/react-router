import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Login() {

    const [user, setUser] = useState('')

    const auth = useAuth()

    const Navigate = useNavigate()

    return (
        <div>
            <p><input type="text" placeholder='Enter Name' onChange={(e) => setUser(e.target.value)} /></p>
            <button
                onClick={() => {
                    auth.login(user)
                    Navigate('/profile')
                }}>
                Login</button>
        </div>
    )
}

export default Login