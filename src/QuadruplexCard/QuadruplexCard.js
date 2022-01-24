import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

const QuadruplexCard = ({ sequence, quadruplex }) => {
  const getStart = (quadruplex) => {
    return sequence.indexOf(quadruplex);
  };

  const getEnd = (quadruplex) => [
    sequence.indexOf(quadruplex),
    sequence.indexOf(quadruplex) + quadruplex.length - 1,
  ];
  

  return (
    <Card>
      <Card.Body>
        <Card.Text>start: {getStart(quadruplex)}</Card.Text>
        <Card.Text>end:{getEnd(quadruplex)} </Card.Text>
        <Card.Text>length:</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QuadruplexCard;
