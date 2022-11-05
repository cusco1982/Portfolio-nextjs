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




  // var navHeight = document.getElementById('navcontainer').offsetHeight;
  // console.log(navHeight);




  return (
    <div className={styles.navComponent}>
      <Head>
        <title>Nav</title>
      </Head>





      <Row id="navcontainer" className={styles.navContainer}>

        <div style={{ display: 'flex' }}>








          <Col className={styles.navbrand}>

            <div>

              <a href="/">
                <div style={{ color: "blue", letterSpacing: "-2px" }}>WJ</div>
                <div style={{ color: "black", letterSpacing: "-1px", marginLeft: "8px" }}>Best</div>
                <div style={{ color: "black", letterSpacing: "-1px", marginLeft: "2px" }}>Insulation</div>
              </a>

            </div>

          </Col>







          <Col className={styles.navlinks}>

            <div>

              <Col><a href="/">Home</a></Col>
              <Col><a href="/services">Services</a></Col>
              <Col><a href="/projects">Gallery</a></Col>
              <Col><a href="/contact">Contact Us</a></Col>
              <Col><a href="/quote">Get a Quote</a></Col>

            </div>

          </Col>











          <Col className={styles.phoneLink} >

            <div>

              <a href="tel:7329101016">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
                <b>(732) 910-1016</b>

              </a>

            </div>

          </Col>









          <Col className="d-lg-none d-md-none" style={{ backgroundColor: "red" }}>


            <Button variant="primary" onClick={handleShow}>
              <div></div>
              <div></div>
              <div></div>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>

              <Offcanvas.Header closeButton>
                <Offcanvas.Title>WJ Best Insulation</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Services</a></li>
                  <li><a href="/">Gallery</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </Offcanvas.Body>

            </Offcanvas>



          </Col>





        </div>









      </Row>


    </div>
  )
};




export default Toolbar;