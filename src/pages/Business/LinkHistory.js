import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, Table, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import LinkItem from '../../components/LinkItem'
import { fetchAnalytics } from '../../store/actions';

const LinkHistory = ({linkHistory}) => {
  const dispatch = useDispatch();
  const links = useSelector(state => state.business.links)

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch])

  return (
    <>
      <Row>
        <Col lg="12" className="mt-4 stretched_card">
          <Card>
            <CardBody>
              <h4 className="card_title" style={{ float: 'left' }}>
                Link History
              </h4>
              <Table responsive striped bordered hover className="mb-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Shortened Link</th>
                    <th scope="col">Original Link</th>
                    <th scope="col">Total Hits</th>
                    <th scope="col">Mobile Hits</th>
                    <th scope="col">Desktop Hits</th>
                    <th scope="col">Hits From Turkey</th>
                    <th scope="col">Hits From United States</th>
                    <th scope="col">Hits From Other Countries</th>
                  </tr>
                </thead>
                <tbody>
                  {links.map((link, index) => (
                    <LinkItem key={index} no={index+1} link={link} />
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LinkHistory;
