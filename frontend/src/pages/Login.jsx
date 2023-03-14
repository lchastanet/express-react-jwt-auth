import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import expressAPI from "../services/expressAPI";
import { useAuthContext } from "../contexts/authContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      expressAPI
        .post("/api/login", { email, password })
        .then((res) => {
          const user = { ...res.data, roles: JSON.parse(res.data.roles) };

          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/movies");
        })
        .catch((err) => console.log(err.response.data));
    } else {
      alert("Please specify email and password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "18rem" }}
      className="m-auto mt-5"
    >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          className="form-control"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          className="form-control"
          id="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Connexion
      </button>
    </form>
  );
}

export default Login;
