import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const handleChange = (focus) => {
    setCredentials((data) => ({
      ...data,
      [focus.target.id]: focus.target.value,
    }));
  };

  const [credentails, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const handleClick = async (focus) => {
    focus.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      /*const res = */ await fetch(
        "https://guesthomesapi.azurewebsites.net/api/users/login/",
        {
          method: "POST",
          body: JSON.stringify({
            username: credentails.username,
            password: credentails.password,
          }),

          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then((res) => dispatch({ type: "LOGIN_SUCCESS", payload: res }))
        .then(() => navigate("/"));
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL", payload: error.response });
    }
  };
  console.log(user);

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          onClick={handleClick}
          className="login__button"
        >
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
