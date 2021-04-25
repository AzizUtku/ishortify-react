import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, CardBody, Table, Button } from "reactstrap";
import CopyToClipboard from "../../components/CopyToClipboard/CopyToClipboard";
import { createApiKey, deleteApiKey, fetchApiKey } from "../../store/business/actions";

const ApiDetails = () => {
  const dispatch = useDispatch();
  const apiKey = useSelector((state) => state.business.apiKey);
  const { email, username } = useSelector((state) => state.auth.user);

  const faName = !apiKey ? "plus" : "times";

  useEffect(() => {
    dispatch(fetchApiKey());
  }, [dispatch])

  const handleApiKey = () => {
    if (apiKey) {
      dispatch(deleteApiKey());
    } else {
      dispatch(createApiKey());
    }
  };
  return (
    <>
      <Row className="mt-8">
        <Col lg="12" className="mt-4 stretched_card">
          <Card>
            <CardBody>
              <h4 className="card_title float-left">User Details</h4>
              <button
                onClick={handleApiKey}
                type="button"
                className="pt-2 pb-2 pl-3 pr-3 mr-2 float-right"
                style={{ width: "inherit", fontSize: "1rem" }}
              >
                <i className={`fa fa-${faName}`} />{" "}
                {!apiKey ? "Create new API key" : "Remove API key"}
              </button>

              <div className="clearfix" />
              <br />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">{email}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Username</h6>
                </div>
                <div className="col-sm-9 text-secondary">{username}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">API Key</h6>
                </div>
                <div className="col-sm-9 text-secondary inline-block">
                  {apiKey ? apiKey : "You have not any API key, please create new one."}
                  {apiKey && <CopyToClipboard text={apiKey} />}
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ApiDetails;
