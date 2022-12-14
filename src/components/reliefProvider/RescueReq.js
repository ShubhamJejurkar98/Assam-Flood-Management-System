import React from "react";

import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

export default function Relief2() {
  
  const navigate = useNavigate();
  
  const styles = {

    cardstyle: {
      width: "35rem",
      marginBottom: "20rem",
    },
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5 ">
        <Card style={styles.cardstyle}>
          <Alert variant="secondary">
            <div className="d-flex justify-content-end mb-4">
              RESCUE PROVIDER ID : 101
            </div>
            <Alert.Heading className="d-flex justify-content-center">
              RESCUE PROVIDER NAME
            </Alert.Heading>
          </Alert>
          <Card.Body>
            <Card.Title className="d-flex justify-content-center pb-4">
              Requests For Rescue
            </Card.Title>

            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody >
                <tr>
                  <td>1</td>
                  <td>Shubham Jejurkar</td>
                  <td>9527685876</td>
                  <td>Silchar H.O, Cachar, Assam, India (IN), Pin Code:-788001</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Umer Momin</td>
                  <td>7058644565</td>
                  <td>Ghungoor, Masimpur, Silchar, Assam 788014</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sunny Dalvi</td>
                  <td>9850213556</td>
                  <td>Sonai Road, Kanakpur, Silchar, Assam 788006</td>
                </tr>
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
