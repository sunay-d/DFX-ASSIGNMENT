import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import BasicCard from './BasicCard'
import { UserContext } from '../App'

export default function UserList() {
    const users =  React.useContext(UserContext)

    const userList = users.map(user => {
        return (
            <ListItem key={user.id} alignItems="flex-start">
                <BasicCard user={user}/>
            </ListItem>
        )
    })
 
    return (
        <List sx={{ width: '100%', maxWidth: 360, flexDirection: 'row'}}>
            {userList}
        </List>
  );
}