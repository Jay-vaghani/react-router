import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function UserDetails() {

    const params = useParams()

    const [searchParams, setSearchParams] = useSearchParams()

    const ShowActiveUser = searchParams.get('filter') === 'active'
    console.log(ShowActiveUser);


    return (
        <div>
            <h3>This Is {params.name} Profile </h3>
            <button onClick={() => setSearchParams({ filter: 'active', true: 'ok' })}>Show Active User</button>
            <button onClick={() => setSearchParams({})}>Reset Filter</button>

            {ShowActiveUser ? <h2>Showing Active User</h2> : <h2>Showing All User</h2>}
        </div>
    )
}

export default UserDetails
