import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../../pages/membership/Membership.css";
import Hero from "../../components/herosection/Hero";
import TwoColumn from "../../components/twocoloumn/TwoColumn";
import SectionHeading from "../../components/Heading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const offersData = [
  {
    title: "Free Day Outing",
    description:
      "Spend a refreshing day with family and friends in nature's lap.",
    images: [
      "https://usminfra.com/assets/img/membership/dayouting-1.jpg",
      "https://usminfra.com/assets/img/membership/dayouting-2.jpg",
      "https://usminfra.com/assets/img/membership/dayouting-3.jpg",
    ],
    badge: "FREE",
  },
  {
    title: "50% Off on Cottages",
    description: "50% Off on Go Ranch Cottage Stay  for Plot Owners!",
    images: [
      "https://usminfra.com/assets/img/membership/cottages-1.jpg",
      "https://usminfra.com/assets/img/membership/cottages-2.jpg",
      "https://usminfra.com/assets/img/membership/cottages-3.jpg",
      "https://usminfra.com/assets/img/membership/cottages-4.jpg",
      "https://usminfra.com/assets/img/membership/cottages-5.jpg",
    ],
    badge: "50% OFF",
  },
  {
    title: "Events",
    description: "Exclusive Discounts on Special Events for Plot Owners!",
    images: [
      "https://usminfra.com/assets/img/membership/events-1.jpg",
      "https://usminfra.com/assets/img/membership/events-2.jpg",
      "https://usminfra.com/assets/img/membership/events-3.jpg",
      "https://usminfra.com/assets/img/membership/events-4.jpg",
    ],
    badge: "",
  },
];

const amenitiesSlides = [
  {
    web: "https://usminfra.com/assets/img/membership/adventureweb01.png",
    mobile: "https://usminfra.com/assets/img/membership/adventuremobile01.png",
  },
  {
    web: "https://usminfra.com/assets/img/membership/indoor-games-web.png",
    mobile:
      "https://usminfra.com/assets/img/membership/outdoor-games-mobile.png",
  },
  {
    web: "https://usminfra.com/assets/img/membership/outdoor-games-web.png",
    mobile:
      "https://usminfra.com/assets/img/membership/outdoor-games-mobile.png",
  },
  {
    web: "https://usminfra.com/assets/img/membership/indoor-games-web.png",
    mobile:
      "https://usminfra.com/assets/img/membership/indoor-games-mobile.png",
  },
];

const Membership = () => {
  return (
    <>
      <Hero
        imageweb="https://usminfra.com/assets/img/membership/mainimageweb01.jpg"
        imagemobile="https://usminfra.com/assets/img/membership/mobile-image-main.jpg"
      />

      <section>
        <Container>
          <TwoColumn
            image="https://usminfra.com/assets/img/membership/mainimagemembership.png"
            alt="High-Return Investment Plots Available Now - USM Infra"
            content="Own Your Dream Sandalwood Plot & Get a Free Resort Membership in All USM Resorts!
                    Purchase your premium sandalwood plot at Go Valley, Go Ranch, or Rush Greens and become part of our upcoming eco-communities — Eco Woods and Vista Springs. This exclusive benefit is also extended to customers from our completed projects at Shadnagar, Bibinagar, and Shamirpet.
                    As a special privilege, every plot owner receives a Free USM Infra Unified Resort Membership Card, giving you seamless access to all USM Infra premium resorts, including Go Ranch Resort. Enjoy world-class amenities, adventure activities, delicious cuisine, and peaceful stays surrounded by acres of refreshing sandalwood greenery.
                    Experience nature, relaxation, and long-term value — all brought together for your perfect lifestyle investment.
                    "
            reverse={true}
            heading1="Buy Plot"
            heading2="Get"
            heading3="Free Resort Membership!"
          />
        </Container>
      </section>
      <section>
        <Container>
          <SectionHeading
            text1="Our Vision "
            text2="— And"
            text3="How It Works"
          />
          <img
            className="img-fluid  w-100  d-none d-md-block "
            src="https://usminfra.com/assets/img/membership/our-vision-web.png"
            alt=""
          />
          <img
            className="w-100 d-md-none"
            src="https://usminfra.com/assets/img/membership/our-vision-mobile.png"
            alt=""
          />
        </Container>
      </section>
      <section>
        <Container>
          <div className="Exclusive-Resort-Membership">
            <SectionHeading
              text2="Exclusive"
              text1="Resort Membership"
              text3="Benefits"
            />
          </div>
        </Container>
        <div className="offers-section">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              0: {
                slidesPerView: 1.2, // 👈 shows 80% center + side preview
                centeredSlides: true,
                spaceBetween: 15,
              },
            }}
          >
            {offersData.map((offer, index) => (
              <SwiperSlide key={index}>
                <div className="offer-card h-100">
                  {/* Badge */}
                  {offer.badge && (
                    <span className="offer-badge">{offer.badge}</span>
                  )}

                  {/* Inner Image Slider */}
                  <Swiper
                    modules={[Navigation]}
                    navigation
                    className="inner-swiper"
                  >
                    {offer.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img} alt={offer.title} />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Content */}
                  <div className="offer-content">
                    <h3>{offer.title}</h3>
                    <p>{offer.description}</p>
                    <button className="learn-btn">Learn More →</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="terms-text">*Offer Subject to Terms & Conditions</p>
        </div>
      </section>

      <section>
        <Container>
          <div className="Membership-card">
            <SectionHeading
              text1="USM "
              text2="All Resorts "
              text3="Premium Membership Card"
            />
            <p>
              The USM All Resorts Premium Membership Card is specially designed
              for all project customers and plot owners, unlocking access to
              every USM Infra Resort with exciting exclusive benefits.
            </p>
            <div className="row justify-content-end">
              <div className="col-md-12 d-flex justify-content-center Membership-Card-bgsection p-0">
                {/* Left Side */}
                <div className="col-md-6">
                  <div className="row d-flex justify-content-center align-items-center h-100 p-3">
                    <div className="col-md-9 col-lg-9 col-12">
                      <div className="card-image">
                        <img
                          className="img-fluid w-100"
                          src="https://usminfra.com/assets/img/membership/membershipcard.png"
                          alt="Best beach swimming pool at Go Ranch resort near Yadagirigutta"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side (Hidden on Mobile) */}
                <div
                  className="col-md-6 d-none d-md-block"
                  style={{ borderLeft: "1px solid black" }}
                >
                  <div className="card-image">
                    <img
                      className="img-fluid w-100"
                      src="https://usminfra.com/assets/img/membership/membershipsideimage.jpg"
                      alt="Best beach swimming pool at Go Ranch resort near Yadagirigutta"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <div className="World-Class-Resort-Amenities">
          <Container>
            <SectionHeading
              text1="Exclusive"
              text2="Unlock"
              text3="World-Class Resort Amenities"
            />
            <p>
              Go Ranch Resort offers a perfect blend of fun and relaxation.
              Enjoy the beach-themed pool, sports, kids’ play area, and exciting
              adventure activities.
            </p>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop
              autoplay={{ delay: 3000 }}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                1024: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1.15, // side preview like offers slider
                  centeredSlides: true,
                  spaceBetween: 15,
                },
              }}
              className="amenities-swiper"
            >
              {amenitiesSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="amenity-slide">
                    {/* Desktop Image */}
                    <img
                      src={slide.web}
                      alt="amenity"
                      className="d-none d-md-block w-100"
                    />

                    {/* Mobile Image */}
                    <img
                      src={slide.mobile}
                      alt="amenity"
                      className="d-block d-md-none w-100"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Membership;
