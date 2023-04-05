import React from "react"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

export default function Filter({users, filter, setFilter}) {

    const usersCities = users.map(user => {
        return (
            <MenuItem key={user.id} value={user.address.city}>{user.address.city}</MenuItem>
        )
    })

    function handleChange(e) {
        e.target.value === 'all' ? setFilter('') : setFilter(e.target.value)
    }


    return(

        <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="City"
                value={filter}
                onChange={handleChange}
            >
                <MenuItem value={'all'}>All</MenuItem>
                {usersCities}
            </Select>
        </FormControl>
    )
}