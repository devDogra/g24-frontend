import { useState } from "react";
import axios from "axios"; 
function App() {
  const [email, setEmail] = useState(""); 
  const [name, setName] = useState(""); 
  const [users, setUsers] = useState([])

  async function getUsers() {
    const url = import.meta.env.VITE_API_URL + "/users"; 
    const response = await axios.get(url)
    setUsers(response.data); 
  }
  async function createUser() {
    const url = import.meta.env.VITE_API_URL + "/users"; 
    const newUser = { email, name }; 
    await axios.post(url, newUser); 
    alert("User created"); 
  }
  return (
    <>
      <ul>
        {users.map(u => <li key={u.email}>{u.name} {u.email}</li>)}
      </ul>

      <button onClick={getUsers}>Get users</button>
      <button onClick={createUser}>Create user</button>
      <input placeholder="name" onChange={(e) => setName(e.target.value)}/>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
    </>
  )
}

export default App
