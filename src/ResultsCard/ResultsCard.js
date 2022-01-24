import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

import QuadruplexCard from "../QuadruplexCard/QuadruplexCard";

const ResultsCard = ({ sequence }) => {
  const [quadruplexes, setQuadruplexes] = useState();

  const getQuadruplexes = (sequence) => {
    const values = sequence.match(/GGGGG*/g) || [];

    setQuadruplexes(values);
  };

  useEffect(() => {
    getQuadruplexes(sequence.sequence);
  }, [sequence]);

  const hilightQuadruplexes = (sequence) => {
    const regex = new RegExp((/GGGGG*/), "g");
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = sequence.split(regex);
    console.log(parts);
    return (
      <span>
        {parts.map((part) => (part === regex ? <b>{part}</b> : part))}
      </span>
    );

    // let hilight = sequence.replaceAll(/GGGGG*/g, (substring) => {
    //   return "<br>" + substring + "</br>";
    // });
    // let parsedHTML = sequence.replace(new RegExp(/GGGGG*/, "gi"), (match) => `<mark>${match}</mark>`);

    // let parser = new DOMParser();
    // var htmlDoc = parser.parseFromString(hilight, "text/html");

    // console.log(htmlDoc.getElementsByTagName("body")[0].innerHTML);
    // const parsedHTML = htmlDoc.getElementsByTagName("body")[0].innerHTML;

    // return hilight;
    // return parsedHTML;
  };

  return (
    <Row className="mb-4">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{sequence.name}:</Card.Title>
            <Card.Text>{hilightQuadruplexes(sequence.sequence)}</Card.Text>
            <Card.Text>
              Number of quadruplexes:{" "}
              {quadruplexes ? quadruplexes.length : null}
            </Card.Text>
            {quadruplexes &&
              quadruplexes.map((quadruplex, index) => {
                return (
                  <QuadruplexCard
                    index={index}
                    sequence={sequence.sequence}
                    quadruplex={quadruplex}
                  />
                );
              })}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ResultsCard;
