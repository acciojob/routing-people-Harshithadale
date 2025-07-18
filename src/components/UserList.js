import React from "react";
import { Link } from "react-router-dom";
function UserList({users}) {
  return (
    <div>
      <h1>User List</h1>
      {users.length === 0
        ? "loading"
        : users.map((item, ind) => {
            return (
              <ul>
                <Link to={`/users/${item.id}`}>
                  <li>{item.name}</li>
                </Link>
              </ul>
            );
          })}
    </div>
  );
}

export default UserList;
