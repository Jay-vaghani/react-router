import React from 'react'
import { useNavigate } from 'react-router-dom'


function Order() {

    const Navigate = useNavigate()


    return (
        <div>
            <h1>Order Conformed</h1>
            {/* <button onClick={() => Navigate('/')}>Go Home</button> */}
            <button onClick={() => Navigate('/')}>Go Home</button>

        </div>
    )
}

export default Order
