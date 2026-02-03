import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionHeading from "../../components/Heading/SectionHeading";
import "./AboutUs.css";

const About = () => {
  return (
    <div className="about-page">
      <PageHeader
        bannerImgUrl="https://usminfra.com/assets/img/about/about-us.jpg"
        bannerHeading="About Us"
      />

      <section className="about-section wood-pattern-bg">
        <Container className="px-4">
          <Row>
            <Col md={6}>
              <SectionHeading text1="About USM Infra" />
              <p>
                We own enormous experience in creating admirable projects that
                ensure an elite lifestyle for customers. USM Infra is a trusted
                brand in the ever-growing real estate industry with its modern
                and multi-dimensional venture layout projects across Hyderabad,
                Telangana.
              </p>
              <p>
                With a successful track record of selling open plots for nearly
                15 years, USM Infra got strong brand recognition in the
                industry. Our significant real estate projects with outstanding
                connectivity to metropolitan areas appreciate your valuable
                investment over a while.
              </p>
            </Col>

            <Col
              md={6}
              className="ps-4 mt-5 mt-lg-0 m-md-auto position-relative"
            >
              <img
                src="https://usminfra.com/assets/img/about/abt-img1.png"
                className="promo-img promo-img-1"
                alt=""
              />
              <img
                src="https://usminfra.com/assets/img/about/abt-img2.png"
                className="promo-img promo-img-2"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="visionMission py-3">
        <Container className="position-relative">
          <Row className="justify-content-around">
            <Col md={6} className="mb-4 mb-md-0">
              <SectionHeading text1="Our" text2="Vision" whiteColor={true} />
              <p className="text-white">
                Our vision is to be the leading real estate service provider in
                India. With an uncompromising commitment towards our core values
                – Integrity and Transparency, we continuously strive to maintain
                transparent relationships with our esteemed customers and build
                an enduring bond with them.
              </p>
            </Col>

            <Col md={6}>
              <SectionHeading text1="Our" text2="Mission" whiteColor={true} />
              <p className="text-white">
                Our mission is to offer top-notch real estate projects that
                promise a delightful lifestyle to esteemed customers and enhance
                their satisfaction level in terms of price and project
                amenities.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="coreValues">
        <Container className="position-relative">
          <Row>
            <Col md={12} className="text-center">
              <h2 className="section-header d-inline-block text-white">
                <span>Core</span> Values
              </h2>
            </Col>

            <Col xl={6} lg={6} md={6} className="mb-3 mb-xl-0">
              <Card className="h-100 coreValue-card">
                <Card.Body className="p-4 d-flex">
                  <div className="icon me-4">
                    <img
                      src="https://usminfra.com/assets/img/about/shield.png"
                      alt="Integrity"
                    />
                  </div>
                  <div className="content-wrapper">
                    <h4 className="title">Integrity</h4>
                    <p className="content m-0">
                      We are dedicated, responsive, and honest towards
                      delivering trustworthy services and maintaining
                      long-lasting relationships with our customers. We are
                      committed to our promises and ethics in all our
                      activities.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={6} lg={6} md={6} className="mb-3 mb-xl-0">
              <Card className="h-100 coreValue-card">
                <Card.Body className="p-4 d-flex">
                  <div className="icon me-4">
                    <img
                      src="https://usminfra.com/assets/img/about/transparency.png"
                      alt="Transparency"
                    />
                  </div>
                  <div className="content-wrapper">
                    <h4 className="title">Transparency</h4>
                    <p className="content m-0">
                      Transparency is a core value since our inception. We are
                      transparent in all our activities, maintain proactive
                      communication with our customers, and measure our success
                      in their satisfaction.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="whyUs wood-pattern-bg">
        <Container className="position-relative">
          <Row>
            <Col md={12}>
              <h2 className="section-header">
                <span>Why Choose</span> Us?
              </h2>
            </Col>
          </Row>

          <Row className="mt-3 justify-content-center">
            <Col lg={4} md={6} className="mb-3 mb-lg-0 gx-4">
              <Card className="whyUs-card h-100">
                <Card.Body>
                  <div className="whyUs-thumbnail">
                    <img
                      src="https://usminfra.com/assets/img/about/commitment-to-perfection.png"
                      alt="Commitment To Perfection"
                    />
                  </div>
                  <div className="whyUs-content">
                    <h3>Commitment To Perfection</h3>
                    <p>
                      Our inflexible commitment to creating perfect
                      Vastu-compliant real estate projects helps people find the
                      best destination to invest in and gain profits over time.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-3 mb-lg-0 gx-4">
              <Card className="whyUs-card h-100">
                <Card.Body>
                  <div className="whyUs-thumbnail">
                    <img
                      src="https://usminfra.com/assets/img/about/intelligent-gated-communities.png"
                      alt="Intelligent Gated Communities"
                    />
                  </div>
                  <div className="whyUs-content">
                    <h3>Intelligent Gated Communities</h3>
                    <p>
                      Our strategically created ventures are gated communities
                      that promise grand entry, spectacular facilities, resorts,
                      and an overall luxurious lifestyle.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} className="mb-3 mb-lg-0 gx-4">
              <Card className="whyUs-card h-100">
                <Card.Body>
                  <div className="whyUs-thumbnail">
                    <img
                      src="https://usminfra.com/assets/img/about/intelligent-planning.png"
                      alt="Intelligent Planning"
                    />
                  </div>
                  <div className="whyUs-content">
                    <h3>Intelligent Planning</h3>
                    <p>
                      With over 15 years of experience, we choose premium
                      locations near landmarks such as ORRs, educational
                      institutions, and IT hubs for our venture projects.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
