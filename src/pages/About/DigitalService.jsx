import { Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";

const DigitalService = () => {
  return (
    <div className="digital-service-page">
      <section className="hero d-flex align-items-center wood-pattern-bg">
        <div id="slide-show">
          <div className="slidex activx">
            <div
              className="bg-img"
              style={{
                backgroundImage:
                  "url('https://usminfra.com/assets/img/digital-service/BG-02.png')",
              }}
            >
              <Container className="slider-center">
                <Row className="h-100 position-relative">
                  {/* Image */}
                  <Col
                    lg={6}
                    md={5}
                    sm={6}
                    xs={12}
                    className="h-100 d-flex align-items-end justify-content-center"
                  >
                    {/* <img
                      src="https://usminfra.com/assets/img/digital-service/digiservicesnew.png"
                      alt="MyCity App"
                      className="img-fluid hero-app-img"
                    /> */}
                  </Col>

                  {/* Content */}
                  <Col
                    lg={6}
                    md={7}
                    sm={6}
                    xs={12}
                    className="slide-text text-start d-flex flex-column justify-content-center"
                  >
                    <h1>
                      A pioneer in offering mobile app services to customers
                    </h1>
                    <p className="space40">
                      One app for managing your booked and registered plots
                    </p>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.usm.mycitycustomer"
                      target="_blank"
                      rel="noreferrer"
                      className="download-btn"
                    >
                      <img
                        src="https://usminfra.com/assets/img/digital-service/android.png"
                        alt="Android App"
                      />
                    </a>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </section>

      <section className="screenshots wood-pattern-bg-dark">
        <Container className="position-relative">
          {/* Header */}
          <Row>
            <Col md={12}>
              <h2 className="section-header">
                <span>Our Proprietary Mobile App</span>
              </h2>

              <blockquote className="blockquote-gradient on-white">
                A Mobile App For Our Customers!
              </blockquote>

              <p className="tagline">
                Our USM Infra customer-centric mobile app gives flexibility to
                our customers to access plot details, payment details,
                registration documents, and progress or recent developments in
                all USM Infra projects.
              </p>
            </Col>
          </Row>

          {/* Footer text */}
          <Row className="mt-4">
            <Col xs={12}>
              <p className="tagline text-center">
                This innovative application also allows customers to check the
                availability of open plots in our current ongoing projects.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default DigitalService;
