import React from 'react'
import { useParams } from 'react-router-dom'
function UserDetails({users}) {
    const {id} = useParams()
    const user = users.find(item=>item.id === Number(id))
  return (
    <div>
        { console.log(user)}
        <h1>User Details</h1>
        <p><b>Name:</b>{user.name}</p>
        <p><b>Name:</b>{user.username}</p>
        <p><b>Name:</b>{user.email}</p>
        <p><b>Name:</b>{user.phone}</p>
        <p><b>Name:</b>{user.website}</p>
    </div>
  )
}

export default UserDetails