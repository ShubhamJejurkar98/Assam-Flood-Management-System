import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Stack } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { getvictim } from "../../api/victimdetailsbedbooking";



function ShelterBookingReceipt() {

  const [victimdetails, setVictimdetails] = useState([]);


  useEffect(() => {
    getvictimdetails();
  }, [])

  
  const getvictimdetails = async () => {

    let response = await getvictim();
    setVictimdetails(response.data);
    
  }



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
        <div className="pt-5 pb-5">
          <Card style={styles.cardstyle} >
            <Alert variant="secondary">
              <div className="d-flex justify-content-end mb-4">
                VICTIM ID : 1212
              </div>
              <Alert.Heading className="d-flex justify-content-center">
                BED BOOKING CONFIRMATION
              </Alert.Heading>
            </Alert>

            <Form className="mt-1 p-3">
              <b>Dear Shubham Jejurkar (4545456)</b>
              <p>
                Thank You, for using our online portal. Your Booking details are
                indicated below.
              </p>
              <br></br>
              <Stack direction="horizontal" gap={5}>
                <div>
                  <b>Booking ID :</b> 4545456{" "}
                </div>
                <div>
                  <b> Booking Date :</b> 22/06/2022
                </div>
              </Stack>
              <div>
                <b>Shelter Camp Name :</b> Camp1
              </div>
              <div>
                <b>Shelter Camp Address :</b> NIT Road, Fakiratilla, Silchar, Assam 788010
              </div>
              <br />
              <div>
                <b> Member Details:</b>
              </div>

              <Table bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    
                  </tr>
                </thead>
                <tbody>
                
                    {
                    victimdetails.map((victims)=>(
                      <><tr key={victims.VC1_NAME}>
                        <td>{victims.id}</td>
                        <td>{victims.VC1_NAME}</td>
                        <td>{victims.VC1_AGE}</td>
                        <td>{victims.GENDER1}</td>
                      </tr>
                      
                      <tr key={victims.VC2_NAME}>
                          <td>{victims.id}</td>
                          <td>{victims.VC2_NAME}</td>
                          <td>{victims.VC2_AGE}</td>
                          <td>{victims.GENDER2}</td>
                        </tr></>

                    ) ) } 
                    
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

export default ShelterBookingReceipt;
