import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../../components/Card/Card";
import "./Signin.scss";
import Navbar from "../../../components/Navbar/Navbar";
import Container from "../../../components/Container/Container";
import { login } from "../../../store/actions";

const Signin = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    dispatch(login(username, password, history));
  };

  return (
    <Container>
      <Navbar links={[]} />
      <div className="wrapper auth-form">
        <Card title="Sign in as a business">
          <div className="auth-form">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {setUsername(e.target.value)}}
            />

            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <Link to="/reset/password">
              <p className="align-left">Forgot your password?</p>
            </Link>
            <button onClick={handleSubmit}>Sign in</button>
            <Link to="/signup">
              <p>Don't you have an account?</p>
            </Link>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Signin;
