import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function UserList({ users }) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>User List</h1>
      {users.length === 0
        ? "loading..."
        : users.map((item, ind) => {
            return (
              <ul>
                <li
                  href={`/users/${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/users/${item.id}`);
                  }}
                >
                  <a>{item.name}</a>
                </li>
              </ul>
            );
          })}
    </div>
  );
}

export default UserList;
