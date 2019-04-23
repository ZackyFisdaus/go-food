import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "blue" }} color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            Go-Food
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
