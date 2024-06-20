import React, { useState, useContext } from "react";
import UserContext from "@/context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        className="bg-black border border-green-600 rounded mx-2 p-1"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        className="bg-black border border-green-600 rounded mx-2 p-1"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        className="bg-black border border-green-600 rounded mx-2 p-1"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
