
import React from 'react';
import "./Contact.css";
import { Container, Row, Col} from "reactstrap";
import Form from "../Form/Form";

function Contact() {
  return <section id='contact'>

    <Container>
        <Row>
            <Col lg="12" className='mb-5'>
                <h2 style={{marginTop:"10%"}}>Get in Touch</h2>
            
            </Col>
            <Col lg="6" md="6">
             <div className="contact-info-container d-flex align-items-center gap-5">
                <div className="single-info-box">
                    <h6>Address</h6>
                    <p>Mizoram, India</p>
                </div>
              
                <div className="single-info-box">
                    <h6>Phone</h6>
                    <p>+91 7005763599</p>
                </div>
             </div>

             <div className="contact-info-container">
                <div className="single-info-box">
                    <h6>Email</h6>
                    <p>mail4sandeep44@gmail.com</p>
                </div>
             
                <div className="single-info-box">
                    <h6>Location </h6>
                    <p>Lunglei, Mizoram, India</p>
                </div>
             </div>
            
            </Col>


            <Col lg="6" md="6">
              <Form />
            
            </Col>
        </Row>
    </Container>

   


  </section>
}

export default Contact