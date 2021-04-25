import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import { Auth } from 'aws-amplify';
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../../components/Card/Card";
import Navbar from "../../../components/Navbar/Navbar";
import Container from "../../../components/Container/Container";
import { register } from "../../../store/actions";
const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // const { error } = useSelector((state) => state.auth);

  const handleSubmit = () => {
    dispatch(register(username, email, password, history));
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Navbar links={[]} />
      <div className="wrapper auth-form">
        <Card title="Sign up as a business">
          <div className="auth-form">
            {/* {error && <Alert color="danger">{error}</Alert>} */}
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {setUsername(e.target.value)}}
            />

            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />

            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <button className="mt-4" onClick={handleSubmit}>Sign up</button>
            <Link to="/signin">
              <p>Already have an account?</p>
            </Link>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Signup;
