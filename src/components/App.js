
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";

const App = () => {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>{setUsers(data) 
      console.log(data)
    })
    .catch((error)=>console.log(error))
  },[])
  return (
    <Router>
      <Routes>
        <Route path="/users/:id" element={<UserDetails users = {users}/>}/>
        <Route path ="/" element={<UserList users = {users}/>}/>
      </Routes>
    </Router>
  )
}

export default App
