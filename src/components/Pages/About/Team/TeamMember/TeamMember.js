import React from "react";
import { Card } from "react-bootstrap";
import "./TeamMember.css";

const TeamMember = ({ member }) => {
  const { name, title, img } = member;
  return (
    <>
      <Card className="h-100 shadow-sm animate__animated animate__fadeInUp animate__delay-1s">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title style={{ fontSize: 26, color: "#006d77" }}>
            {name}
          </Card.Title>
          <p style={{ fontSize: 14, color: "#073b4c" }}>{title}</p>
          <div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default TeamMember;
