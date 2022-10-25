import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
    return (
        <div>
            <h1>Products</h1>
            <input type="text" placeholder='Search' />


            <Link to='product'><h3>Featured Products</h3></Link>
            <Link to='new'><h3>New Products</h3></Link>

            <Outlet />
        </div>
    )
}

export default Products
