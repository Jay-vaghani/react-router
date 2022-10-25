import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Profile() {

  const auth = useAuth()

  const Nevigate = useNavigate()

  return (
    <div>
      <h1>User Profile {auth.user}</h1>
      <button
        onClick={() => {
          auth.logout()
          Nevigate('/')
        }}>
        Log Out</button>
    </div>
  )
}

export default Profile