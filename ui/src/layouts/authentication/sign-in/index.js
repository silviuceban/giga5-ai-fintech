import { useState } from "react";
import { Link } from "react-router-dom";
import { useVisionUIController, setUser } from "context";

import "./index.css";

function SignIn() {
  const [controller, dispatch] = useVisionUIController();
  const { user } = controller;
  const [userData, setUserData] = useState({
    user: null,
    password: null,
  });

  const setName = (value) => {
    setUserData({ ...userData, user: value });
  };

  const setPassword = (value) => {
    setUserData({ ...userData, password: value });
  };
  console.log(user, "vcvdvdfdfd");
  return (
    <div className="auth-container">
      <div className="auth-form">
        <p>Sign in</p>
        <input placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            setUser(dispatch, userData);
            setTimeout(() => {
              setUser(dispatch, userData);
            }, 500);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default SignIn;
