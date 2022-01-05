import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FeatureContact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faClock,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const FeatureContact = () => {
  return (
    <>
      <Container fluid className="colored-bg py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={4} lg={4}>
              <div className="d-flex gap-3 text-white feature-box animate__animated animate__fadeInLeft">
                <div>
                  <span className="feature-icon">
                    <FontAwesomeIcon className="fs-2" icon={faPhoneVolume} />
                  </span>
                </div>
                <div>
                  <h4>Emergency Center</h4>
                  <p>
                    Give us a free call <br /> +880 1745876546
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div className="d-flex gap-3 text-white feature-box animate__animated animate__fadeInUp">
                <div>
                  <span className="feature-icon">
                    <FontAwesomeIcon className="fs-2" icon={faClock} />
                  </span>
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>
                    Mon-Fri 7AM-7PM <br /> Fri 9AM-6PM
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div className="d-flex gap-3 text-white feature-box-last animate__animated animate__fadeInRight">
                <div>
                  <span className="feature-icon">
                    <FontAwesomeIcon className="fs-2" icon={faMapMarker} />
                  </span>
                </div>
                <div>
                  <h4>Our Address </h4>
                  <p>
                    Uttara Sector 5 <br /> Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default FeatureContact;
