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
        <Navbar fixed="top" color="light" light expand="md" style={{ height: "10vh" }}>
          <NavbarBrand href="/">
            <div style={{ paddingTop: "", paddingBottom: "15px", color: "", fontFamily: "'Playfair Display', serif", margin: "0", padding:"0", fontSize: "40px", letterSpacing: "", display: "flex", backgroundColor: "" }}>
              <div style={{ color: "blue", letterSpacing: "-2px" }}>WJ</div>
              <div style={{ color: "black", letterSpacing: "-1px", marginLeft: "8px" }}>Best</div>
              <div style={{ color: "black", letterSpacing: "-1px", marginLeft: "2px" }}>Insulation</div>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>


            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/services/">Services</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/gallery/">Gallery</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contact/">Contact Us</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/quote/">Get a Quote</NavLink>
              </NavItem>

              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}


              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}


            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}