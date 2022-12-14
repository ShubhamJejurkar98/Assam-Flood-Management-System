import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { add } from "../../api/api";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function RescueForm() {
  const [inputs, setinputs] = useState({});

  const navigate = useNavigate();
  function serverData() {
    // console.log("sever method test");
    add({
      ContactNo: "7755652598",
      Address: "Nit road silchar",
      CountPeople: "15",
    });
  }
  const styles = {
    cardstyle: {
      width: "40rem",
      marginBottom: "20rem",
    },
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="pt-5 pb-5 ">
          <Card style={styles.cardstyle}>
            <Alert variant="secondary">
              <div className="d-flex justify-content-end mb-4">
                VICTIM ID : 1212
              </div>
              <Alert.Heading className="d-flex justify-content-center">
                RESCUE FORM VICTIMS
              </Alert.Heading>
            </Alert>
            <Form className="mt-1 p-3">
              <Form.Group className="mb-3">
                <Form.Label>Contact No.:</Form.Label>
                <Form.Control
                  type="number"
                  value={inputs.ContactNo}
                  onChange={(e) => setinputs(e.target.value)}
                  placeholder="Enter Contact Number"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Current Address:</Form.Label>
                <Form.Control
                  onChange={(e) => setinputs(e.target.value)}
                  type="text"
                  value={inputs.Address}
                  placeholder="Enter Your Address"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Count of People:</Form.Label>
                <Form.Control
                  onChange={(e) => setinputs(e.target.value)}
                  type="number"
                  value={inputs.CountPeople}
                  placeholder="Enter Count in Number"
                />
              </Form.Group>

              <Row className="pt-3">
                <Col>
                  {" "}
                  <Button
                    onClick={(e) => {
                      navigate("/RequestSlip");
                      e.preventDefault();
                      serverData();
                    }}
                    variant="success"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Col>
                <Col>
                  <span className="d-flex justify-content-end">
                    <Button
                      onClick={(e) => {
                        navigate("/");
                        e.preventDefault();
                        serverData();
                      }}
                      variant="success"
                      type="submit"
                    >
                      Back
                    </Button>
                  </span>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default RescueForm;
