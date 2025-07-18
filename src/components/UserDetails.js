import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams(); // Get the user ID from the route
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const user = users.find((item) => item.id === Number(id));

  if (loading) return <div>Loading...</div>;
  if (!user) return <p>User not found</p>;

  return (
    <div>
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
    </div>
  );
}

export default UserDetails;
