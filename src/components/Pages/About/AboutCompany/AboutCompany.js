import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";

const AboutCompany = () => {
  return (
    <>
      <Container fluid className="py-5 colored-bg">
        <Container className="text-white">
          <h2 className="text-center fs-2 mb-5 text-white">
            Info About Our <span style={{ color: "#ffddd2" }}>Company</span>
          </h2>
          <Row>
            <Col md={6} lg={3}>
              <div className="text-center animate__animated animate__fadeInLeft animate__delay-1s">
                <h3 style={{ fontSize: 50 }} className="counter">
                  <CountUp end={100} duration={1} />
                </h3>

                <h6>Total Founded </h6>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                <h3 style={{ fontSize: 50 }} className="counter">
                  <CountUp end={35000} duration={1} />
                </h3>

                <h6>Total Kilometers </h6>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center animate__animated animate__fadeInDown animate__delay-1s">
                <h3 style={{ fontSize: 50 }} className="counter">
                  <CountUp end={19} duration={2} />
                </h3>

                <h6>Hands Used On </h6>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center animate__animated animate__fadeInRight animate__delay-1s">
                <h3 style={{ fontSize: 50 }} className="counter">
                  <CountUp end={205} duration={1} />
                </h3>

                <h6>Pleased Clients </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default AboutCompany;
