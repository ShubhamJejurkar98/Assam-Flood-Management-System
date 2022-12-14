import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function RescueForm() {
  const navigate = useNavigate();
  const styles = {
    cardstyle: {
      width: "45rem",
      marginBottom: "20rem",
    },
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="pt-5 pb-5">
          <Card style={styles.cardstyle}>
            <Alert variant="secondary">
              <div className="d-flex justify-content-end mb-4">
              VICTIM ID : 1212
              </div>
              <Alert.Heading className="d-flex justify-content-center">
                FOOD & MEDICAL REQUEST
              </Alert.Heading>
            </Alert>
            <div className="m-4">
              <Form >
                <h5>
                  <b> TYPE OF REQUEST</b>
                </h5>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="FOOD" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="MEDICAL" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="BOTH" />
                    </Form.Group>
                  </Col>
                </Row>
                <br />
                <h5>
                  <b> Select Medical Item with Quality</b>
                </h5>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Cotton & Antiseptic Liquids"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control size="sm" type="number" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Bandages Rolls & Medical Tapes"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control size="sm" type="number" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Dettol" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control size="sm" type="number" />
                  </Col>
                </Row>{" "}
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Pain Killers" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control size="sm" type="number" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="First Aid Kit" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control size="sm" type="number" />
                  </Col>
                </Row>
                <br />
                <h5>
                  <b>Select Food Items with Quantity</b>
                </h5>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Drinking Water" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control size="sm" type="number" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Rice & Dal" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control size="sm" type="number" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Baby Food" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control size="sm" type="number" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Biscuits" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control size="sm" type="number" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Milk" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Control size="sm" type="number" />
                  </Col>
                </Row>
                <br />
                <div className="d-flex justify-content-center pt-4">
                  <Button
                    onClick={() => {
                      navigate("/FoodMedReceipt");
                    }}
                    variant="success"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default RescueForm;
