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
      <div>
        <Navbar fixed="top" color="light" light expand="md" style={{ height: "", borderBottom: "1px solid blue" }}>

          <NavbarBrand className={styles.navbrand} href="/">
            <div style={{ paddingTop: "", paddingBottom: "15px", color: "", fontFamily: "'Playfair Display', serif", margin: "0", padding: "0", fontSize: "40px", letterSpacing: "", display: "flex", backgroundColor: "" }}>
              <div style={{ color: "blue", letterSpacing: "-2px" }}>WJ</div>
              <div style={{ color: "black", letterSpacing: "-1px", marginLeft: "8px" }}>Best</div>
              <div style={{ color: "black", letterSpacing: "-1px", marginLeft: "2px" }}>Insulation</div>
            </div>
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar style={{backgroundColor:"blue"}}>


            <Nav className={styles.navlinks} navbar style={{marginTop:"20px", marginBottom:"20px"}}>


              <NavItem>
                <NavLink className={styles.navlinky} style={{paddingTop:"15px", paddingBottom:"15px", paddingLeft:"25px", paddingRight:"25px", backgroundColor:""}} href="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className={styles.navlinky} style={{paddingTop:"15px", paddingBottom:"15px", paddingLeft:"25px", paddingRight:"25px"}} href="/services/">Services</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className={styles.navlinky} style={{paddingTop:"15px", paddingBottom:"15px", paddingLeft:"25px", paddingRight:"25px"}} href="/projects">Gallery</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className={styles.navlinky} style={{paddingTop:"15px", paddingBottom:"15px", paddingLeft:"25px", paddingRight:"25px"}} href="/contact">Contact Us</NavLink>
              </NavItem>

              <NavItem style={{ backgroundColor: "" }}>
                <NavLink className={styles.navlinky} style={{paddingTop:"15px", paddingBottom:"15px", paddingLeft:"25px", paddingRight:"25px"}} href="/quote">Get a Quote</NavLink>
              </NavItem>


            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }
}