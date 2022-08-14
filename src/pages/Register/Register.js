import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const handleChange = (focus) => {
    setCredentials((data) => ({
      ...data,
      [focus.target.id]: focus.target.value,
    }));
  };
  const handleClick = async (focus) => {
    focus.preventDefault();

    try {
      await fetch("https://guesthomesapi.azurewebsites.net/api/users/new", {
        method: "POST",
        body: JSON.stringify({
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
        }),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => navigate("/login"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="your email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button onClick={handleClick} className="login__button">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
