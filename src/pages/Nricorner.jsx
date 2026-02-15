import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../components/PageHeader/PageHeader";
import "../Pages/Nricorner.css";
import TwoColumn from "../components/twocoloumn/TwoColumn";
import Nricpornertabs from "../components/Nricorner/Nricporner-tabs";
import "../components/Nricorner/Nricornertabs.css"

const Nricorner = () => {
  return (
    <>
      <PageHeader
        classname="bg-imges"
        bannerImgUrl="https://usminfra.com/assets/img/nri-corner/nri.jpg"
        bannerHeading="NRI Corner"
      />

    <Container>
    <TwoColumn
      image="https://usminfra.com/assets/img/nri-corner/nri-corner.png"
      className="abt-img"
      alt="High-Return Investment Plots Available Now - USM Infra"
      heading1="Happily Invest In Indian"
      heading2="Immovable Property With Trust"
      content="USM Infra has a bright and trustworthy solution for your valuable investments that you planned to put on the property in India. We are committed to delivering properties (in Hyderabad) with world-class quality and amenities. We promise and assist foreign customers who are interested to buy open plots/lands in Hyderabad. We are transparent in providing real estate services for NRI customers.
      Are you looking to buy open plots that offer tremendous future benefits like sandalwood profits, free membership to a luxurious resort, fruit plant benefits, EMI/bank loan availability, and so on? Then, contact us, and we get back to you in minutes!"

    />
    <Nricpornertabs/>
</Container>

    </>
  );
};

export default Nricorner;
