import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Header.css";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary header-navbar"
    >
      <>
        <Navbar.Brand href="#">
          <img src={logo} alt="USM Infra Logo" className="header-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <NavDropdown title="About Us" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1" as={Link} to="/about">
                About USM Infra
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2" as={Link} to="/usm-group">
                About USM Group
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3" as={Link} to="/core-team">
                Core Team
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4" as={Link} to="/digital-service">
                Digital Service
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.5" as={Link} to="/awards">
                Achievements
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.6" as={Link} to="/contact-us">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/farm-corner">Farm Corner</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/schedules">Schedules</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}

export default Header;
