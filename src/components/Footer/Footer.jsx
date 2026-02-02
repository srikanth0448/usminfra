import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const projects = [
    {
      name: "Go Ranch",
      location: "Aler",
      url: "https://usminfra.com/go-ranch",
    },
    {
      name: "Go Valley",
      location: "Salvapur",
      url: "https://usminfra.com/govalley",
    },
    {
      name: "Rush Greens",
      location: "Khammam & Kothagudem",
      url: "https://usminfra.com/rush-greens",
    },
    {
      name: "Highway Heights",
      location: "Shamirpet",
      url: "https://usminfra.com/shamirpet",
    },
    {
      name: "Serene Meadows",
      location: "Shadnagar",
      url: "https://usminfra.com/shadnagar",
    },
    {
      name: "Grand Oaks",
      location: "Bibinagar Phase 1",
      url: "https://usminfra.com/bibinagar-phase1",
    },
    {
      name: "Silver Brooks",
      location: "Bibinagar Phase 2",
      url: "https://usminfra.com/bibinagar-phase2",
    },
  ];

  const companyLinks = [
    { text: "Home", url: "https://usminfra.com" },
    { text: "About Us", url: "https://usminfra.com/about-us" },
    { text: "NRI Corner", url: "https://usminfra.com/nri-corner" },
    { text: "Gallery", url: "https://usminfra.com/gallery" },
    {
      text: "Terms and Conditions",
      url: "https://usminfra.com/terms_and_conditions",
    },
    { text: "Privacy Policy", url: "https://usminfra.com/privacypolicy" },
  ];

  const brochures = [
    {
      name: "Go Ranch Phase-1",
      viewUrl:
        "https://usminfra.com/assets/pdf/Go-Ranch-Brochure-Phase-1-Layout.pdf",
      downloadUrl:
        "https://usminfra.com/assets/pdf/Go-Ranch-Brochure-Phase-1-Layout.pdf",
    },
    {
      name: "Go Ranch-C2-Layout",
      viewUrl:
        "https://usminfra.com/assets/pdf/Go-Ranch-Brochure-C2-Layout.pdf",
      downloadUrl:
        "https://usminfra.com/assets/pdf/Go-Ranch-Brochure-C2-Layout.pdf",
    },
    {
      name: "Go Ranch-D3-Layout",
      viewUrl:
        "https://usminfra.com/assets/pdf/Go-Ranch-Brochure-D3-Layout.pdf",
      downloadUrl:
        "https://usminfra.com/assets/pdf/Go-Ranch-Brochure-D3-Layout.pdf",
    },
    {
      name: "Go Valley-Phase1-Brochure",
      viewUrl: "https://usminfra.com/assets/pdf/GO-VALLEY-PHASE1-BROCHURE.pdf",
      downloadUrl:
        "https://usminfra.com/assets/pdf/GO-VALLEY-PHASE1-BROCHURE.pdf",
    },
    {
      name: "Go Valley-Phase2-Brochure",
      viewUrl: "https://usminfra.com/assets/pdf/Govally-Phase2-brochure.pdf",
      downloadUrl:
        "https://usminfra.com/assets/pdf/Govally-Phase2-brochure.pdf",
    },
    {
      name: "Rush Greens",
      viewUrl: "https://usminfra.com/assets/pdf/Rush-Greens-Brochure.pdf",
      downloadUrl: "https://usminfra.com/assets/pdf/Rush-Greens-Brochure.pdf",
    },
    {
      name: "Nature Bliss",
      viewUrl: "https://usminfra.com/assets/pdf/Nature-bliss-brochure-web.pdf",
      downloadUrl:
        "https://usminfra.com/assets/pdf/Nature-bliss-brochure-web.pdf",
    },
    {
      name: "Vista Springs",
      viewUrl:
        "https://usminfra.com/assets/pdf/USM-Infra-Vista-Springs-Brochure.pdf",
      downloadUrl:
        "https://usminfra.com/assets/pdf/USM-Infra-Vista-Springs-Brochure.pdf",
    },
  ];

  const socialLinks = [
    {
      url: "https://www.facebook.com/Usm.Infra/",
      img: "https://usminfra.com/assets/img/facebook.png",
    },
    {
      url: "https://in.linkedin.com/in/usm-mycity-750a31216",
      img: "https://usminfra.com/assets/img/linkedin.png",
    },
    {
      url: "https://x.com/USMMycity",
      img: "https://usminfra.com/assets/img/twitterlogo.png",
    },
    {
      url: "https://www.youtube.com/channel/UCnp73i2e1mI7JUCCjXy1_Ag",
      img: "https://usminfra.com/assets/img/youtube.png",
    },
    {
      url: "https://www.instagram.com/usminfra7/",
      img: "https://usminfra.com/assets/img/instagram.png",
    },
  ];

  const keywords = [
    "Plots in Hyderabad",
    "Plots in Near Yadagirigutta",
    "Plots for Sale in Hyderabad",
    "Plots near Shamirpet",
    "Real Estate in Shadnagar",
    "Best Real Estate Company in Hyderabad",
    "Real Estate Companies in Hyderabad",
    "Top Real Estate Companies in Hyderabad",
    "Real Estate Company in Hyderabad",
    "Real Estate Companies Hyderabad",
    "Best Real Estate Projects in Hyderabad",
    "Best Investments in Hyderabad",
    "Best Residential Projects in Hyderabad",
    "Residential Plots in Hyderabad",
    "Real Estate projects in Hyderabad",
    "Residential Projects in Hyderabad",
    "Plots for Sale Near Yadagirigutta",
    "Best Real Estate Company in India",
    "Best Real Estate Company in South India",
    "Best Plots in Shadnagar",
    "Best Plots in Shamirpet",
  ];

  return (
    <footer className="footer-wrapper">
      <Container>
        <Row className="primary-footer">
          <Col lg={3} md={12} className="footer-widget">
            <h4 className="footer-title">USM Infra</h4>
            <p className="text-white footer-content">
              USM Infra is branded in this competitive real estate industry as
              the best real estate company by creating the best ventures with
              the best residential/open plots/lands in Telangana. Value-based
              ethics and state-of-the-art project facilities enable us to become
              the fastest-growing real estate company in Hyderabad, Telangana.
            </p>
          </Col>
          <Col lg={3} md={4} className="footer-widget">
            <h4 className="footer-title">Our Projects</h4>
            <ul className="footer-links nav flex-column">
              {projects.map((project, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link" href={project.url}>
                    <span style={{ fontWeight: 700 }}>{project.name}</span> -{" "}
                    {project.location}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={3} md={4} className="footer-widget">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links nav flex-column">
              {companyLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link" href={link.url}>
                    {link.text}
                  </a>
                </li>
              ))}
              <li className="nav-item dropdown">
                <a className="nav-link" href="javascript:void(0);">
                  Brochures <i className="ri-arrow-drop-down-line"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={4} className="footer-widget">
            <h4 className="footer-title">Reach Us</h4>
            <div className="footer-map">
              <iframe
                width="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d867.4019505364174!2d78.5326123!3d17.4283167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99cf8eb5322f%3A0xa947244a5cc92880!2sUSM%20MyCity%20Branch%20Office!5e1!3m2!1sen!2sin!4v1675081017639!5m2!1sen!2sin"
                frameBorder="0"
                allowFullScreen=""
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 secondary-footer align-items-center">
          <Col md={6} className="footer-copy">
            © Copyright 2021 - USM Infrastructures Pvt. Ltd.
          </Col>
          <Col md={6} className="footer-social">
            <ul className="list-unstyled m-0 d-flex justify-content-end">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a href={social.url} target="_blank">
                    <img src={social.img} width="32" alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <hr />
          <Col md={12} className="footer-keywords text-center">
            {keywords.map((kw, i) => (
              <span key={i}>
                <a href="javascript:void(0);">{kw}</a>
                {i < keywords.length - 1 ? " | " : ""}
              </span>
            ))}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
