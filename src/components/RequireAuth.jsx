import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'

export default function RequireAuth({ children }) {

    const auth = useAuth()



    if (!auth.user) {
        return <Navigate to='/login' />

    }

    return (
        <div>{children}</div>
    )
}
