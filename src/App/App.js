import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

import JsonForm from "../JsonForm/JsonForm";
import "./App.css";
import ResultsCard from "../ResultsCard/ResultsCard";

function App() {
  const [sequences, setSequences] = useState();
  const [quadruplexSequences, setQuadruplexSequences] = useState();

  const getQuadruplexSequences = (sequences) => {
    const filtered = [];

    sequences.forEach((sequence) => {
      if (sequence.sequence.includes("GGGG")) {
        filtered.push(sequence);
      }
    });
    return filtered;
  };

  useEffect(() => {
    if (sequences) {
      setQuadruplexSequences(getQuadruplexSequences(sequences));
    }
  }, [sequences]);

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Evonetics quadruplex annotator</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>Paste Json in the following format:</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>
            {`{ "sequences": [ { "name": "seq1", "sequence": "ATTC" }, { "name": "seq2", "sequence": "GGGGTATGGGG" }, { "name": "seq3", "sequence": "GATTACA" }, { "name": "seq4", "sequence": "CATGGGGTA" } ] }`}
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>
            - Maximum <strong>27</strong> sequences long
          </p>
          <p>
            - No more than <strong>100</strong> nucleotides in a sequence
          </p>
        </Col>
      </Row>
      <JsonForm setSequences={setSequences} />
      {quadruplexSequences ? (
        <>
          <Row className="mt-5">
            <Col>
              <h2>Overview</h2>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Number of sequences that contain a quadruplex
                  </Card.Title>
                  <Card.Text id="quadNo" className="text-center">
                    {quadruplexSequences.length}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Names of sequences that contain a quadruplex
                  </Card.Title>
                  <Card.Text>
                    {quadruplexSequences.map((sequence) => {
                      return `${sequence.name}, `;
                    })}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4 mb-4">
            <Col>
              <h2>Detailed results</h2>
            </Col>
          </Row>
          {sequences.map((sequence) => {
            return (
              <ResultsCard sequence={sequence}/>
            );
          })}
        </>
      ) : null}
    </Container>
  );
}

export default App;
