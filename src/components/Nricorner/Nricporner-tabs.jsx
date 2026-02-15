import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Nricpornertabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const cardsData = [
    {
      id: 1,
      icon: "assets/img/sprite.svg#nri-1",
      title: "Support In Availing Bank Loans",
      description: `Our team helps customers in availing financial loans through various authorized Indian Banks as well as financial institutions.

We assist our esteemed customers until the loan amount is disbursed to them. Accordingly, the company (USM Infra) itself provides EMI flexibility for buyers of certain open plot ventures.`,
    },
    {
      id: 2,
      icon: "assets/img/sprite.svg#nri-2",
      title: "Support In Documentation And Registration Process",
      description: `We have a dedicated in-house team to help our NRI customers to provide smooth documentation and registration process.

NRI customers need not come to India for registration and document submission. USM Infra team will manage all paperwork on behalf of NRI customers.`,
    },
    {
      id: 3,
      icon: "assets/img/sprite.svg#nri-3",
      title: "Secured Payment Systems",
      description: `We acquired huge customer trust with our transparency in providing services. Before payment, we send all plot images for verification.

Then, you can make a secure online payment to our bank account. Your trust drives our success in the competitive real estate market.`,
    },
  ];

  const projects = [
    {
      id: 1,
      image: "https://usminfra.com/assets/img/nri-corner/goranch.jpg",
      title: "GoRanch",
    },
    {
      id: 2,
      image: "https://usminfra.com/assets/img/nri-corner/shadnagar.jpg",
      title: "Shadnagar",
    },
    {
      id: 3,
      image: "https://usminfra.com/assets/img/nri-corner/shamirpet.jpg",
      title: "Shamirpet",
    },
    {
      id: 4,
      image: "https://usminfra.com/assets/img/nri-corner/bibinagar1.jpg",
      title: "Bibinagar Phase 1",
    },
    {
      id: 5,
      image: "https://usminfra.com/assets/img/nri-corner/bibinagar2.jpg",
      title: "Bibinagar Phase 2",
    },
  ];

  const [openIndex, setOpenIndex] = useState(8); // last one open by default


  
const rbiGuidelines = [
  {
    title: "What types of properties that an NRI can buy in India?",
    content: (
      <>
        An NRI/PIO can buy: Residential or Commercial Properties <br />
        An NRI/PIO cannot buy: Agricultural lands / Farmhouse
      </>
    ),
  },
  {
    title: "Do an NRI need any RBI approval to buy immovable property in India?",
    content:
      "No. No permission is required for an NRI to buy residential/commercial lands in India.",
  },
  {
    title: "Is there any limitation to NRI to purchase immovable properties in India?",
    content:
      "No. There are no restrictions applicable to NRI for buying residential/commercial lands in India.",
  },
  {
    title: "Can a Foreign citizen hold ownership rights to the property purchased by an NRI?",
    content:
      "No. The land/plot purchased by an NRI can either be purchased in a single name or jointly with another NRI.",
  },
  {
    title: "How to finance the property that you purchased in India?",
    content: (
      <>
        <ul>
          <li>Through foreign banking channels</li>
          <li>Through FCNR account</li>
          <li>Through NRE/NRO Account</li>
        </ul>
        Foreign currency or traveler’s cheque is not allowed.
      </>
    ),
  },
  {
    title: "Can a foreign citizen residing outside India purchase property in India?",
    content:
      "No. A non-Indian origin person residing outside India cannot purchase property in India (except specific lease conditions).",
  },
  {
    title: "Can a NRI get commercial/residential property in India as gift?",
    content:
      "Yes. NRIs/PIOs can acquire properties other than agricultural land/farmhouse by way of gift.",
  },
  {
    title: "Can a NRI sell or transfer his/her immovable property in India?",
    content: (
      <>
        Yes. An NRI can sell property to:
        <ul>
          <li>A resident Indian</li>
          <li>An NRI or PIO</li>
        </ul>
      </>
    ),
  },
  {
    title: "Can a NRI/PIO avail loan in rupees to buy property in India?",
    content:
      "Yes. They can avail loans from authorized banks under RBI regulations for property purchase or renovation.",
  },
];


  return (
    <section className="tabs-sec py-5">
      <div className="container-xl">
        <div className="text-center">

          {/* Tabs Header */}
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
                onClick={() => setActiveTab("tab1")}
              >
                NRI Guide to Registration Process
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
                onClick={() => setActiveTab("tab2")}
              >
                Why Our Premium Ventures Are Popular?
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}
                onClick={() => setActiveTab("tab3")}
              >
                RBI Guidelines
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="mt-5">

            {/* TAB 1 */}
            {activeTab === "tab1" && (
              <div className="row">
                {cardsData.map((card) => (
                  <div key={card.id} className="col-xl-4 col-lg-12 mb-4">
                    <div className="card h-100 text-center p-4">
                      <div className="mb-4">
                        <svg className="svg-icon">
                          <use xlinkHref={card.icon}></use>
                        </svg>
                      </div>
                      <h4 className="mb-3">{card.title}</h4>
                      <p style={{ whiteSpace: "pre-line" }}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2 */}
            {activeTab === "tab2" && (
              <div className="card p-4 text-start">
                <h2 className="mb-3">
                  <span>Increased Return</span> -On-Investment
                </h2>

                <p>
                  The right time has arrived to invest in real estate properties in India. Open land or plot prices in India, especially in Hyderabad, are climbing every year. We ensure that all our venture plot buyers will get high returns with low investments. Our DTCP and HMDA approved best-in-class open plots/lands in and around Hyderabad give surprising and unbelievable returns.
                </p>
                <p>
                  Don't waste your valuable money on plots that just worth your investment, instead make your smart investment on plots that offer huge returns in the future.
                </p>

                <h2 className="mt-5 mb-3">
                  <span>Our Premium</span> Projects
                </h2>

                <div className="row row-cols-2 row-cols-lg-5 g-3">
                  {projects.map((project) => (
                    <div key={project.id} className="col text-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="img-fluid"
                      />
                      <h6 className="mt-2">{project.title}</h6>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3 */}
     {activeTab === "tab3" && (
  <div className="card p-4 text-start">
    <p>
      NRIs are thrilled to invest in the ever-growing real estate industry of
      India. RBI has given legal permission to NRIs or Persons of Indian
      Origin (PIO) to acquire/transfer properties in India. Below are certain
      RBI guidelines to NRI/PIO to purchase property in India.
    </p>

    <div className="accordion mt-4">
      {rbiGuidelines.map((item, index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                openIndex === index ? "" : "collapsed"
              }`}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {item.title}
            </button>
          </h2>

          <div
            className={`accordion-collapse collapse ${
              openIndex === index ? "show" : ""
            }`}
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}


          </div>
        </div>
      </div>
    </section>
  );
};

export default Nricpornertabs;
