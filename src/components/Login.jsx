import React, { useState } from "react";
import { saveUser, getUser } from "./localStorageFunctions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const user = getUser(email);
    if (!user) {
      setError("User not found");
    } else if (user.password !== password) {
      setError("Invalid password");
    } else {
      localStorage.setItem("loggedIn", true);
      // Redirect user to logged in page
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}