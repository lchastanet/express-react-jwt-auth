import { useState } from "react";
import { useNavigate } from "react-router-dom";

import expressAPI from "../services/expressAPI";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if ((email, password, name)) {
      expressAPI
        .post("/api/user", { email, password, name })
        .then(() => navigate("/login"))
        .catch((err) => console.error(err));
    } else {
      alert("You must provide a name, an eamil and a password");
    }
  };

  return (
    <form
      onSubmit={handleForm}
      style={{ width: "18rem" }}
      className="m-auto mt-5"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="name"
          className="form-control"
          id="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
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
          className="form-control"
          id="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Inscription
      </button>
    </form>
  );
}

export default SignUp;
