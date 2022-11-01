import Head from 'next/head'
// import React from 'react';
import { Row, Col } from 'reactstrap';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import styles from "../styles/Toolbar.module.css";




// import { useRouter } from 'next/router';
// const router = useRouter();
// <a href="/"><div className={router.pathname == "/" ? styles.active : ""}>Home</div></a>








const Toolbar = () => {



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <div>
      <Head>
        <title>Nav</title>
      </Head>




      <Row>





        <Col>

          <a href="/" className={styles.navbrand}>
            <div style={{ paddingTop: "", paddingBottom: "15px", color: "", fontFamily: "'Playfair Display', serif", margin: "0", padding: "0", fontSize: "40px", letterSpacing: "", display: "flex", backgroundColor: "" }}>
              <div style={{ color: "blue", letterSpacing: "-2px" }}>WJ</div>
              <div style={{ color: "black", letterSpacing: "-1px", marginLeft: "8px" }}>Best</div>
              <div style={{ color: "black", letterSpacing: "-1px", marginLeft: "2px" }}>Insulation</div>
            </div>
          </a>

        </Col>






        <Col className={styles.navlinks}>


          <a className={styles.navlinky} href="/">Home</a>

          <a className={styles.navlinky} href="/services">Services</a>

          <a className={styles.navlinky} href="/projects">Gallery</a>

          <a className={styles.navlinky} href="/contact">Contact Us</a>

          <a className={styles.navlinky} href="/quote">Get a Quote</a>


        </Col>








        <Col>

          <a className={styles.phoneLink} href="tel:7329101016">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
            <b>(732) 910-1016</b>

          </a>

        </Col>





        <Col style={{ backgroundColor: "red" }}>


          <Button variant="primary" className="d-lg-none d-md-none" onClick={handleShow}>
            Launch
          </Button>

          <Offcanvas show={show} onHide={handleClose}>

            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>

          </Offcanvas>




        </Col>







      </Row>


    </div>
  )
};




export default Toolbar;