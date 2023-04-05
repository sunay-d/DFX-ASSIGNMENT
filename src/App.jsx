import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import './App.css'
import UserList from './components/UserList'
import Filter from './components/Filter'

const userList = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  headers: {'dmx-header': 'dmx'}
})

export const UserContext = React.createContext();

function App() {
  const [users, setUsers] = useState([])
  const [displayedUsers, setDisplayedUsers] = useState(users)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    userList.get('users')
            .then(response => setUsers(response.data))
  }, [])

  useEffect(() => {
    const newDisplayedUsers = filter ? users.filter(user => user.address.city === filter) : users
    setDisplayedUsers(newDisplayedUsers)
  }, [filter, users])


  return (
    <div className="App">
      <h1>Our Teammates</h1>
      <Filter users={users} filter={filter} setFilter={setFilter}/>
      <UserContext.Provider value={displayedUsers}>
        <UserList />
      </UserContext.Provider>
    </div>
  )
}

export default App
