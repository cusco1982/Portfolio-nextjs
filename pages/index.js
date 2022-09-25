import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react';

import Slider from "../components/Slider.js"


import armaflex from "../photos/armaflex.jpeg"
import ducticon from "../photos/ducticon.png"
import tank from "../photos/tank.png"
import safetyicon from "../photos/safety.png"
import mask from "../photos/mask.png"
import insulationicon from "../photos/insulation.png"
import waterproof from "../photos/waterproof.png"

import verticalpicture from "../photos/IMG_2315.JPG"
import verticalDuct from "../photos/vertical/verticalDuct.JPG"
import pipingHall from "../photos/vertical/pipingHallway.JPG"
// import verticalSmallTank from "../photos/vertical/verticalSmallTank.jpg"
import verticalTank from "../photos/vertical/verticalTanks.JPG"


import { Container, Row, Col } from 'reactstrap';



export default function Home() {


  // useEffect(() => {
  //   var a = 0;
  //   $(window).scroll(function () {
  //     var oTop = $(`#counter`).offset().top - window.innerHeight;
  //     if (a == 0 && $(window).scrollTop() > oTop) {
  //       let valueDisplays = document.querySelectorAll("#num");
  //       let interval = 3000;
  //       valueDisplays.forEach((valueDisplay) => {
  //         let startValue = 0;
  //         let endValue = parseInt(valueDisplay.getAttribute("data-value"));
  //         let duration = Math.floor(interval / endValue);
  //         let counter = setInterval(function () {
  //           startValue += 1;
  //           valueDisplay.textContent = startValue;
  //           if (startValue == endValue) {
  //             clearInterval(counter);
  //           }
  //         }, duration);
  //       })
  //       a = 1;
  //     }
  //   });
  // });


  return (
    <div>
      <Head>
        <title>Julian Ayllon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      </Head>


      {/* jumbotron ------------*/}
      <Row className={styles.jumboBackground} style={{ height: "60vh", backgroundColor: "black", textAlign: "center" }}>

        <div style={{ margin: "auto", color: "white" }}>

          <h1 style={{ backgroundColor: "", padding: "20px" }}>#1 Mechanical Insulation Service</h1>
          <div style={{ borderTop: "1px solid #4db2ec", width: "10%", padding: "10px", margin: "auto" }}></div>
          <p style={{ backgroundColor: "", padding: "20px" }}>We believe that the satisfaction and safety of our <br /> customers is our #1 Priority.</p>

          <div style={{ position: "absolute", zIndex: "1", left: "0", right: "0", backgroundColor: "red" }} href="/quote">
            <a style={{ textDecoration: "none" }} href="/quote"><button className={styles.quotebutton} style={{ backgroundColor: "", padding: "20px" }}>GET A QUOTE</button></a>
          </div>

        </div>


      </Row>



      {/* About us --------------------------------------------------------------------------------------------------------------------- */}

      <Row style={{ backgroundColor: "black", padding: "0", marginTop: "60px", marginBottom: "80px", justifyContent: "center", maxHeight: "500px" }}>



        <Col lg="4" style={{ backgroundColor: "green", display: "", padding: "0", margin: "0" }}>

          <h2 style={{ padding: "" }}><button style={{ backgroundColor: "orange" }}>About Us</button></h2>
          <h2 style={{ backgroundColor: "red", marginTop: "20px", color: 'blue', marginBottom: "30px" }}>We are the leading experts in <br /> Mechanical Insulation Solutions</h2>
          <p style={{ backgroundColor: "", marginTop: "40px", marginBottom: "20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, numbusdam perspiciatis!quam neque. Tempora dolorum, accusamus iusto voluptatem recusandae suscipit quod aperiam sequi dicta necessitatibus nemo quis, similique earum, unde quibusdam perspiciatis!</p>

          <div style={{ display: 'flex', backgroundColor: "red", padding: "10px", marginTop: "40px", marginBottom: "40px" }}>
            <Col style={{ backgroundColor: "black" }}>
              <h1 style={{ color: "orange" }}>454 m</h1>
              <div style={{ color: "blue" }}>Delivery Packages</div>
            </Col>
            <Col>
              <h1 style={{ color: "orange" }}>127</h1>
              <div style={{ color: "blue" }}>Countries Covered</div>
            </Col>
          </div>

        </Col>



        <Col lg="3" style={{ backgroundColor: "blue", padding: "0", marginLeft: "20px", position: "relative" }}>
          <Image src={verticalpicture} layout="fill" alt="green" />
        </Col>





      </Row>





      <Row style={{ backgroundColor: "", marginTop: "60px", justifyContent: "", textAlign: "center", fontSize: "20px" }}>
        <Col>

          <h1 style={{ paddingBottom: "10px" }}>SERVICES</h1>
          <div>We are committed to projects done effectively, efficiently, safely, and on schedule for the most reasonable price.</div>

        </Col>
      </Row>



      {/* services 6img grid ------------------------------------------------------------------------------ */}
      <div style={{ paddingBottom: "", backgroundColor: "orange" }}>




        <Col lg="8" style={{ height: "", padding: "0", backgroundColor: "", marginLeft: "auto", marginRight: "auto", marginBottom: "40px", marginTop: "20px" }}>

          <Row style={{ backgroundColor: "", margin: "0", height: "" }}>

            <Col style={{ display: "flex", backgroundColor: "red" }}>
              <Col lg="3" style={{ backgroundColor: "white", margin: "", textAlign: "" }}><Image style={{ backgroundColor: "blue" }} src={ducticon} alt="safety" width={100} height={100} /></Col>
              <Col style={{ backgroundColor: "pink", margin: "" }}><h2>HVAC Duct</h2><p style={{ fontSize: "" }}>Asbestos, lead, and mold abatement and remediation services.</p></Col>
            </Col>

            <Col style={{ display: "flex", backgroundColor: "green" }}>
              <Col lg="3" style={{ backgroundColor: "blue", margin: "", textAlign: "" }}><Image src={insulationicon} alt="safety" width={100} height={100} /></Col>
              <Col style={{ backgroundColor: "", margin: "" }}><h2>Indoor Piping</h2><p style={{ fontSize: "" }}>Asbestos, lead, and mold abatement and remediation services.</p></Col>
            </Col>

            <Col style={{ display: "flex", backgroundColor: "red" }}>
              <Col lg="3" style={{ backgroundColor: "blue", margin: "", textAlign: "" }}><Image src={tank} alt="safety" width={80} height={80} /></Col>
              <Col style={{ backgroundColor: "", margin: "" }}><h2>Tanks</h2><p style={{ fontSize: "" }}>Asbestos, lead, and mold abatement and remediation services.</p></Col>
            </Col>

          </Row>


          <Row style={{ backgroundColor: "", width: "", margin: "0", height: "" }}>
            <Col style={{ display: "flex", backgroundColor: "green" }}>
              <Col lg="3" style={{ backgroundColor: "black", margin: "", textAlign: "right" }}><Image src={mask} alt="safety" width={100} height={100} /></Col>
              <Col style={{ backgroundColor: "", margin: "" }}><h2>Abatement</h2><p style={{ fontSize: "" }}>Asbestos, lead, and mold abatement and remediation services.</p></Col>
            </Col>

            <Col style={{ display: "flex", backgroundColor: "red" }}>

              <Col lg="3" style={{ backgroundColor: "blue", margin: "", textAlign: "center" }}><Image src={waterproof} alt="safety" width={70} height={90} /></Col>
              <Col style={{ backgroundColor: "", margin: "auto" }}>

                <h2>Outdoor Piping</h2>

                <ul>
                  <li>stainless steel pipe covering</li>
                  <li>pvc jacket</li>
                  <li>jacketing</li>
                </ul>

              </Col>

            </Col>

            <Col style={{ display: "flex", backgroundColor: "green" }}>
              <Col lg="3" style={{ backgroundColor: "black", margin: "", textAlign: "" }}><Image src={safetyicon} alt="safety" width={100} height={100} /></Col>
              <Col style={{ backgroundColor: "", margin: "" }}><h2>Consulting</h2><p style={{ fontSize: "" }}>Leverage 32 years of experience across project design and compliance.</p></Col>
            </Col>
          </Row>

        </Col>


      </div>






      {/* gallery ------------------------------------------------------------------------------------------------------------ */}


      {/* <Col lg="10" style={{ margin: "auto", marginTop: "30px", marginBottom: "100px", backgroundColor: "green" }}>

        <h3 style={{ textAlign: "center", backgroundColor: "red", padding: "0" }}>COMMERCIAL & INDUSTRIAL INSULATION SPECIALISTS </h3>

        <Row style={{ height: "", padding: "0", backgroundColor: "green", margin: "0" }}>



          <Col style={{ backgroundColor: "blue", padding: "0", margin: "0" }}>
            <Col lg="11" style={{ margin: "auto", padding: "0" }}>
              <Slider />
            </Col>
          </Col>



          <Col lg="5" style={{ backgroundColor: "orange", padding: "0px" }}>
            <div>
              <h3 style={{ textAlign: "center", backgroundColor: "red" }}>Commerical & Industrial Insulation Specialists</h3>
              <p>For over 30 years, commercial and industrial businesses from Chattanooga and beyond have trusted Breeding Insulation Company for the highest quality insulation sales and services. Our removable insulation protects your pipes against weathering while still occasionally accessing valves or joints.</p>
              <p>Breeding Insulation delivers its products and service in a trustworthy manner. This has always been our focus. Our friendly professionals are true experts in the field, all of whom are dedicated to providing the highest customer service when completing a job.</p>
              <p style={{ marginTop: "60px" }}>We ensure that your mechanical system is insulated in the most efficient manner, and we guarantee satisfaction in each project completion. When you are ready to outfit your mechanical, commercial, or industrial insulation, trust the team at Breeding Insulation in Chattanooga. Call (423) 698-8019 today for your free quote.</p>
              <button>Call (732) 423-9671</button>
            </div>
          </Col>



        </Row>



      </Col> */}



      {/* new gallery ------------------------------------------------------------------------------------------------------------ */}

      <Row style={{ backgroundColor: "red", padding: "0", margin: "0" }}>
        <Col lg="8" style={{ backgroundColor: "blue", padding: "0", marginTop: "80px", marginBottom: "80px", marginLeft: "auto", marginRight: "auto" }}>

          <Slider />

        </Col>
      </Row>


      <Row style={{ padding: "0", margin: "0" }}>
        <Col lg="10" style={{ padding: "0", margin: "auto", backgroundColor: "green", textAlign: "center" }}>
          We are committed to projects done effectively, efficiently, safely, and on schedule for the most reasonable price.
         </Col>
      </Row>



      <Row style={{ padding: "20px", margin: "0" }}>

        <Col lg="8" style={{ padding: "0", margin: "auto", backgroundColor: "blue" }}>


          <Row style={{ padding: "0", margin: "0" }}>
            <Col style={{ backgroundColor: "green" }}>

              <Row className={styles.services}>
                <div style={{ display: "flex", backgroundColor: "red", padding:"0", margin:"0" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                  &nbsp;
                  <p style={{}}>Chilled-water Piping</p>
                </div>

              </Row>

              <Row className={styles.services}>Refrigeration Piping</Row>
              <Row className={styles.services}>Plumbing Piping</Row>
            </Col>


            <Col>
              <Row className={styles.services}>Boilers</Row>
              <Row className={styles.services}>HVAC Duct</Row>
              <Row className={styles.services}>Fire-Rated Grease Ducting</Row>
            </Col>
            <Col>
              <Row className={styles.services}>Tanks</Row>
              <Row className={styles.services}>Pressure Vessels</Row>
              <Row className={styles.services}>Process Piping</Row>
            </Col>
            <Col>
              <Row className={styles.services}>Breachings</Row>
              <Row className={styles.services}>Sound Applications</Row>
              <Row className={styles.services}>Maintenance</Row>
            </Col>
          </Row>


        </Col>

      </Row>


      <Row style={{ backgroundColor: "blue", margin: "80px", justifyContent: "", textAlign: "center", fontSize: "20px", padding: "0" }}>
        <Col>FOLLOW US ON INSTAGRAM @INSTAGRAM.COM/WJBESTINSULATION</Col>
      </Row>








      {/* -------------------------------------------------------------------------------------------------------------------- */}














      {/* About Us backgroundimg----------------------------------------------------------------------------------------------------------------------- */}
      {/* <Row className={styles.counterBackground}>

        <Col lg="10" style={{ margin: "auto", padding: "0" }}>


          <Row style={{ color: "white", textAlign: "center", backgroundColor: "", paddingTop: "50px", margin: "0" }}>
            <header style={{ fontSize: "30px", fontWeight: "400", letterSpacing: "4px", padding: "20px" }}>ABOUT US</header>
            <h2 style={{ lineHeight: "1.2", fontWeight: "600", fontSize: "40px", paddingBottom: "20px" }}>Providing all kinds <br /> of construction services</h2>
            <p style={{ fontSize: "25px", lineHeight: "2.2", fontWeight: "200", padding: "30px", backgroundColor: "" }}>Our construction company has been founded 10 years ago, at the very peak of the building frenzy in the US…<br /> Since then we’ve built hundreds of commercial, government and private buildings and facilities. It may not sound like a lot, but if you estimate the,<br /> working hours, materials, planning and correlating that were all involved in completing each separate project, then our productivity is immense!</p>
          </Row>



          <Row style={{ backgroundColor: "", margin: "0", padding: "0" }}>



            <Row id="counter" style={{ padding: "0", margin: "0" }}>


              <Col style={{ backgroundColor: "", padding: "0", margin: "0" }}>
                <Row id="num" data-value="26" style={{ backgroundColor: "", justifyContent: "center", fontSize: "70px", margin: "0", color: "blue", fontWeight: "800", lineHeight: "1.3" }}>0</Row>
                <Row style={{ backgroundColor: "", justifyContent: "center", fontSize: "32px", color: "white", fontWeight: "800", lineHeight: "2" }}>Years on the Market</Row>
              </Col>

              <Col style={{ backgroundColor: "", padding: "0", margin: "0" }}>
                <Row id="num" data-value="4" style={{ backgroundColor: "", justifyContent: "center", fontSize: "70px", margin: "0", color: "blue", fontWeight: "800", lineHeight: "1.3" }}>0</Row>
                <Row style={{ backgroundColor: "", justifyContent: "center", fontSize: "32px", margin: "0", color: "white", fontWeight: "800", lineHeight: "2" }}>Operational Brigades</Row>
              </Col>

              <Col style={{ backgroundColor: "", padding: "0", margin: "0" }}>
                <Row id="num" data-value="378" style={{ backgroundColor: "", justifyContent: "center", fontSize: "70px", margin: "0", color: "blue", fontWeight: "800", lineHeight: "1.3" }}>0</Row>
                <Row style={{ backgroundColor: "", justifyContent: "center", fontSize: "32px", color: "white", fontWeight: "800", lineHeight: "2" }}>Units Engineering</Row>
              </Col>

              <Col style={{ backgroundColor: "", padding: "0", margin: "0" }}>
                <Row id="num" data-value="400" style={{ backgroundColor: "", justifyContent: "center", fontSize: "70px", margin: "0", color: "blue", fontWeight: "800", lineHeight: "1.3" }}>0</Row>
                <Row style={{ backgroundColor: "", justifyContent: "center", fontSize: "32px", color: "white", fontWeight: "800", lineHeight: "2" }}>Employees of the company</Row>
              </Col>


            </Row>




            <Row style={{ backgroundColor: "", padding: "0", margin: "0", justifyContent: "center", padding: "100px" }}>
              <button style={{ width: "280px", height: "80px", backgroundColor: "blue", color: "white", fontSize: "25px", fontWeight: "500" }}>MORE INFO</button>
            </Row>



          </Row>



        </Col>


      </Row> */}













    </div>
  )
}