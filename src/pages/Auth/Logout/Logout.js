import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/actions";

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log("Logout rendered!");
  useEffect(() => {
    dispatch(logout(history));
  }, [dispatch, history])
 

  return <div />;
};

export default Logout;
