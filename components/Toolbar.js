import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';

import styles from "../styles/Toolbar.module.css";





export default class Toolbar extends React.Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }





  render() {
    return (





      <Navbar fixed="top" color="white" light expand="md" style={{ height: "", borderBottom: "1px solid blue", backgroundColor: "" }}>

        <NavbarBrand className={styles.navbrand} href="/">
          <div style={{ paddingTop: "", paddingBottom: "15px", color: "", fontFamily: "'Playfair Display', serif", margin: "0", padding: "0", fontSize: "40px", letterSpacing: "", display: "flex", backgroundColor: "" }}>
            <div style={{ color: "blue", letterSpacing: "-2px" }}>WJ</div>
            <div style={{ color: "black", letterSpacing: "-1px", marginLeft: "8px" }}>Best</div>
            <div style={{ color: "black", letterSpacing: "-1px", marginLeft: "2px" }}>Insulation</div>
          </div>
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar>


          <Nav className={styles.navlinks} navbar>


            <NavItem>
              <NavLink className={styles.navlinky} style={{ paddingTop: "15px", paddingBottom: "15px", paddingLeft: "25px", paddingRight: "25px", backgroundColor: "" }} href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className={styles.navlinky} style={{ paddingTop: "15px", paddingBottom: "15px", paddingLeft: "25px", paddingRight: "25px" }} href="/services">Services</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className={styles.navlinky} style={{ paddingTop: "15px", paddingBottom: "15px", paddingLeft: "25px", paddingRight: "25px" }} href="/projects">Gallery</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className={styles.navlinky} style={{ paddingTop: "15px", paddingBottom: "15px", paddingLeft: "25px", paddingRight: "25px" }} href="/contact">Contact Us</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className={styles.navlinky} style={{ paddingTop: "15px", paddingBottom: "15px", paddingLeft: "25px", paddingRight: "25px" }} href="/quote">Get a Quote</NavLink>
            </NavItem>

            
            {/* <NavItem>
              <NavLink className={styles.navlinky} style={{ paddingTop: "15px", paddingBottom: "15px", paddingLeft: "25px", paddingRight: "25px" }} href="/quote">wjbestinsulation@gmail.com</NavLink>
            </NavItem> */}



            <NavItem className="ms-auto">
              <NavLink className={styles.phoneLink} style={{ paddingTop: "15px", paddingBottom: "15px", paddingLeft: "25px", paddingRight: "25px" }} href="tel:7329101016">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
                <b>(732) 910-1016</b>
              </NavLink>
            </NavItem>



          </Nav>
        </Collapse>




      </Navbar>






    );
  }
}