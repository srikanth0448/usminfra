import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" fixed="top" className="header wood-pattern-bg">
      <Container
        fluid
        className="p-0 d-flex align-items-center justify-content-between"
      >
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" className="logo">
          <img
            src="https://usminfra.com/assets/img/usm-infra-sandalwood-farm-plots-logo.svg"
            alt="USM Infra"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto main-nav">
            {/* HOME */}
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            {/* ABOUT */}
            <div className="nav-item dropdown">
              <span className="nav-link dropdown-toggle">
                About Us <i className="ri-arrow-drop-down-line"></i>
              </span>

              <div className="mega-menu">
                <ul>
                  <li>
                    <Link to="/about-us">About USM Infra</Link>
                  </li>
                  <li>
                    <Link to="/usm-group">About USM Group</Link>
                  </li>
                  <li>
                    <Link to="/core-team">Core Team</Link>
                  </li>
                  <li>
                    <Link to="/digital-service">Digital Service</Link>
                  </li>
                  <li>
                    <Link to="/awards">Achievements</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="nav-item dropdown">
              <span className="nav-link dropdown-toggle">
                Projects <i className="ri-arrow-drop-down-line"></i>
              </span>

              <div className="mega-menu projects-menu">
                <div className="mega-col">
                  <h4>Ongoing</h4>

                  <Link to="/go-ranch">
                    <strong>Go Ranch</strong>
                    <span>Near Aler</span>
                    <span>450+ Acres</span>
                  </Link>

                  <Link to="/govalley">
                    <strong>Go Valley</strong>
                    <span>Near Salvapur</span>
                    <span>120+ Acres</span>
                  </Link>

                  <Link to="/rush-greens">
                    <strong>Rush Greens</strong>
                    <span>Near Khammam</span>
                    <span>150+ Acres</span>
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Upcoming</h4>

                  <Link to="/eco-woods">
                    <strong>Eco Woods</strong>
                    <span>Near Pochannapet</span>
                    <span>182+ Acres</span>
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Completed</h4>
                  <Link to="/bibinagar-phase1">Grand Oaks</Link>
                  <Link to="/bibinagar-phase2">Silver Brooks</Link>
                  <Link to="/shadnagar">Serene Meadows</Link>
                  <Link to="/shamirpet">Highway Heights</Link>
                </div>
              </div>
            </div>

            {/* NRI */}
            <Nav.Link as={NavLink} to="/nri-corner">
              NRI Corner
            </Nav.Link>

            {/* GALLERY */}
            <div className="nav-item dropdown">
              <span className="nav-link dropdown-toggle">
                Gallery <i className="ri-arrow-drop-down-line"></i>
              </span>

              <div className="mega-menu">
                <ul>
                  <li>
                    <Link to="/gallery">Projects</Link>
                  </li>
                  <li>
                    <Link to="/happy-customers">Customers</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* SANDALWOOD */}
            <div className="nav-item dropdown">
              <span className="nav-link dropdown-toggle">
                Sandalwood <i className="ri-arrow-drop-down-line"></i>
              </span>

              <div className="mega-menu">
                <ul>
                  <li>
                    <Link to="/History">History</Link>
                  </li>
                  <li>
                    <Link to="/lifecycle">Life Cycle</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* BLOG */}
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>

            {/* RESORT */}
            <Nav.Link as={NavLink} to="/membership">
              Resort
            </Nav.Link>

            {/* LOGIN */}
            <div className="nav-item dropdown">
              <span className="nav-link dropdown-toggle">
                Login <i className="ri-arrow-drop-down-line"></i>
              </span>

              <div className="mega-menu login-menu">
                <ul>
                  <li>
                    <a
                      href="https://customer.usmmycity.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Customer
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://channel-partner.usmmycity.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Channel Partner
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
