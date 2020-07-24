import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { auth } from "../fire";
import { AuthContext } from "./Auth.js";
import './Login.css'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <input className="login-input" name="email" type="email" placeholder="Email:" />
        <input className="login-input" name="password" type="password" placeholder="Password:" />
        <button className="primary-button" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);