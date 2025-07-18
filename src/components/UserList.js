import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
function UserList() {
const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <h1>User List</h1>
      {users.length === 0
        ? "Loading..."
        : users.map((item, ind) => {
            return (
              <ul>
                <li>
                  <a
                    href={`/users/${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/users/${item.id}`);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              </ul>
            );
          })}
    </div>
  );
}

export default UserList;
