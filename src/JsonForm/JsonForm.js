import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const JsonForm = ({ setSequences }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const isJsonParsable = (string) => {
    try {
      JSON.parse(string);
    } catch (e) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setError(false);

    //check if it is json
    if (isJsonParsable(value)) {
      const object = JSON.parse(value);
      console.log(object);
      //   note: could further check structure of object
      setSequences(object["sequences"]);
    } else {
      setError(true);
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e, value)}>
      <Row className="mt-4 justify-content-center">
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={15}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Form.Label
              className={error ? "dangerText" : "dangerText invisible"}
            >
              Please enter Json in the format shown above
            </Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <Button
            variant="primary"
            type="submit"
            disabled={!value || value == ""}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default JsonForm;
