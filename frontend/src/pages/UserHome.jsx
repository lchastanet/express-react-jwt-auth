import React from "react";

import { Link } from "react-router-dom";

function UserHome() {
  return (
    <p>
      Welcome to your profile maybe you want{" "}
      <Link to="/user/details">to edit it</Link> ?
    </p>
  );
}

export default UserHome;
