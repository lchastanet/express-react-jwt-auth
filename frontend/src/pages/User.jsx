import React from "react";
import { Outlet } from "react-router-dom";

import { useAuthContext } from "../contexts/authContext";

function User() {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>Hello {user.username} !</h1>
      <Outlet />
    </div>
  );
}

export default User;
