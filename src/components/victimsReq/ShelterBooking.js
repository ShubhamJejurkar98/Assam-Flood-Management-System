import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Row, Col, Stack, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addShelterRequest } from "../../api/victimdetailsbedbooking";





function ShelterBooking() {
  const navigate = useNavigate();

  const [victimdetails, setVictimdetails] = useState([
    { VC1_NAME: '', VC1_AGE: '', GENDER1: '' },
    {VC2_NAME:'', VC2_AGE:'', GENDER2:''},
    // {VC3_NAME:'', VC3_AGE:'', GENDER3:''},
    // {VC4_NAME:'', VC4_AGE:'', GENDER4:''},
    // {VC5_NAME:'', VC5_AGE:'', GENDER5:''},
    // {VC6_NAME:'', VC6_AGE:'', GENDER6:''}
  ]);
  // const [formErrors, setFormErrors] = useState({});


  const onValueChange = (e) => {
    const { name, value } = e.target;
    setVictimdetails({ ...victimdetails, [name]: value });

  }

  const addvictimdetails = async () => {
    //setFormErrors(Validate(victimdetails));
    await addShelterRequest(victimdetails);
    navigate("/ShelterBookingReceipt"); 
  }

 
  // const Validate = (values) => {

  //   const errors = {};
  //   if (!values.VC1_NAME) {
  //     errors.VC1_NAME = "Name is required!";
  //   }
  //   if (!values.VC1_AGE) {
  //     errors.VC1_AGE = "Age is required!";
  //   }
  //   if (!values.GENDER1) {
  //     errors.GENDER1 = "Gender is required!";
  //   }
  //   return errors;
  // }; 


  const styles = {
    tbl: {
      width: "40vw",
    },
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
                BED BOOKING
              </Alert.Heading>
            </Alert>
            <Container className="mt-1 p-3">
              <Row>
                <Col sm={6}>
                  <Card.Img
                    style={styles.cardImg}
                    src={require("../../images/rescue.png")}
                  />
                </Col>
                <Col sm={6}>
                  <div>
                    <Stack className="mt-1 p-3">
                      <div>
                        <h6>
                          {" "}
                          <b>Address :</b> NIT Road, Fakiratilla, Silchar, Assam 788010{" "}
                        </h6>
                      </div>
                      <div>
                        <h6>
                          <b>Contact Details:</b> 03842 222 222
                        </h6>
                      </div>
                    </Stack>
                  </div>
                </Col>
              </Row>
              <br />
              <Row className="p-3">
                <Col sm={8}>
                  <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                      <b>Date:</b>
                    </Form.Label>{" "}
                    <Col sm={10}>
                      <input
                        type="date"
                      //   ref={ref}
                      //   onChange={(e) => console.log(e.target.value)}
                      //   onFocus={() => (ref.current.type = "date")}
                      //   onBlur={() => (ref.current.type = "date")}
                      />
                    </Col>{" "}
                  </Form.Group>
                </Col>
                <Col sm={4}></Col>
              </Row>
              <div className="p-3">
                <b>Victim Details:</b>
              </div>

              <Form>
                <Stack gap={1}>
                  <div>
                    <Stack direction="horizontal" gap={1}>
                    <div>
                    <Form.Control onChange={(e) => onValueChange(e)} value={victimdetails.VC1_NAME}
                        style={{ width: "150px" }} name='VC1_NAME' placeholder="Name" />
                        {/* <p>{formErrors.VC1_NAME}</p> */}
                    </div>
                     
                    <div>
                      <Form.Control onChange={(e) => onValueChange(e)} value={victimdetails.VC1_AGE}
                        style={{ width: "150px" }} name='VC1_AGE' placeholder="Age" />
                        {/* <p>{formErrors.VC1_AGE}</p> */}
                        </div>
                        <div>
                      <Form.Select onChange={(e) => onValueChange(e)} value={victimdetails.GENDER1}
                        style={{ width: "150px" }} name='GENDER1'>

                        <option>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>

                      </Form.Select>
                      {/* <p>{formErrors.GENDER1}</p> */}
                      </div>
                    </Stack>
                  </div>
               

                  <div>
                  <Stack direction="horizontal" gap={1}>

                    <Form.Control onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='VC2_NAME' placeholder="Name" />

                    <Form.Control onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='VC2_AGE' placeholder="Age" />

                    <Form.Select onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='GENDER2'>

                      <option>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>

                    </Form.Select>
                  </Stack>
                  </div>

                  {/* <div>
                  <Stack direction="horizontal" gap={1}>

                    <Form.Control onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='VC3_NAME' placeholder="Name" />

                    <Form.Control onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='VC3_AGE' placeholder="Age" />

                    <Form.Select onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='GENDER3'>

                      <option>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>

                    </Form.Select>
                  </Stack>
                  </div>

                  <div>
                  <Stack direction="horizontal" gap={1}>

                    <Form.Control onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='VC4_NAME' placeholder="Name" />

                    <Form.Control onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='VC4_AGE' placeholder="Age" />

                    <Form.Select onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='GENDER4'>

                      <option>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>

                    </Form.Select>
                  </Stack>
                  </div>

                  <div>
                  <Stack direction="horizontal" gap={1}>

                    <Form.Control onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='VC5_NAME' placeholder="Name" />

                    <Form.Control onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='VC5_AGE' placeholder="Age" />

                    <Form.Select onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='GENDER5'>

                      <option>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>

                    </Form.Select>
                  </Stack>
                  </div>

                  <div>
                  <Stack direction="horizontal" gap={1}>

                    <Form.Control onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='VC6_NAME' placeholder="Name" />

                    <Form.Control onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='VC6_AGE' placeholder="Age" />

                    <Form.Select onChange={(e) => onValueChange(e)}  
                      style={{ width: "150px" }} name='GENDER6'>

                      <option>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>

                    </Form.Select>
                  </Stack>
                  </div> */}

                </Stack>
              </Form>

              <div className="d-flex justify-content-center m-4">
                <Button
                  onClick={() => addvictimdetails()}
                  variant="success"
                  size="sm"
                  type="submit"
                >
                  Submit
                </Button>
              </div>

            </Container>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ShelterBooking;
