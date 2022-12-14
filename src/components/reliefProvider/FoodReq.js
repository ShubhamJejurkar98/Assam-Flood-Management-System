import React from "react";
// import './FoodReq.css'
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';

export default function Relief3() {
  const navigate = useNavigate();
  const styles = {
    cardstyle: {
      width: "35rem",
      marginBottom: "20rem",
    },
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5">
        <Card style={styles.cardstyle}>
          <Alert variant="secondary">
            <div className="d-flex justify-content-end mb-4">
              RELIEF PROVIDER ID : 101
            </div>
            <Alert.Heading className="d-flex justify-content-center">
              RELIEF PROVIDER NAME
            </Alert.Heading>
          </Alert>
          <Card.Body>
            <Card.Title className="d-flex justify-content-center pb-3">
              Requests For Food & Medical
            </Card.Title>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Type of Request</th>
                  <th>City</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Omkar Utake</td>
                  <td>Food</td>
                  <td>Silchar</td>
                  <td>
                    <Button variant="success" type="submit" size="sm" onClick={handleShow}>
                      Details
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>More Details</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Type of Request: Food</Modal.Body>
                      <p>Selected Food Items: Rice,Milk etc</p>
                      <p>Address: NIT Road, Fakiratilla, Silchar, Assam 788010</p>
                      <p>Contact : 8888523120</p>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Rahul Bari</td>
                  <td>Medical</td>
                  <td>Silchar</td>
                  <td>
                    <Button variant="success" type="submit" size="sm"  onClick={handleShow}>
                      Details
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>More Details</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Type of Request: Medical</Modal.Body>
                      <p>Selected Medical Items: First Aid Kit</p>
                      <p>Address: NIT Road, Fakiratilla, Silchar, Assam 788110</p>
                      <p>Contact : 8877523220</p>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
                {/* <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Button variant="success" type="submit" size="sm">
                      Details
                    </Button>
                  </td>
                </tr> */}
              </tbody>
            </Table>

            <div className="d-flex justify-content-center">
              <Button
                onClick={() => {
                  navigate("/ReliefHome");
                }}
                variant="success"
              >
                Home
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
