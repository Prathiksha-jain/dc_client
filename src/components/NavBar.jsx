import React from "react";
import {Row, Col } from "react-bootstrap";
import "../index.css";

const NavBar = () => {
  return (
    <div className="NavBar_container">
          <Row className="align-items-center">
            <Col xs={12} md={8} className="logo_left">
                <div className="left_image">
                  <img
                    height="100"
                    id="logo_left"
                    src="https://cdn.s3waas.gov.in/s33a835d3215755c435ef4fe9965a3f2a0/uploads/2018/07/2018072898.png"
                    alt="GoK"
                  />
                </div>
                <div className="logo-text">
                  <strong lang="kn" className="site_name_regional">
                    ದಕ್ಷಿಣ ಕನ್ನಡ ಜಿಲ್ಲೆ
                  </strong>
              <h1 className="site_name_english">DAKSHINA KANNADA DISTRICT</h1>
                </div>

            </Col>
            <Col xs={12} md={4}>
              <div className="right_image text-center">
                <img
                  height="100"
                  src="https://dk.nic.in/wp-content/themes/district-theme-5/images/digital-india.png"
                  alt="Digital India"
                />
              </div>
            </Col>
          </Row>
    </div>
  );
};

export default NavBar;
