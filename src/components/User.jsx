import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
    return (
        <div>
            <Link to='user1'><h3>User 1</h3></Link>
            <Link to='user2'><h3>User 2</h3></Link>
            <Link to='user3'><h3>User 3</h3></Link>
            <Link to='admin'><h3>Admin</h3></Link>

            <Outlet />
        </div>
    )
}

export default User
