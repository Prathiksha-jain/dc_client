import React from 'react';
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row, Col, Card, Image } from 'react-bootstrap';

function Analysis() {
  return (
    <div className='mt-5 analysis-container'>
      <Row className='pt-5 pb-5 justify-content-center'>
        <Col xs={4}>
        <Card className='ana-card'>
          <h2>Number of projects running</h2>
          <Image src="https://pbs.twimg.com/media/ForlB3sXEAo_W8V?format=jpg&name=large" alt="Number of projects running" fluid />
          <p>210</p>
          <table className="yellow-table">
                <tbody>
                  <tr>
                    <td className="bullet-cell">Registered Projects</td>
                    <td>320</td>
                  </tr>
                  <tr>
                    <td className="bullet-cell">Running Projects</td>
                    <td>210</td>
                  </tr>
                  <tr>
                    <td className="bullet-cell">Pending Projects</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td className="bullet-cell">Completed Projects</td>
                    <td>60</td>
                  </tr>
                </tbody>
              </table>
          </Card>
          </Col>
        <Col xs={4}>
        <Card className='ana-card'>
          <h2>Project summary</h2>
          <table className="yellow-table">
                <tbody>
                  <tr>
                    <td className="bullet-cell">Total help reached</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td className="bullet-cell">Total event uploaded</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className="bullet-cell">Total amount required</td>
                    <td>2Cr</td>
                  </tr>
                  <tr>
                    <td className="bullet-cell">Total Work done</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </table>
          </Card>
          </Col>
      </Row>
    </div>
  );
}


export default Analysis