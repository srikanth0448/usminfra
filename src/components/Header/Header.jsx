import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarToggleRef = useRef(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setOpenDropdown(null);
    // Close mobile navbar
    if (navbarToggleRef.current) {
      navbarToggleRef.current.click();
    }
  };

  // Prevent background scroll when navbar is open
  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNavbarOpen]);

  const handleNavbarToggle = (expanded) => {
    setIsNavbarOpen(expanded);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="header wood-pattern-bg"
      onToggle={handleNavbarToggle}
    >
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

        <Navbar.Toggle aria-controls="main-navbar" ref={navbarToggleRef} />

        <Navbar.Collapse id="main-navbar">
          <button
            className="navbar-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Nav className="ms-auto main-nav">
            {/* HOME */}
            <Nav.Link as={NavLink} to="/" end onClick={closeMenu}>
              Home
            </Nav.Link>

            {/* ABOUT */}
            <div
              className={`nav-item dropdown ${openDropdown === "about" ? "open" : ""}`}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("about")}
              >
                About Us <i className="ri-arrow-drop-down-line"></i>
              </span>

              <div className="mega-menu">
                <ul>
                  <li>
                    <Link to="/about-us" onClick={closeMenu}>
                      About USM Infra
                    </Link>
                  </li>
                  <li>
                    <Link to="/usm-group" onClick={closeMenu}>
                      About USM Group
                    </Link>
                  </li>
                  <li>
                    <Link to="/core-team" onClick={closeMenu}>
                      Core Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-service" onClick={closeMenu}>
                      Digital Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/awards" onClick={closeMenu}>
                      Achievements
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" onClick={closeMenu}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* PROJECTS */}
            <div
              className={`nav-item dropdown ${openDropdown === "projects" ? "open" : ""}`}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("projects")}
              >
                Projects <i className="ri-arrow-drop-down-line"></i>
              </span>

              <div className="mega-menu projects-menu">
                <div className="mega-col">
                  <h4>Ongoing</h4>

                  <Link to="/go-ranch" onClick={closeMenu}>
                    <strong>Go Ranch</strong>
                    <span>Near Aler</span>
                    <span>450+ Acres</span>
                  </Link>

                  <Link to="/govalley" onClick={closeMenu}>
                    <strong>Go Valley</strong>
                    <span>Near Salvapur</span>
                    <span>120+ Acres</span>
                  </Link>

                  <Link to="/rush-greens" onClick={closeMenu}>
                    <strong>Rush Greens</strong>
                    <span>Near Khammam</span>
                    <span>150+ Acres</span>
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Upcoming</h4>

                  <Link to="/eco-woods" onClick={closeMenu}>
                    <strong>Eco Woods</strong>
                    <span>Near Pochannapet</span>
                    <span>182+ Acres</span>
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Completed</h4>
                  <Link to="/bibinagar-phase1" onClick={closeMenu}>
                    <strong>Grand Oaks</strong>
                    <span>Near Bibinagar Phase 1</span>
                  </Link>
                  <Link to="/bibinagar-phase2" onClick={closeMenu}>
                    <strong>Silver Brooks</strong>
                    <span>Near Bibinagar Phase 2</span>
                  </Link>
                  <Link to="/shadnagar" onClick={closeMenu}>
                    <strong>Serene Meadows</strong>
                    <span>Near Shadnagar</span>
                  </Link>
                  <Link to="/shamirpet" onClick={closeMenu}>
                    <strong>Highway Heights</strong>
                    <span>Near Shamirpet</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* NRI */}
            <Nav.Link as={NavLink} to="/nri-corner" onClick={closeMenu}>
              NRI Corner
            </Nav.Link>

            {/* GALLERY */}
            <div
              className={`nav-item dropdown ${openDropdown === "gallery" ? "open" : ""}`}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("gallery")}
              >
                Gallery <i className="ri-arrow-drop-down-line"></i>
              </span>

              <div className="mega-menu">
                <ul>
                  <li>
                    <Link to="/gallery" onClick={closeMenu}>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/customers" onClick={closeMenu}>
                      Customers
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" onClick={closeMenu}>
                      Events
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* SANDALWOOD */}
            <div
              className={`nav-item dropdown ${openDropdown === "sandalwood" ? "open" : ""}`}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("sandalwood")}
              >
                Sandalwood <i className="ri-arrow-drop-down-line"></i>
              </span>

              <div className="mega-menu">
                <ul>
                  <li>
                    <Link to="/History" onClick={closeMenu}>
                      History
                    </Link>
                  </li>
                  <li>
                    <Link to="/lifecycle" onClick={closeMenu}>
                      Life Cycle
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* BLOG */}
            <Nav.Link as={NavLink} to="/blog" onClick={closeMenu}>
              Blog
            </Nav.Link>

            {/* RESORT */}
            <Nav.Link as={NavLink} to="/membership" onClick={closeMenu}>
              Resort
            </Nav.Link>

            {/* LOGIN */}
            <div
              className={`nav-item dropdown ${openDropdown === "login" ? "open" : ""}`}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("login")}
              >
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
