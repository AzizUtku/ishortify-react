import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../../components/Card/Card";
import Navbar from "../../../components/Navbar/Navbar";
import Container from "../../../components/Container/Container";
import { forgotPassword, forgotPasswordSubmit } from "../../../store/actions";

const ForgotPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sentRecoveryCode = useSelector((state) => state.auth.sentRecoveryCode);

  const handleSubmit = () => {
    if (!sentRecoveryCode) {
      dispatch(forgotPassword(username));
    } else {
      dispatch(forgotPasswordSubmit(username, code, newPassword, history));
    }
  };

  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <Container>
      <Navbar links={[]} />
      <div className="wrapper auth-form">
        <Card title="Forgot your password?">
          <div className="auth-form">
            {/* {error && <Alert color="danger">{error}</Alert>} */}
            <label for="email">
              Enter your Username below and we will send a message to reset your
              password
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            {sentRecoveryCode && (
              <>
                <label for="code">Code in the email</label>
                <input
                  type="text"
                  name="code"
                  placeholder="Enter code in the email"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
                <label for="email">New password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
              </>
            )}
            <button className="mt-2" onClick={handleSubmit}>
              Reset my password
            </button>
            <Link to="/signin">
              <p>Return to sign in</p>
            </Link>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default ForgotPassword;
