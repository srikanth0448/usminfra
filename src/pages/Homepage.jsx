import React from "react";
import { useState } from "react";
import "./Home.css";
import mainimage from "../assets/usm-infra-go-ranch-resort-sandalwood-farm-plots-image.png";
import gifarrow from "../assets/arrowgif.gif";
import bluemoney from "../assets/Blue-money.png";
import highprofit from "../assets/highprofit.gif";
import "bootstrap/dist/css/bootstrap.min.css";

const amenities = [
  {
    title: "Box Cricket",
    img: "https://usminfra.com/assets/img/homepage/usm-infra-box-cricket.jpg",
    aos: 500,
  },
  {
    title: "Cycling",
    img: "https://usminfra.com/assets/img/homepage/usm-infra-cycling-sandalwood-suroundings.jpg",
    aos: 1000,
  },
  {
    title: "Mini Golf",
    img: "https://usminfra.com/assets/img/homepage/usm-infra-mini-golf.jpg",
    aos: 1500,
  },
  {
    title: "Swimming Pool",
    img: "https://usminfra.com/assets/img/homepage/usm-infra-beach-swimming-pool.jpg",
    aos: 2000,
  },
];

const extraAmenities = [
  {
    title: "Water Creek",
    img: "https://usminfra.com/assets/img/homepage/usm-infra-water-creek-image.jpg",
    aos: 500,
  },
  {
    title: "Rope Adventures",
    img: "https://usminfra.com/assets/img/homepage/usm-infra-rope-adventure-activities.jpg",
    aos: 1000,
  },
  {
    title: "Zip Line",
    img: "https://usminfra.com/assets/img/homepage/usm-infra-zip-line-image.jpg",
    aos: 1500,
  },
  {
    title: "Rain Dance",
    img: "https://usminfra.com/assets/img/homepage/usm-infra-rain-dance.jpg",
    aos: 2000,
  },
];

const benefits = [
  {
    title: "Highly Profitable",
    desc: "Steady rise in sandalwood prices—grow your wealth over time.",
    icon: highprofit,
  },
  {
    title: "Free Maintenance",
    desc: "Complete care and upkeep of your sandalwood plantation for 15 years.",
    icon: highprofit,
  },
  {
    title: "Fruit Plantation Benefits",
    desc: "Seasonal fruit plants for additional recurring income.",
    icon: highprofit,
  },
  {
    title: "50:50 Profit Sharing",
    desc: "Equal profit sharing model with full transparency.",
    icon: highprofit,
  },
];

const AmenityCard = ({ img, title }) => {
  return (
    <div className="card h-100 bg-transparent border-0 text-white animate-card">
      <img src={img} className="card-img" alt={title} />
      <div className="card-img-overlay d-flex align-items-end">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="container-fluid wood-pattern-bg ">
        <section className="hero d-flex align-items-center">
          {/* TEXT SLIDER */}
          {/* VIDEO BG */}
          <div className="video-bg position-relative" aria-hidden="true">
            <video
              className="web-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              src="https://usminfra.com/assets/videos/usm-infra-go-ranch-sandalwood-farm-plots-video_web.mp4"
            />

            <video
              className="mobile-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              src="https://usminfra.com/assets/videos/usm-infra-go-ranch-sandalwood-farm-plots-video_mobile.mp4"
            />
          </div>
        </section>

        <section className=" ">
          <div className="row px-lg-4 px-2">
            <div
              className="col-lg-6 col-sm-12 d-flex"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {" "}
              <img
                src={mainimage}
                alt="Myna Logo"
                style={{ zIndex: 1, objectFit: "scale-down" }}
              />
            </div>
            <div
              className="col-lg-6 col-sm-12 ps-lg-5"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <h2 className="section-header">
                <span>No.1 Resort Sandalwood DTCP </span>Plots Project in
                Telangana
              </h2>
              <div className="line"></div>
              <p>
                To embrace the customer preferences towards sandalwood plots, we
                strategically switched our business from selling residential
                plots to prestigious and precious sandalwood farm plots
                projects. USM Infra DTCP and HMDA approved sandalwood farm
                projects in Near
                <strong>
                  {" "}
                  Yadagirigutta, Shadnagar, Shamirpet, Bibinagar Phase-1
                </strong>
              </p>
              <div className="line"></div>

              <div className="highlights-section pt-3 pb-5">
                <ul>
                  <li> HMDA & DTCP LAYOUTS </li>
                  <div className="smallline"></div>

                  <li> Green & Serene Environment</li>
                  <div className="smallline"></div>

                  <li> High ROI & Guarenteed Returns </li>
                </ul>
              </div>

              <div className="cta-wrapper">
                <div className="cta-banner">
                  <p className="cta-text">
                    MAKE THE SMART CHOICE: INVEST IN OUR SANDALWOOD <br />
                    PLOTS FOR A PROMISING FUTURE!
                  </p>

                  <div className="cta-buttons">
                    <a href="#" className="btn btn-orange">
                      Book a Site Visit
                    </a>
                    <a href="#" className="btn btn-blue">
                      Download Brochure
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="What-we-do-section container-fluid ">
        <div className="container px-lg-0 px-1">
          <h2 className="section-header">
            <span style={{ color: "white" }}>What We Do?</span>
          </h2>
          <p style={{ color: "white" }}>
            Put your smart investments in our sandalwood plots and get double
            and triple returns over time. USM Infra is loyal in sharing 50% of
            sandalwood profits to customers. We are compliant with the rules and
            regulations of the government authorities.
          </p>
          <div className="row whatwedosection">
            <div className="col-lg-4 col-12 d-flex">
              <div className="sectioneach">
                <div className="image-section">
                  <img src={bluemoney} alt="" />
                </div>
                <div className="contentsection">
                  <h2 className="section-sub-header">
                    <span>You Invest</span>
                  </h2>
                  <p>
                    Secure your future by investing in USM Infra Sandalwood
                    Projects. Your investments in sandalwood farm plots will
                    increase in value with time.
                  </p>
                </div>
              </div>

              <div className="gifsection d-flex justify-content-center align-items-center">
                <img src={gifarrow} alt="Myna Logo" />
              </div>
            </div>
            <div className="col-lg-4 col-12 d-flex ">
              <div className="sectioneach">
                <div className="image-section">
                  <img
                    src="https://usminfra.com/assets/img/usm-infra-plant-cultivate-sandalwood-plants.png"
                    style={{ transform: "rotate(91deg)" }}
                    alt=""
                  />
                </div>
                <div className="contentsection">
                  <h2 className="section-sub-header">
                    <span>We Plant & Cultivate</span>
                  </h2>
                  <p>
                    We plant and cultivate precious sandalwood plants in your
                    plots under the supervision of agricultural experts and
                    implement an advanced Drip irrigation system.
                  </p>
                </div>
              </div>
              <div className="gifsection d-flex justify-content-center align-items-center">
                <img src={gifarrow} alt="Myna Logo" />
              </div>
            </div>
            <div className="col-lg-4 col-12 d-flex">
              <div className="sectioneach">
                <div className="image-section">
                  <img
                    src="https://usminfra.com/assets/img/usm-infra-sandalwood-profits-customers.png"
                    style={{ transform: "rotate(270deg)" }}
                    alt=""
                  />
                </div>
                <div className="contentsection">
                  <h2 className="section-sub-header">
                    <span>Share 50% Profits</span>
                  </h2>
                  <p>
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

      <section className="benefits-section">
        <div className="benefits-wrapper">
          {/* Header */}
          <div className="benefits-header">
            <h2 className="section-header">
              Why Our <span>Sandalwood Plots</span> Are a <br />
              Smart Investment for You
            </h2>
            <p>Trusted by hundreds of long-term investors</p>
          </div>

          {/* Cards */}
          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div className="benefit-box" key={index}>
                <div className="icon-circle icon-wrapper">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="container-fluid Projects-Unique">
        <div className="container px-lg-0 px-1">
          <div className="overlay"></div>
          <h2 className="section-header">
            <span style={{ color: "white" }}>What We Do?</span>
          </h2>
          <p style={{ color: "white" }}>
            Put your smart investments in our sandalwood plots and get double
            and triple returns over time. USM Infra is loyal in sharing 50% of
            sandalwood profits to customers. We are compliant with the rules and
            regulations of the government authorities.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="mb-5 text-white">Go Ranch Resort Amenities</h4>
          </div>

          {amenities.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-3 col-sm-6 mb-3"
              data-aos="slide-up"
              data-aos-duration={item.aos}
            >
              <AmenityCard {...item} />
            </div>
          ))}

          {!showMore && (
            <div className="row mt-2 text-center">
              <div className="col-auto mx-auto">
                <button
                  className="btn btn-primary"
                  onClick={() => setShowMore(true)}
                >
                  Load More
                </button>
              </div>
            </div>
          )}

          {showMore &&
            extraAmenities.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-3 col-sm-6 mb-3"
                data-aos="slide-up"
                data-aos-duration={item.aos}
              >
                <AmenityCard {...item} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
