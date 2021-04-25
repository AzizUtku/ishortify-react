import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../../components/Card/Card";
import Navbar from "../../../components/Navbar/Navbar";
import Container from "../../../components/Container/Container";
import { verifyEmail } from "../../../store/actions";

const VerifyEmail = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // const { error } = useSelector((state) => state.auth);


  const [code, setCode] = useState("");

  const { verification } = useSelector((state) => state.auth);
  const { email, username } = verification;


  const handleSubmit = () => {
    dispatch(verifyEmail(username, code, history));
  };

  if (!email) {
    return (
      <Redirect to="/" />
    );
  }

  const censorWord = (str) => {
    return str[0] + "*".repeat(str.length - 1);
  };

  const censorEmail = (email) => {
    let arr = email.split("@");
    let arr2 = arr[1].split(".");
    return censorWord(arr[0]) + "@" + censorWord(arr2[0]) + "." + arr2[1];
  };

  const hiddenEmail = censorEmail(email);

  return (
    <Container>
      <Navbar links={[]} />
      <div className="wrapper auth-form">
        <Card title="Verify your email">
          <div className="auth-form">
            <label for="code">
              We have sent a code by email to {hiddenEmail}. Enter it below to
              confirm your account.
            </label>
            <input
              type="text"
              name="code"
              placeholder="Enter verification code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
            <button className="mt-2" onClick={handleSubmit}>
              Confirm account
            </button>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default VerifyEmail;
