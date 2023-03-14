import { useEffect, useState } from "react";
import expressAPI from "../services/expressAPI";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    expressAPI.get("/api/user").then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1>UsersList</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
