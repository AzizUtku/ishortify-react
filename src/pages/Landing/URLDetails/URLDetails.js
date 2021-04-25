import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, CardBody, Table, Button } from "reactstrap";
import { mainFetchApiSuccess } from "../../../store/actions";
import CopyToClipboard from "../../../components/CopyToClipboard/CopyToClipboard";

const URLDetails = () => {
  const dispatch = useDispatch();
  const originalUrl = useSelector((state) => state.main.originalUrl);
  const shortenedUrl = useSelector((state) => state.main.shortenedUrl);

  const handleClose = () => {
    dispatch(mainFetchApiSuccess('shortenedUrl', null));
  };
  return (
    <>
      {shortenedUrl && (
        <Row className="mb-4">
          <Col lg="12" className="stretched_card">
            <Card>
              <CardBody className="url-details">
                <h4 className="card_title float-left">URL Details</h4>
                <button
                  onClick={handleClose}
                  type="button"
                  className="pt-2 pb-2 pl-3 pr-3 mr-2 float-right"
                  style={{ width: "inherit", fontSize: "1rem" }}
                >
                  <i className={`fa fa-times`} />
                </button>
                <div className="clearfix" />
                <br />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Original URL</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{originalUrl}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Shortened URL</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {shortenedUrl}
                    {shortenedUrl && <CopyToClipboard text={shortenedUrl} />}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default URLDetails;
