import Head from 'next/head'
import { Row, Col } from 'reactstrap';
import Image from 'next/image';
// import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';


import Slider from "../components/Slider.js";
import Introslider from "../components/Introslider.js";


import armaflex from "../photos/armaflex.jpeg";
import verticalpicture from "../photos/IMG_2315.JPG";
import verticalDuct from "../photos/vertical/verticalDuct.JPG";
import pipingHall from "../photos/vertical/pipingHallway.JPG";
// import verticalSmallTank from "../photos/vertical/verticalSmallTank.jpg";
import verticalTank from "../photos/vertical/verticalTanks.JPG";






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
    <div style={{ backgroundColor: "" }}>
      <Head>
        <title>Home | WJ Best Insulation - Edison, NJ</title>
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



      {/* About us INTRO --------------------------------------------------------------------------------------------------------------------- */}

      <Row style={{ backgroundColor: "black", padding: "0", marginTop: "60px", marginBottom: "100px", justifyContent: "center", maxHeight: "500px" }}>



        <Col lg="4" style={{ backgroundColor: "green", display: "", padding: "0", margin: "0", height: "100%" }}>

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



        <Col lg="3" style={{ backgroundColor: "blue", padding: "0", marginLeft: "20px", position: "" }}>

          <Introslider />

        </Col>





      </Row>


      {/* Services ----------------------------------------------------------------------------*/}



      <Row style={{ backgroundColor: "orange", marginTop: "0", padding: "0", justifyContent: "", textAlign: "center", fontSize: "20px" }}>
        <Col>

          <h1 style={{ padding: "40px", margin: "0", backgroundColor: "red" }}>SERVICES WE PROVIDE</h1>

          <div style={{ padding: "0", margin: "0", backgroundColor: "green" }}>Best Insulation can help you find the solution to all your HVAC needs.</div>

        </Col>
      </Row>








      {/* grid */}
      <Row style={{ padding: "40px", margin: "40px", backgroundColor: "blue" }}>
        <Col lg="8" style={{ padding: "0", margin: "auto", backgroundColor: "red" }}>
          <Row style={{ padding: "0", margin: "0" }}>
            <Col>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>Chilled-water Piping</p></div></Row>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>Refrigeration Piping</p></div></Row>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>Plumbing Piping</p></div></Row>
            </Col>
            <Col>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>Boilers</p></div></Row>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>HVAC Duct</p></div></Row>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>Fire-Rated Grease Ducting</p></div></Row>
            </Col>
            <Col>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>Tanks</p></div></Row>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>Pressure Vessels</p></div></Row>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>Process Piping</p></div></Row>
            </Col>
            <Col>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>Breachings</p></div></Row>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>Sound Applications</p></div></Row>
              <Row className={styles.services}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg><p>Maintenance</p></div></Row>
            </Col>
          </Row>
        </Col>
      </Row>







      <Row style={{ backgroundColor: "red", textAlign: "center", fontSize: "20px" }}>
        <div>Have a question about a service we provide? Give us a call! We're happy to answer any questions you may have.</div>
      </Row>
















      {/* new gallery slider ------------------------------------------------------------------------------------------------------------ */}


      <Row style={{ backgroundColor: "black", padding: "0", margin: "0", marginTop: "80px" }}>


        <Col lg="10" style={{ backgroundColor: "orange", padding: "0px", margin: "auto" }}>



          <Row style={{ backgroundColor: "green", margin: "0", textAlign: "center", fontSize: "20px", padding: "20px" }}>
            <h1 style={{ backgroundColor: "red", margin: "0" }}>PROJECTS</h1>
          </Row>







          <Row style={{ backgroundColor: "pink", padding: "20px", margin: "0" }}>





            <Col style={{ textAlign: "center", backgroundColor: "red", margin: "0", padding: "0", position: "relative", height: "" }}>

              <Image src={verticalDuct} alt="alt" height={600} width={400} layout="fixed"></Image>
              {/* <Slider/> */}

            </Col>




            <Col style={{ backgroundColor: "orange" }}>

              <Row className="h-50" style={{ margin: "0", backgroundColor: "blue" }}>

                <Row className="h-25" style={{ margin: "0", padding: "0" }}>
                  <h2 style={{ backgroundColor: "green", padding: "10px", margin: "0" }}>Commerical & Industrial Insulation Specialists</h2>
                </Row>
                <Row style={{ margin: "0", padding: "0", height: "75%" }}>
                  <p style={{ backgroundColor: "pink", padding: "10px", margin: "0" }}>Our friendly professionals are true experts in the field, all of whom are dedicated to providing the highest customer service when completing a job.        We ensure that your mechanical system is insulated in the most efficient manner, and we guarantee satisfaction in each project completion. When you are ready to outfit your mechanical, commercial, or industrial insulation, trust the team at Breeding Insulation in Chattanooga. Call (423) 698-8019 today for your free quote.</p>
                </Row>

              </Row>


              <Row className="h-50" style={{ backgroundColor: "white", margin: "0", padding: "0" }}>



                {/*---- 4 image grid ------*/}

                <Col style={{ backgroundColor: "", padding: "0" }}>
                  <Row style={{ margin: "0", height: "50%" }}>
                    <Col style={{ position: "relative", backgroundColor: "", padding: "0" }}>
                      <div className={styles.imageContainer}><Image className={styles.myImage} src={armaflex} alt="alt" layout="fill"></Image></div>
                    </Col>
                    <Col style={{ position: "relative", backgroundColor: "", padding: "0" }}>
                      <div className={styles.imageContainer}><Image className={styles.myImage} src={verticalpicture} alt="alt" layout="fill"></Image></div>
                    </Col>
                  </Row>
                  <Row style={{ margin: "0", height: "50%" }}>
                    <Col style={{ position: "relative", backgroundColor: "", padding: "0" }}>
                      <div className={styles.imageContainer}><Image className={styles.myImage} src={verticalDuct} alt="alt" layout="fill"></Image></div>
                    </Col>
                    <Col style={{ position: "relative", backgroundColor: "", padding: "0" }}>
                      <div className={styles.imageContainer}><Image className={styles.myImage} src={verticalTank} alt="alt" layout="fill"></Image></div>
                    </Col>
                  </Row>
                </Col>






                <Col style={{ backgroundColor: "purple", margin: "auto", textAlign: "center", padding: "0" }}>
                  <a href="/projects"><button style={{ padding: "20px", margin: "auto" }}>View all Projects</button></a>
                </Col>

              </Row>

            </Col>






          </Row>



        </Col>



      </Row>









      <Row style={{ padding: "0", margin: "30px", backgroundColor: "green", justifyContent: "center", fontWeight: "500" }}>
        We are committed to projects done effectively, efficiently, safely, and on schedule for the most reasonable price.
      </Row>







      <Row style={{ backgroundColor: "pink", justifyContent: "", textAlign: "center", fontSize: "20px", padding: "0" }}>
        <Col>FOLLOW US ON INSTAGRAM @INSTAGRAM.COM/WJBESTINSULATION</Col>
      </Row>



      <Row style={{ padding: "0", marginBottom: "40px" }}>
        <Col style={{ display: "", justifyContent: "", backgroundColor: "black", padding: "15px", margin: "0", textAlign: "center" }}>
          <a style={{ padding: "10px" }} href="https://www.twitter.com"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /></svg></a>
          <a style={{ padding: "10px" }} href="https://www.instagram.com"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /></svg></a>
          <a style={{ padding: "10px" }} href="https://www.indeed.com"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg></a>
          <a style={{ padding: "10px" }} href="https://www.facebook.com"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /></svg></a>
        </Col>
      </Row>

















      {/* -------------------------------------------------------------------------------------------------------------------- */}














      {/* About Us backgroundimg----------------------------------------------------------------------------------------------------------------------- */}
      <Row className={styles.counterBackground}>

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


      </Row>













    </div>
  )
}