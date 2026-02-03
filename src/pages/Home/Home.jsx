import "./Home.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import SectionHeading from "../../components/Heading/SectionHeading";
import QuoteHeading from "../../components/Heading/QuoteHeading";
import { HiMiniChevronRight } from "react-icons/hi2";
import {
  amenitiesData,
  benefitsData,
  completedProjects,
  countersData,
  ongoingProjects,
  projectHighlights,
} from "../../JsonData";

import VideoContent from "../../components/VideoContent/VideoContent";
const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="home-section hero d-flex align-items-center wood-pattern-bg">
        <div id="slide-show">
          {[
            "Welcome to USM Infra Go Ranch Golf Resort Sandalwood Farm Plots",
            "USM Infra Go Ranch is close to nature with greenary and outstanding connectivity",
            "450+ acres DTCP approved No. 1 project in Telangana",
            "Pleasant Sandalwood Trees and Get huge income from sandalwood sale",
            "Wonderful Resort & Free membership with purchase of a plot",
            "Visit to your own farm with family any time and do outdoor activities",
            "Plot value will be increased at the end",
            "Make Smart Investment in USM Infra",
          ].map((text, index) => (
            <div
              key={index}
              className={`slidex ${index === 0 ? "activx" : ""} ${
                index === 7 ? "last" : ""
              }`}
            >
              <div className="bg1">
                <div className="slider-center">
                  <div className="slide-text">
                    <h2 dangerouslySetInnerHTML={{ __html: text }} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="slideshow-nav">
            <a href="#" className="previousx">
              <i className="ri-arrow-left-s-line"></i>
            </a>
            <a href="#" className="nextx">
              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
        </div>

        <div className="video-bg position-relative" aria-hidden="true">
          <a href="#" className="vid-btn">
            <i className="ri-pause-fill"></i>
          </a>

          <a href="#" className="aud-btn paused" id="aud-btn">
            <i className="ri-volume-mute-line"></i>
            <audio autoPlay loop>
              <source
                src="assets/audio/web-header-audio.ogg"
                type="audio/mpeg"
              />
              <source
                src="assets/audio/web-header-audio.mp3"
                type="audio/mpeg"
              />
            </audio>
          </a>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="web-video w-100 d-none d-md-block"
            src="https://usminfra.com/assets/videos/usm-infra-go-ranch-sandalwood-farm-plots-video_web.mp4"
          />

          <video
            autoPlay
            loop
            muted
            playsInline
            className="mobile-video img-fluid w-100 d-md-none"
            src="https://usminfra.com/assets/videos/usm-infra-go-ranch-sandalwood-farm-plots-video_mobile.mp4"
          />
        </div>
      </section>

      {/* ================= HERO COUNTERS ================= */}
      <section className="hero-counters">
        <Container fluid="xxl" className="px-4">
          <Row>
            {countersData.map((item, index) => (
              <Col lg={3} sm={6} className="mb-3 p-2" key={index}>
                <div className="counter d-flex align-items-center h-100">
                  <span
                    className={`count-icon ${item.bg} d-flex align-items-center justify-content-center`}
                  >
                    <svg className="svg-icon">
                      <use href={`/assets/img/sprite.svg#${item.icon}`} />
                    </svg>
                  </span>

                  <div className="counter-content">
                    <h2 className="count-number">{item.value}</h2>
                    <p className="count-text">{item.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= NO.1 RESORT SANDALWOOD PLOTS SECTION ================= */}
      <section className="no1-resort-section wood-pattern-bg spacer py-3">
        <Container className="px-4">
          <Row>
            <Col className="d-flex">
              <img
                src="https://usminfra.com/assets/img/usm-infra-go-ranch-resort-sandalwood-farm-plots-image.png"
                alt="USM Infra Go Ranch Resort Sandalwood Farm Plots"
                className="img-fluid m-auto"
              />
            </Col>
            <Col className="ps-4">
              <SectionHeading
                text1="No.1 Resort Sandalwood DTCP"
                text2={"Plots Project in Telangana"}
              />
              <p>
                To embrace the customer preferences towards sandalwood plots, we
                strategically switched our business from selling residential
                plots to prestigious and precious sandalwood farm plots
                projects.
              </p>
              <p>
                USM Infra DTCP and HMDA approved sandalwood farm projects in
                Near Yadagirigutta, Shadnagar, Shamirpet, Bibinagar Phase-1, and
                Bibinagar Phase-2 will gratify value addition to your
                investments.
              </p>

              <blockquote className="yellowWhite-gradient">
                "Make the Smart Choice: Invest in our sandalwood plots today for
                a promising future!"
              </blockquote>

              <a href="#whatWeDo" className="btn btn-primary btn-lg">
                Know More <HiMiniChevronRight />
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= WHAT WE DO SECTION ================= */}
      <section className="whatWeDo" id="whatWeDo">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-12" data-aos="fade-down">
              <SectionHeading text1="What We Do?" whiteColor={true} />
              <QuoteHeading text="Sandalwood! Sandalwood! &amp; Sandalwood!" />
            </div>
            <div
              className="col-md-12 mb-4"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <p className="text-white">
                Put your smart investments in our sandalwood plots and get
                double and triple returns over time. USM Infra is loyal in
                sharing 50% of sandalwood profits to customers. We are compliant
                with the rules and regulations of the government authorities.
              </p>
            </div>
            <div
              className="col-md-12 d-flex flex-column whatWeDo-steps"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className="whatWeDo-step whatWeDo-step1 d-flex justify-content-center">
                {" "}
                <img
                  src="https://usminfra.com/assets/img/investment-at-usm-infra.png"
                  alt="USM Infra Best Investment Opportunity in Hyderabad"
                  className="img-fluid"
                />
                <div className="d-flex flex-column justify-content-center">
                  <h4 className="text-orange mb-3">You Invest</h4>
                  <p className="text-white m-0 w-50">
                    Secure your future by investing in USM Infra Sandalwood
                    Projects. Your investments in sandalwood farm plots will
                    increase in value with time.
                  </p>
                </div>
              </div>
              <div
                className="whatWeDo-step whatWeDo-step2 d-flex justify-content-center"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="d-flex flex-column justify-content-center align-items-end">
                  <h4 className="text-green text-end mb-3">
                    We Plant &amp; Cultivate
                  </h4>
                  <p className="text-white text-end m-0 w-50">
                    We plant and cultivate precious sandalwood plants in your
                    plots under the supervision of agricultural experts and
                    implement an advanced Drip irrigation system.
                  </p>
                </div>
                <img
                  src="https://usminfra.com/assets/img/usm-infra-plant-cultivate-sandalwood-plants.png"
                  alt="USM Infra: Best Sandalwood Farm Plots | Top Real Estate Investment in Hyderabad"
                  className="img-fluid"
                />
              </div>
              <div
                className="whatWeDo-step whatWeDo-step3 d-flex justify-content-center"
                data-aos="fade-right"
                data-aos-duration="1100"
              >
                {" "}
                <img
                  src="https://usminfra.com/assets/img/usm-infra-sandalwood-profits-customers.png"
                  alt="Best offer from USM Infra: 50% profit share from sandalwood plantations to customers"
                  className="img-fluid"
                />
                <div className="d-flex flex-column justify-content-center">
                  <h4 className="text-blue mb-3">Share 50% Profits</h4>
                  <p className="text-white m-0 w-50">
                    We give 50% of sandalwood plantation profits to customers.
                    Hurry up! Invest in our sandalwood projects, stay close to
                    nature, and enjoy high returns in the long term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS TO SANDALWOOD PLOT BUYERS SECTION ================= */}
      <section className="buyer-benefits-section wood-pattern-bg spacer py-3">
        <Container className="px-4">
          <div className="col-md-12" data-aos="fade-down">
            <SectionHeading
              text1="Benefits To Sandalwood Plot"
              text2="Buyers"
            />
            <QuoteHeading text="Invest little, get huge returns" />
          </div>
          <Row className="">
            {benefitsData.map((benefit, index) => (
              <Col lg={3} className="mb-4 p-1" key={index}>
                <Card style={{ width: "100%" }} className="h-100">
                  <Card.Body>
                    <div className="benefit-icon">
                      <svg className="svg-icon">
                        <use href={`/assets/img/sprite.svg#${benefit.icon}`} />
                      </svg>
                    </div>
                    <Card.Title>{benefit.heading}</Card.Title>
                    <Card.Text>{benefit.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="unique-features-section spacer py-5">
        <div className="features-heading-container">
          <Container className="py-4">
            <div className="col-md-12 ">
              <SectionHeading
                text1="What Makes"
                text2="Our Sandalwood"
                text3="Projects Unique?"
                whiteColor={true}
              />
              <QuoteHeading text="7 Acres of luxurious resort will add spice to your investment!" />
              <p className="text-white">
                Put your smart investments in our sandalwood plots and get
                double and triple returns over time. USM Infra is loyal in
                sharing 50% of sandalwood profits to customers. We are compliant
                with the rules and regulations of the government authorities.
              </p>
            </div>
          </Container>
        </div>
        <Container fluid className="px-4">
          <div className="feature-cards-container">
            <div className="row">
              <div className="col-12 text-center">
                <h4 className="mb-5 text-white">Go Ranch Resort Amenities</h4>
              </div>
              <Row>
                {amenitiesData.map((amenity, index) => (
                  <Col className="col-lg-3 col-md-3 col-sm-6 mb-3 mb-md-0">
                    <div className="feature-cards-div">
                      <img src={amenity.imgSrc} className="card-img" />
                      <div className="card-img-overlay">
                        <h5 className="card-title">{amenity.title}</h5>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </section>

      <section className="project-highlights-section">
        <Container className="py-5 px-4">
          <div className="col-md-12" data-aos="fade-down">
            <SectionHeading
              text1="Our Open Sandalwood"
              text2="Projects Highlights"
              whiteColor={true}
            />
            <QuoteHeading text="Invest little, get huge returns" />
          </div>
          <Row className="mt-4">
            <Col
              lg={5}
              className="col-lg-5 col-md-0 position-relative d-none d-sm-none d-md-none d-lg-block"
            >
              <img
                src="https://usminfra.com/assets/img/best-investment-usm-infra-hyderabad-telangana.gif"
                alt="Best investment opportunities at USM Infra in Hyderabad, Telangana"
                className="position-absolute d-none d-sm-none d-md-block"
                style={{
                  zIndex: 9,
                  bottom: -30,
                  width: "75%",
                  left: 0,
                }}
              />
            </Col>
            <Col lg={7} className="mb-4">
              <Row>
                <Col lg={6} className="mb-3">
                  <ul className="highlights-list">
                    {projectHighlights.slice(0, 10).map((highlight, index) => (
                      <li
                        key={index}
                        data-aos="fade-down-right"
                        data-aos-duration={(index + 1) * 100}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col lg={6} className="mb-3">
                  <ul className="highlights-list">
                    {projectHighlights.slice(10).map((highlight, index) => (
                      <li
                        key={index}
                        data-aos="fade-down-right"
                        data-aos-duration={(index + 1) * 100}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ongoing-projects-section wood-pattern-bg spacer py-4">
        <Container className="px-4">
          <div className="col-md-12" data-aos="fade-down">
            <SectionHeading text1="Mega Ongoing Projects" />
            <p style={{ fontWeight: 600 }}>
              We design exclusive sandalwood projects with outstanding
              connectivity to metropolitan cities.
            </p>
          </div>

          <Row className="mt-4">
            {ongoingProjects.map((project, index) => (
              <Col lg={4}>
                <VideoContent
                  key={index}
                  thumbNail={project.thumbnail}
                  videoUrl={project.videoLink}
                  text={project.name}
                  readMoreLink={project.readMoreLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="completed-projects-section wood-pattern-bg spacer">
        <Container className="px-4">
          <div className="col-md-12" data-aos="fade-down">
            <SectionHeading text1="Completed Projects" />
            <p style={{ fontWeight: 600 }}>
              We design exclusive Residential Plots with outstanding
              connectivity to metropolitan cities.
            </p>
          </div>

          <Row className="mt-3 justify-content-center">
            {completedProjects.map((project, index) => (
              <Col lg={4} className="mb-4">
                <VideoContent
                  key={index}
                  thumbNail={project.thumbnail}
                  videoUrl={project.videoLink}
                  text={project.name}
                  readMoreLink={project.readMoreLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
