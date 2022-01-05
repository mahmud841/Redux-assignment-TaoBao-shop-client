import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mission from "../../../../images/mission.jpg";
import vission from "../../../../images/vission.jpg";

const MissionVission = () => {
  return (
    <>
      <Container className="py-5 px-3 bg-white">
        <Row className=" align-items-center">
          <Col lg={6}>
            <div className="text-center text-lg-start animate__animated animate__fadeInLeft">
              <img className="img-fluid" src={mission} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-3 mt-ld-0 text-center text-lg-start animate__animated animate__fadeInRight">
              <p>How do we co-operate with clients?</p>
              <h3 style={{ color: "#006d77" }}>Our Mission</h3>
              <p className="text-muted">
                Our mission is to deliver a positive, reliable experience to
                each and every one of our clients while offering exceptional
                value in the marketplace and setting the standard for
                professionalism in the logistic solutions we provide. In
                addition to operating our business profitably, we strive to
                operate it responsibly both for our clients and our employees,
                for whom our goal is to provide a safe and secure work
                environment. Clients satisfaction is our prime concern.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 align-items-center vission-row">
          <Col lg={6}>
            <div className="mt-3 mt-ld-0 text-center text-lg-start animate__animated animate__fadeInLeft animate__delay-1s">
              <p>How do we co-operate with Clients?</p>
              <h3 style={{ color: "#006d77" }}>Our Vission</h3>
              <p className="text-muted">
                Our aim is to act as an indispensable partner to our clients by
                helping them build and maximize sustainable competitive
                advantages. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla dolorum quaerat mollitia odio commodi facilis dignissimos non impedit aspernatur maiores, quia reiciendis laborum nostrum animi, suscipit perferendis facere. Doloribus.
              </p>
            </div>
          </Col>
          <Col lg={6} className="">
            <div className="text-center text-lg-end mt-3 mt-ld-0 animate__animated animate__fadeInRight animate__delay-1s">
              <img className="img-fluid" src={vission} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MissionVission;
