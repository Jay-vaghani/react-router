import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

function NavBar() {

    // const NavLinkStyle = ({ isActive }) => {
    //     return {
    //         fontWeight: isActive ? '900' : 'normal'
    //     }
    // }

    const auth = useAuth()

    return (
        <div>
            <nav>

                {/* <Link to='/'>Home</Link>
                <Link to='/about'>About</Link> */}


                <NavLink to='/' style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? '900' : '400'
                    }
                }}>Home</NavLink>


                <NavLink to='/about' style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? '900' : '400'
                    }
                }}>About</NavLink>


                <NavLink to='/products' style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? '900' : '400'
                    }
                }}>Products</NavLink>

                <NavLink to='/user' style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? '900' : '400'
                    }
                }}>User</NavLink>

                <NavLink to='/profile' style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? '900' : '400'
                    }
                }}>Profile</NavLink>


                {!auth.user && <NavLink to='/login' style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? '900' : '400'
                    }
                }}>Login</NavLink>}
            </nav>
        </div>
    )
}

export default NavBar
