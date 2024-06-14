import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HeaderBar2 = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="navbar"
      style={{backgroundColor:"#add8e6",
      padding:"20px"
      }}
    >
      <Navbar.Collapse>
        <Nav className="ms-4">
          <Navbar.Text className="text-white">
            <FontAwesomeIcon icon={faPhone} className="icon me-2" />
            +1 234 567 8901
          </Navbar.Text>
          <Navbar.Text className="text-white ms-4">
            <FontAwesomeIcon icon={faEnvelope} className="icon me-2" />
            feedback@karnatakagov.org
          </Navbar.Text>
        </Nav>
        <Nav className="ms-auto">
          <NavLink href="#">
            <FontAwesomeIcon icon={faInstagram} className="insta" />
          </NavLink>
          <NavLink href="#">
            <FontAwesomeIcon icon={faYoutube} className="youtube" />
          </NavLink>
          <NavLink href="#">
            <FontAwesomeIcon icon={faLinkedin} className="linkdin" />
          </NavLink>
          <NavLink href="#">
            <FontAwesomeIcon icon={faFacebook} className="facebook" />
          </NavLink>
          <NavLink href="#">
            <FontAwesomeIcon icon={faTwitter} className="twitter" />
          </NavLink>
          <NavLink href="#" className="me-4">
            <FontAwesomeIcon icon={faGlobe} /> Language
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


export default HeaderBar2;