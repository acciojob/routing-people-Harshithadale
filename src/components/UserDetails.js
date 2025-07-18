import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails({ users }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const user = users.find((item) => item.id === Number(id))
  useEffect(()=>{
    const timeout = setTimeout(()=>{
        setLoading(false)
    },1000)
    return ()=>clearTimeout(timeout)
  },[])

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <>
          <h1>User Details</h1>
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Username:</b> {user.username}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone:</b> {user.phone}
          </p>
          <p>
            <b>Website:</b> {user.website}
          </p>
        </>
      )}
    </div>
  );
}

export default UserDetails;
