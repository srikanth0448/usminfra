import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionHeading from "../../components/Heading/SectionHeading";
import "./AboutUs.css";

const Awards = () => {
  return (
    <div className="awards-page">
      <section className="">
        <Container className="px-4">
          <Row>
            <Col md={12} className="mt-4">
              <SectionHeading text1="USM" text2="Achievements" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="wood-pattern-bg">
        <Container className="">
          <Card className="award-card">
            <Card.Body>
              <Row className="m-0">
                {/* Carousel Section */}
                <Col md={4} className="p-0">
                  <Carousel interval={2000} controls indicators={false}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://usminfra.com/public/uploads/images/ef16b8e1c014334a06cc72308292fe89.jpg"
                        alt="USM Infra Award 1"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://usminfra.com/public/uploads/images/c0fca3a2bcfb5075b1e55c86bdae40dc.jpg"
                        alt="USM Infra Award 2"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>

                {/* Content Section */}
                <Col md={8} className="award-list-content">
                  <h4>
                    USM Infra’s Go Valley and Go Ranch Resort Win Prestigious
                    SWIFT-N-LIFT Media Awards for 2024
                  </h4>

                  <p>
                    We are delighted to announce that USM Infra&apos;s Go Valley
                    has been awarded the{" "}
                    <strong>
                      &apos;Best Sandalwood Plantation Project of the Year
                      2024&apos;
                    </strong>{" "}
                    by SWIFT-N-LIFT Media. This prestigious recognition is a
                    testament to our unwavering commitment to excellence and
                    sustainable development. We extend our heartfelt gratitude
                    to our incredible team and esteemed customers for their
                    continued support.
                  </p>

                  <p>
                    We are equally proud to share that Go Ranch Resort has been
                    honoured as the{" "}
                    <strong>
                      &apos;Best Eco-Friendly Family Resort of the Year 2024 in
                      Telangana&apos;
                    </strong>{" "}
                    by SWIFT-N-LIFT Media. This award celebrates our dedication
                    to providing sustainable, family-friendly accommodations
                    amidst the serene beauty of our sandalwood farm.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="award-card">
            <Card.Body>
              <Row className="m-0">
                {/* Carousel Section */}
                <Col md={4} className="p-0">
                  <Carousel interval={2000} controls indicators={false}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://usminfra.com/public/uploads/images/513387deef7317865f73056c09d89d7e.jpg"
                        alt="USM Infra Award 1"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://usminfra.com/public/uploads/images/f190ef774353e2d838487559281ce430.jpg"
                        alt="USM Infra Award 2"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://usminfra.com/public/uploads/images/afdfa8debb72d12e6843ffbb8516377b.jpg"
                        alt="USM Infra Award 3"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>

                {/* Content Section */}
                <Col md={8} className="award-list-content">
                  <h4>
                    USM Infra is honored to receive the 'Best Farm Plots of the
                    Year' Award at Hybiz TV Realty Awards 2024!
                  </h4>

                  <p>
                    We are excited to share that USM Infrastructures Pvt Ltd
                    (USM Infra) has been recognized with the prestigious 'BEST
                    FARM PLOTS in ORGANISATION category Award' by Hybiz Realty
                    Awards 2024. This accolade is a testament to our unwavering
                    dedication and commitment to excellence. Hybiz.TV Realty
                    Awards 2024, renowned for its unbiased and transparent
                    selection process, has set a benchmark in the real estate
                    sector. The award ceremony, held on January 25th at HICC
                    Novotel in Hyderabad, acknowledged industry leaders, best
                    organizations, and emerging entities. This achievement
                    inspires us to continue creating customer-friendly
                    sandalwood projects across Telangana. We extend our
                    gratitude for this recognition.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="award-card">
            <Card.Body>
              <Row className="m-0">
                {/* Carousel Section */}
                <Col md={4} className="p-0">
                  <Carousel interval={2000} controls indicators={false}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://usminfra.com/public/uploads/images/8a1219179845157b6edd385b84eed20b.jpg"
                        alt="USM Infra Award 1"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://usminfra.com/public/uploads/images/6f538ebea9f5a201970d2dbe55bcd4ab.jpg"
                        alt="USM Infra Award 2"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>

                {/* Content Section */}
                <Col md={8} className="award-list-content">
                  <h4>
                    "Best Emerging Plotted Developer" Business Award from Times
                  </h4>

                  <p>
                    With uncompromising dedication, commitment, and proven
                    strategy in the design and development of gated communities,
                    Go Ranch, a unit of USM Infrastructures Pvt. Ltd., has
                    received the “Best Emerging Plotted Developer Hyderabad in
                    2021” business award from India’s biggest news and digital
                    media channel- The Times Of India. With over 20+ years of
                    long experience in designing venture projects, USM Infra
                    outlooks for perfection. The company’s inflexible commitment
                    to creating perfect real estate projects that ensure great
                    connectivity, grand entries, remarkable facilities,
                    luxurious resort offer, and many more help people find the
                    best destination to invest in and get profits over time.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </div>
  );
};

export default Awards;
