import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import './App.css'
import UserList from './components/UserList'

const userList = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  headers: {'dmx-header': 'dmx'}
})

export const UserContext = React.createContext();

function App() {
  const [users, setUsers] = useState([])
  

  useEffect(() => {
    userList.get('users')
            .then(response => setUsers(response.data))
  }, [])

  console.log(users)

  return (
    <div className="App">
      <h1>Our Teammates</h1>
      <UserContext.Provider value={users}>
        <UserList />
      </UserContext.Provider>
    </div>
  )
}

export default App
