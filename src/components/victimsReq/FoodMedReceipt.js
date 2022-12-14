import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Stack } from "react-bootstrap";
import { Table } from "react-bootstrap";

function FoodMedReceipt() {
  const styles = {
    tbl: {
      width: "40vw",
    },
    cardstyle: {
      width: "35rem",
      marginBottom: "20rem",
    },
    formsize: {
      lineHeight: "2rem",
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
                FOOD & MEDICAL REQUEST RECEIPT
              </Alert.Heading>
            </Alert>

            <Form className="mt-1 p-3" >
              <div style={styles.formsize}>
                <b>Dear Alex Peterson (4545456)</b>
                <p>
                  Thank You, for using our online portal. Your Booking details
                  are indicated below.
                </p>
                <br></br>
                <Stack direction="horizontal" gap={5}>
                  <div>
                    <b>Booking ID :</b> 45456{" "}
                  </div>
                  <div>
                    <b> Order Date :</b> 22/06/2022
                  </div>
                </Stack>
                <div>
                  <b> Name :</b> Alex Peterson
                </div>
                <div>
                  <b> Address :</b> south east,towar road,california
                </div>
                <br />
                <div>
                  <b> Product Details:</b>
                </div>
              </div>
              <Table bordered hover>
                <tbody>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Qty</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>**** *****</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>**** *****</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>**** *****</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </Table>

              <div className="d-flex justify-content-center mt-5">
                <Button variant="success" type="submit">
                  Print
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FoodMedReceipt;
