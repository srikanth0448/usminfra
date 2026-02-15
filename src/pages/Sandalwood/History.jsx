import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SectionHeading from "../../components/Heading/SectionHeading";
import "../sandalwood/History.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import TwoColumn from "../../components/twocoloumn/TwoColumn";
import { investingimages } from "../../JsonData";

const History = () => {
  return (
    <>
      <PageHeader bannerImgUrl="https://usminfra.com/assets/img/sandalwood/header1.jfif" />

      <section className="wood-pattern-bg">
        <Container className="px-4">
          <Row>
            <Col md={12} sm={12}>
              <SectionHeading
                text1="History & Popularity"
                text2="Of Sandalwood"
              />
              <h3 className="sub-heading">
                {" "}
                A Step Back To The Past: Sandalwood History{" "}
              </h3>

              <p>
                In 1792, the sandalwood tree was declared a royal tree by Tipu
                Sultan (Mysore’s ruler) for its incredible benefits. This tree
                grows towards 10 mts or 33 ft up and will have a 50–150 cm
                diameter wide trunk. It takes 10-15 years to harvest.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div className="mainsection">
          <Container>
            <TwoColumn
              image="https://usminfra.com/assets/img/sandalwood/Image-01_11zon.jpg"
              alt="sandalwood image"
              content={`
                The sandalwood plantation, maintenance, harvesting, and trade everything was under the control of the state governments since the growing of sandalwood plants by individuals was banned and illegal until 2002. Later on, the state governments lifted restrictions on sandalwood plantations. However, the government has imposed certain restrictions to cut and harvest this precious wood with proper government approval. The trade of sandalwood every year is creating- goosebumps with the ever-growing price hike per ton. This precious wood has a long history of hundreds of years as the best raw source for manufacturing spiritual and therapeutic products. Over the past few years, the demand for sandalwood has touched the sky limit. In particular, 
                the production, demand, and price for sandalwood in India-like countries are increasing at a rapid speed.`}
            />
          </Container>
        </div>
      </section>

      <section>
        <Container>
          <SectionHeading
            className="text-center"
            text1="A Balance Between Sandalwood "
            text2="Supply and Demand Never Happens"
          />

          <p>
            “The current global demand for sandalwood is around 6,000 to 7,000
            metric tons per year. Though Australia-like countries are standing
            in the first line to produce and export tons of sandalwood, with the
            increasing demand on the other side from organizations across
            medical, pharmaceutical, and manufacturing industries the supply and
            demand factors are not balancing.”
          </p>
          <p>
            However, India-like countries are contributing to meeting the demand
            for global sandalwood. But, due to the shortage of supply, the
            country is now importing sandalwood from Australia to meet the
            desired needs of sandalwood-based industries.
          </p>
          <p>
            India used to be one of the biggest producers of sandalwood.
            Karnataka and Tamil Nadu like Indian states are contributing 90% of
            sandalwood production. From 4,000 tons in 1950 to 2,000 tons in
            1990, and 1,000 tons in 2000, the production of sandalwood in India
            has decreased. Since production has fluctuated, India is still on
            top in producing high-quality white sandalwood before the 21st
            century.
          </p>
          <p>
            Such low production hampered the sandalwood economy in the country
            and Australia has taken this as an advantage and now stood as the
            number one exporter in the country. Australia also plans to reduce
            the harvest period of sandalwood for yielding the crop faster than
            usual. However, the shortage of sandalwood will continue as the
            demand increases.
          </p>
          <p>
            Though the production has fluctuated, India is still on top in
            producing high-quality white sandalwood. This is why Indian
            sandalwood is better priced in the international market.
          </p>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            text1="A Tremendous Growth"
            text2="In The Prices Of Sandalwood Has Been Seen In"
            text3="India and World Nations "
          />

          <div className="row justify-content-center mt-3">
            <div className="col-md-10 text-center">
              <div className="row bg-brand p-md-3 p-2 justify-content-center g-0 rounded-3 mb-3">
                <div className="col-md-5">
                  <div className="info-content">
                    <img
                      src="https://usminfra.com/assets/img/sandalwood/Graph-01.png"
                      className="img-fluid"
                      alt="Sandalwood Price Graph"
                    />
                  </div>
                </div>
              </div>

              <p className="lead">
                A ton of white sandalwood is at INR 20 lakh in India. But, its
                international landing price is above INR 50–80 lakh. This price
                is anticipated to grow in the future.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <div className="BenefitsSection">
          <Container>
            <SectionHeading
              text1="Benefits Of White Sandalwood"
              text2="And Why Is So"
              text3="Expensive"
            />
            <p>
              Sandalwood is an expensive type of wood that is harvested by
              removing the entire tree from the roots to maximize profits. Its
              leaves, branches, bark, trunk, roots, and every part of a
              sandalwood plant is useful and costly.
            </p>

            <div className="row">
              {/* Images Column */}
              <div className="col-md-4">
                <img
                  src="https://usminfra.com/assets/img/sandalwood/sandal%20wood1.jpg"
                  className="img-fluid mb-3"
                  alt="Sandalwood Image 1"
                />
                <img
                  src="https://usminfra.com/assets/img/sandalwood/sandalwood%202.jpg"
                  className="img-fluid mb-md-0 mb-3"
                  alt="Sandalwood Image 2"
                />
              </div>

              {/* Text Column */}
              <div className="col-md-8 order-md-first secp py-4">
                <p>
                  The stump, bark, and roots of sandalwood will be useful to
                  extract high levels of sandalwood oil. This oil can be used
                  for manufacturing medicines in curing diseases like cancer,
                  skin care, wound healing, and digestive tract issues.
                </p>

                <p>
                  Food and beverage manufacturing companies are using white
                  sandalwood extracts to enhance the flavors of instant or
                  preserved items. Since ancient days, sandalwood has been used
                  as a fragrance in soaps, cosmetics, and body perfumes.
                </p>

                <p>
                  Along with medical advantages and ritual uses, on the business
                  side, white sandalwood is a precious raw source for
                  manufacturing musical instruments and rich furniture.
                  Sandalwood is also widely used as a coloring foodstuff and a
                  key source for pharmaceutical preparations.
                </p>

                <p>
                  According to researchers, sandalwood oil extracts are
                  increasingly used for reducing radiation in nuclear reactors.
                </p>

                <p>
                  Hence, the benefits of the fully matured and fully grown white
                  sandalwood plant are infinite, making this wood precious and
                  costly compared to other wood species.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section>
        <div className="Future">
          <Container>
            <div className="info-content overlay-dark-light p-md-5 p-3 my-4">
              {/* Heading */}
              <div className="">
                <SectionHeading
                  text1="Future Of Sandalwood Farm Plots "
                  text2="In Telangana"
                />
              </div>

              <p>
                Investments in land or property will offer you good returns over
                time. Investments in fixed or immobile assets are always a
                worthy option.
              </p>
              <div className="row  justify-content-center align-items-center">
                <div className="col-md-5 h-100 ">
                  <img
                    src="https://usminfra.com/assets/img/sandalwood/18_11zon.jpg"
                    className="img-fluid "
                    alt="Sandalwood Farm Plot"
                  />
                </div>
                <div className="col-md-7 h-100">
                  <p>
                    Investments in sandalwood farm plots in Hyderabad are
                    beneficial and they will ensure rapid returns in the future
                    for you. If you buy just open plots with no future-friendly
                    benefits, your investments may not generate meaningful
                    returns over time.
                  </p>

                  <p>
                    Instead of such zero-profit investments, think smartly and
                    put your valuable money into something that gives incredible
                    profits to you and the next generation. Besides, there is a
                    huge international demand for white sandalwood. Its aromatic
                    heartwood is priced at over INR 26,000 to INR 30,000 per KG
                    (based on grade) in the retail market.
                  </p>

                  <p>
                    So, investments in sandalwood plots in Hyderabad are a good
                    and worthy decision for those who look for long-term
                    benefits. Move confidently towards sandalwood plots and
                    secure your future.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section>
        <div className="Is-Investing-In-USm">
          <Container>
            <SectionHeading
              text1="Is Investing In USM Infra Golf Resort"
              text2="Sandalwood Farm Plots"
              text3="Beneficial?"
            />
            <p>
              100% yes. USM Infra is a reliable sandalwood plot developer in
              Hyderabad, Telangana. We are a symbol of success and a leading
              player in offering profitable sandalwood farm plots at reasonable
              prices. We make highly-profitable sandalwood plots available for
              all income backgrounds people and all working-class people.
            </p>

            <div className="imagessection">
              <Row>
                {investingimages.map((item,index)=>(
                    <Col lg={4} md={6} xs={6} key={index} className="p-2 shrink">
                        <div className="imagessection">
                            <img src={item.image} className="card-img" />

                        </div>
                    
                    </Col>
                ))}
              </Row>
            </div>
         <p>
            Our highly-skilled, creative, young, and dynamic core team across plotting and construction business divisions focus on creating admirable venture projects across Telangana. 
            We create lush green mega sandalwood farm plots on nature's lap that symbolize the happiness of our valued customers.
         </p>
          </Container>
        </div>
      </section>
    </>
  );
};

export default History;
