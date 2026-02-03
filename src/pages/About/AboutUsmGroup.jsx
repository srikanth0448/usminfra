import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionHeading from "../../components/Heading/SectionHeading";
import "./AboutUs.css";

const AboutUsmGroup = () => {
  return (
    <div className="about-page">
      <PageHeader bannerImgUrl="https://usminfra.com/assets/img/usm-group/usm-group.jpg" />

      <section className="wood-pattern-bg">
        <Container className="px-4">
          <Row>
            <Col md={12}>
              <SectionHeading text1="About USM" text2="Group" />
              <p>
                USM Group is a consortium of dynamic companies engaged in
                diversified operations. Information Technology, Recruiting and
                Staffing, Real Estate & Infrastructure Development,
                Advertisement & Media, and Logistics are key business areas of
                the group. The major group companies of USM include:
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="whyUs wood-pattern-bg">
        <Container className="position-relative">
          <Row className="mt-3 justify-content-center">
            <Col lg={6} md={6} className="mb-3 mb-lg-0 gx-4">
              <Card className="whyUs-card h-100">
                <Card.Body>
                  <div className="whyUs-thumbnail">
                    <img
                      src="https://usminfra.com/assets/img/about/usm-infra-logo.png"
                      alt=""
                    />
                  </div>
                  <div className="whyUs-content">
                    <h3>USM Infra</h3>
                    <p>
                      USM Infrastructures Pvt. Ltd. (USM Infra) is one of
                      India’s fastest-growing infrastructure companies, leading
                      the way in the real estate and infrastructure market in
                      Telangana. With a strong understanding of the
                      opportunities in this sector, USM Infra is delivering
                      top-quality projects.
                    </p>
                    <p>
                      We have already developed 1000 acres of DTCP and
                      HMDA-approved layouts, including open plots, residential
                      plots, and villa plots, in key locations like Bibinagar,
                      Shadnagar, and Shamirpet. Our ongoing Sandalwood DTCP
                      projects include Aler's "Go Ranch" and Salvapur's "Go
                      Valley." Our goal is to reach 2000 acres with the best
                      infrastructure, including wide roads, water facilities,
                      fencing, and more.
                    </p>
                    <p>
                      Our focus is on offering Sandalwood DTCP-approved plots in
                      prime locations across Telangana, providing unique and
                      valuable investment opportunities. Additionally, we offer
                      50% of the sandalwood profits to our customers after 15
                      years, ensuring long-term returns.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} md={6} className="mb-3 mb-lg-0 gx-4">
              <Card className="whyUs-card h-100">
                <Card.Body>
                  <div className="whyUs-thumbnail">
                    <img
                      src="https://usminfra.com/assets/img/about/usmgroupslogo.svg"
                      alt=""
                    />
                  </div>
                  <div className="whyUs-content">
                    <h3>USM Business Systems</h3>
                    <p>
                      USM Business Systems Inc. is an integrated service
                      provider headquartered in Chantilly, VA, USA. It is
                      specialized in providing software, web and mobile
                      application development, Staffing and Recruiting, and
                      Enterprise IT solutions and services.
                    </p>
                    <p>
                      We combine our expertise and the best industry practices
                      in delivering top-notch IT solutions and fuel our client's
                      business growth. We also identify emerging technology
                      trends, develop powerful results-driven solutions, and
                      help our clients to remain in a leading position in the
                      industry.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} md={6} className="mb-3 mt-3 mb-lg-0 gx-4">
              <Card className="whyUs-card h-100">
                <Card.Body>
                  <div className="whyUs-thumbnail">
                    <img
                      src="https://usminfra.com/assets/img/about/usmresortlogo-01.png"
                      alt="USM Resort Logo"
                    />
                  </div>
                  <div className="whyUs-content">
                    <h3>USM Resorts</h3>
                    <p>
                      USM Resorts is excited to present Go Ranch Resort -
                      Sandalwood Farm Stay, spread across 400 acres of serene
                      sandalwood farms near Yadagirigutta. Opened in early 2024,
                      this luxury resort offers airy cottages, spacious
                      conference halls, a wide clubhouse, and a vibrant
                      cafeteria, making it the perfect venue for day outings,
                      special events, and dream weddings.
                    </p>
                    <p>
                      Guests can enjoy a variety of outdoor and indoor
                      activities, including a beach swimming pool, all nestled
                      within the tranquil beauty of sandalwood greenery. The
                      well-equipped clubhouse and large conference halls ensure
                      that your events are both memorable and enjoyable.
                    </p>
                    <p>
                      Looking ahead, USM Resorts plans to launch several more
                      resorts around Hyderabad, Telangana.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} md={6} className="mb-3 mt-3 mb-lg-0 gx-4">
              <Card className="whyUs-card h-100">
                <Card.Body>
                  <div className="whyUs-thumbnail">
                    <img
                      src="https://usminfra.com/assets/img/about/zenexxlogo.svg"
                      alt="USM Zenexx Logo"
                    />
                  </div>
                  <div className="whyUs-content">
                    <h3>ZennX - A Pharma Tech</h3>
                    <p>
                      ZennX is a leading Software-as-a-Service (SaaS) platform
                      that transforms the pharmaceutical supply chain. By
                      leveraging advanced technology, we streamline and digitize
                      order management operations, enabling pharmacies,
                      distributors, and manufacturers to manage inventory,
                      orders, billing, and more efficiently.
                    </p>
                    <p>
                      Our AI-powered solutions provide retailers with improved
                      visibility, automated mapping processes, and data-driven
                      insights, ultimately enhancing supply chain efficiency,
                      reducing costs for distributors, and increasing overall
                      time efficiency.
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

export default AboutUsmGroup;
