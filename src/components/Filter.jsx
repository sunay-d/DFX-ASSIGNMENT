import React from "react"
import { UserContext } from '../App'

export default function Filter({users, setFilter}) {

    const usersCities = users.map(user => {
        return (
            <option key={user.id} value={user.address.city}>{user.address.city}</option>
        )
    })

    function handleChange(e) {
        e.target.value === 'all' ? setFilter(null) : setFilter(e.target.value)
    }

    return(
        <div>
            <label>
                {'City  '}
            </label>
            <select onChange={handleChange}>
                <option value="all">All</option>
                {usersCities}
            </select>
        </div>
    )
}