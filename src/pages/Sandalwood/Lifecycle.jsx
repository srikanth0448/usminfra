import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionHeading from "../../components/Heading/SectionHeading";
import "../Sandalwood/lifecycle.css";
import {lifeCycleImages,} from "../../JsonData";






const Lifecycle =() =>{

const sandalwoodBenefits = [
  "The shortage is one of the primary reasons for the price hike of sandalwood every year. On the other side, the incredible benefits of sandalwood are also another reason that is making this precious wood so expensive.",

  "Sandalwood is an expensive type of wood that is harvested by removing the entire tree from the roots to maximize profits. Its leaves, branches, bark, trunk, and roots are every piece of a sandalwood plant useful and costly.",

  "The stump, bark, and roots of sandalwood will be useful to extract high levels of sandalwood oil. This oil can be used for manufacturing medicines in curing diseases like cancer, skin care, wounds healing, and digestive tract issues.",

  "Food and beverage manufacturing companies are using white sandalwood extracts to enhance the flavors of instant or preserved items. Since ancient days, sandalwood is used as a fragrance in soaps, cosmetics, and body perfumes.",

  "Along with medical advantages and ritual uses, white sandalwood is a precious raw source for manufacturing musical instruments and rich furniture.",

  "Sandalwood is also widely used as a coloring foodstuff and a key source for pharmaceutical preparations. Researchers also found that sandalwood oil extracts help reduce radiation in nuclear reactors.",

  "Hence, the benefits of a fully matured white sandalwood plant are infinite, making it costlier than other wood species.",

  "Another reason for the continuous price hike is its slow growth and wood shortage. Each plant takes nearly 10 to 15 years to grow."
];

return(

<>
    <div className="">
        <PageHeader bannerImgUrl="https://usminfra.com/assets/img/sandalwood/header1.jfif" />
    </div>

    <section className="wood-pattern-bg">
    <Container className="px-4">
        <Row>
            <Col md={12}>
            <SectionHeading  text1="All About" text2="The Sandalwood Tree!" />
            <p className="my-4">
            Sandalwood is one of the most precious wood and is very expensive wood in the world. 
            From roots, trunk, and bark to the stems and branches, 
            every part of the sandalwood tree make money to the cultivators.
            </p>
                <img
                    src="https://120.138.10.167/testing/usminfra/assets/img/sandalwood/pp1.png"
                    className="img-fluid" alt="Commitment To Perfection"
                    />
                    <p className="py-2">
                        This ancient precious wood is used in medicines, cosmetics, beauty products, skincare products, and also even used for the manufacture of luxurious home and office furniture items. Further, the extracts of sandalwood is widely applying to soothing the flavors and fragrance of food products.
                        Nowadays, the use of sandalwood is increasingly gaining popularity in pans for enriching the aroma of the food products. Further, this precious wood has a long history of hundreds of years as the best raw source for manufacturing spiritual and therapeutic products.
                    </p>
                    <p>
                        Let’s take a look at the origin of sandalwood. Herein, we have also gave information on the complete life cycle of a sandalwood plant from day one through plantation and harvesting after years.
                    </p>
            </Col>
        </Row>
        </Container>
    </section>

    <section>
       <div className="The-life-cycle">
         <Container>
             <SectionHeading  text1=" The Life Cycle " text2=" of Sandalwood Tree!" />
               <Row className="backof-TheLifeCycle">
                {lifeCycleImages.map((img,index)=>(
                  <Col lg={4} sm={12} key={index} className="p-2">
                    <div className="feature-cards-div">
                      <img src={img.image} className="card-img" />
                      <div className="card-img-overlay">
                        <h5 className="card-title">{img.alt}</h5>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>

              <p>
                Sandalwood is a parasitic tree. It means that it can only grow by extracting nutrients from other plants. From day one sandalwood saplings absorb 50%-60% of nutrients from other plants roots. Here are three significant stages of Sandalwood plantation.
              </p>

         </Container>
       </div>
    </section>

    <section>
        <Container>
        <div className="Stageonetwosec">
          <div className="row gx-3">
                <div className="col-lg-6 col-12">
                    <div className="backof-TheLifeCycle p-2 p-lg-4 h-100 d-flex flex-column">
                    <h3>Stage 1:</h3>
                    <p>
                        This is an initial stage where sandalwood saplings will absorb nutrients
                        from temporary hosts. Since the sandalwood roots are very tiny and delicate,
                        red gram is the best option as a middle crop.
                    </p>

                    {/* Image pushed to bottom */}
                    <img
                        src="https://usminfra.com/assets/img/sandalwood/st1.jpg"
                        className="img-fluid mt-auto"
                        alt="Stage 1"
                    />
                    </div>
                </div>

                <div className="col-lg-6 col-12">
                    <div className="backof-TheLifeCycle p-2 p-lg-4 h-100 d-flex flex-column">
                    <h3>Stage 2:</h3>
                    <p>
                        After six months of plantation, the roots drive deep into the soil and
                        need more nutrients. Intermediate hosts like Sesbania or Malabar are used.
                    </p>

                    <img
                        src="https://usminfra.com/assets/img/sandalwood/sx44.jpg"
                        className="img-fluid mt-auto"
                        alt="Stage 2"
                    />
                    </div>
                </div>
         </div>

        </div>
        </Container>
    </section>

    <section>
           <Container>
        <div className="stagethree">
            <div className="backof-TheLifeCycle p-2 p-lg-4 h-100 ">
             
        <Row>

         <h3>Stage 3:</h3>

         <p>
            Fruits plantations like Guava or Mango crops will be best as permanent hosts. Like this, 
            the sandalwood tree completely depends on other plants for its healthy growth. 
            At the age of 7-8 years, the oil will be formed from the heartwood, 
            the central wood of trees. Based on the quality of the wood, 
            the grade and price will be decided by the specialists.
         </p>

          <p>This tree grows towards 10 mts or 33 ft up and will have a 50–150 cm diameter wide trunk. 
            It takes 10-15 years to harvest.
             However, the growth of sandalwood tress in 
             a natural way might takes around 30-40 years to harvest.
            </p>

            <div className="imagesection">

                <img src="https://usminfra.com/assets/img/sandalwood/stage-3.jfif" alt=""  className="img-fluid"/>
            </div>

        </Row>
            </div>
        </div>
        </Container>
    </section>
    <section>
        <Container>
            <div className="Why-Is-Sandalwood-section backof-TheLifeCycle p-lg-5 p-2">
             <SectionHeading  text1=" Why Is" text2=" Sandalwood" text3="So Expensive?"/>
                    <ul className="So-Expensive">
                    {sandalwoodBenefits.map((item, index) => (
                        <li className="mb-4" key={index}>
                        {item}
                        </li>
                    ))}
                    </ul>
            </div>
        </Container>
    </section>
    
    <section>
        <div className="Why-Should-One-Buy">
            <Container>
             <SectionHeading  text1="Why Should One Buy" text2=" A Plot From" text3="USM Infra?"/>
            <p>USM Infra listens and understands your plans. We leverage our expertise to offer you the best open lands with world-class amenities.</p>
                <img className="img-fluid" src="https://usminfra.com/assets/img/sandalwood/idol-img%201.jpg" alt="" />
            </Container>
        </div>
    </section>

    <section>
        <div className="Benefits-Of-Buying">
            <Container>
              <SectionHeading  text1="Benefits Of Buying" text2="USM Infra Sandalwood Plots"/>
              <p>
                Increasing demand for sandalwood plots is encouraging us to create more customer-friendly projects. Here are the most significant benefits of buying USM Infra’s sandalwood plots.
              </p>
              <h4 class="mt-3"><b> • Sandalwood Plantation And Free Maintenance </b></h4>

              <p>
                We do plantation and maintenance of sandalwood plants in all registered plots for nearly 12-15 years using the most advanced Israel farming techniques and strategies.
              </p>

              <div className="backof-TheLifeCycle px-lg-5 px-3 py-lg-4 py-3 ">
                <Row className="">
                    <div className="col-lg-6 col-12 h-100">
                        <img className="img-fluid" src="https://usminfra.com/assets/img/sandalwood/Sandalwood%20Pics.jpg" alt="" />
                    </div>
                    <div className="col-lg-6 col-12 h-100 ">
                         <img className="img-fluid" src="https://usminfra.com/assets/img/sandalwood/2g.jpg" alt="" />
                    </div>
                </Row>
              </div>
                    <p>
                        We implement Israel’s Drip Irrigation and Fertigation system to increase crop productivity and harvest healthy
                        trees. This modern system automates the entire drip and fertilization procedure 
                        and ensures the growth of sandal plants. When you buy open plots from USM Infra, from sandalwood plantations,
                        maintenance and harvesting are done in the presence of agricultural experts.
                    </p>

            </Container>


        </div>
    </section>

    <section>
        <div className="Low-Capital">

            <Container>


 <div className="info-content-wrap p-lg-5 p-3 backof-TheLifeCycle">

      {/* Low Capital */}
      <div className="row g-3 justify-content-between align-items-center mb-4">
        <div className="col-lg-6">
          <div className="info-content">
            <h5><b>• Low Capital and Huge ROI</b></h5>

            <p>
              Growing the price for white sandalwood will ensure promised ROIs to the plot
              owner. The global market price for sandalwood is continuously increasing
              since it is being used in various end applications such as skincare, beauty
              products, pharmaceuticals, etc.
            </p>

            <p>
              We promise that the profit acquired by harvesting sandal plants will be
              equally shared between the plot owner and the company.
            </p>

            <p>
              USM Infra also stresses that the prices of white sandalwood open lands are
              expected to increase in value in the upcoming years.
            </p>
          </div>
        </div>

        <div className="col-lg-5 shrink">
          <img
            className="img-fluid"
            src="https://usminfra.com/assets/img/sandalwood/low%20capirtal1.png"
            alt="Low Capital ROI"
          />
        </div>
      </div>

      {/* EMI */}
      <div className="row g-3 justify-content-between align-items-center mb-4">
        <div className="col-lg-6">
          <div className="info-content">
            <h5><b>• Flexible EMI Payments</b></h5>

            <p>
              On the payment side, if you are not willing to pay the whole plot amount at
              once, relax! We have an EMI option for you. You can pay the total amount
              over a tenure of 48 months with an affordable EMI breakdown.
            </p>
          </div>
        </div>

        <div className="col-lg-5 shrink">
          <img
            className="img-fluid"
            src="https://usminfra.com/assets/img/sandalwood/EMI-01.jpg"
            alt="Flexible EMI"
          />
        </div>
      </div>

      {/* Profit Share */}
      <div className="row g-3 justify-content-between align-items-center mb-4">
        <div className="col-lg-6">
          <div className="info-content">
            <h5><b>• Profit Share</b></h5>

            <p>
              As sandalwood plantation is done in DTCP-approved plots, once sandalwood is
              harvested, the profit is shared in 12–15 years of tenure.
            </p>

            <p>
              Meanwhile, the value of your plot will also increase with time, ensuring
              double-fold benefits.
            </p>
          </div>
        </div>

        <div className="col-lg-5 shrink">
          <img
            className="img-fluid"
            src="https://usminfra.com/assets/img/sandalwood/Profit%20Share-01.jpg"
            alt="Profit Share"
          />
        </div>
      </div>

      {/* Resort Membership */}
      <div className="row g-3 justify-content-between align-items-center mb-4">
        <div className="col-lg-6">
          <div className="info-content">
            <h5><b>• Free Membership To Go Ranch Sandalwood Resort</b></h5>

            <p>
              USM Infra provides free membership to resort facilities for plot buyers for
              15 years. Registered plot owners can visit anytime and access outdoor
              activities, clubhouse, and swimming pool.
            </p>

            <p>
              Plots are selling fast across all our projects. Be a part of USM Infra’s
              premium gated communities and enjoy exclusive benefits.
            </p>
          </div>
        </div>

        <div className="col-lg-5 shrink">
          <img
            className="img-fluid"
            src="https://usminfra.com/assets/img/sandalwood/Resort_lifecyleupdated.jpg"
            alt="Resort Membership"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <p className="text-left">
            “Hurry up! Choose your plot, know facing, start investing, own a sandalwood
            farm plot, get free resort membership, and enjoy ROI on sandalwood profits.”
          </p>
        </div>
      </div>

    </div>
            </Container>

            
        </div>
    </section>

</>
    
);

}
export default Lifecycle;