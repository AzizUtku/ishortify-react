import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { redirectUrl } from "../../store/actions";

const Redirect = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { key } = props.match.params;
  dispatch(redirectUrl(key, history));

  return (
    <>
    </>
  );
};

export default Redirect;
