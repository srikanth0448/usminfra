import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionHeading from "../../components/Heading/SectionHeading";
import "./AboutUs.css";

const directors = [
  {
    name: "Nivas K",
    role: "Managing Director",
    image: "https://usminfra.com/assets/img/core-team/CoreTeam.jpg",
  },
  {
    name: "Madan K",
    role: "Chairman",
    image: "https://usminfra.com/assets/img/core-team/madan.jpg",
  },
];

const managementTeam = [
  {
    name: "Venu Gopal",
    role: "Chief General Manager",
    image: "https://usminfra.com/assets/img/core-team/venugopal.jpg",
  },
  {
    name: "Kona Mahendra",
    role: "General Manager Sales",
    image:
      "https://usminfra.com/assets/img/core-team/Kona Mahendra-General Manager-Sales.jpg",
  },
  {
    name: "Anil Thummala",
    role: "Assistant General Manager - Accounts & Finance",
    image: "https://usminfra.com/assets/img/core-team/Anilimg.jpg",
  },
  {
    name: "Shashikanth P",
    role: "Assistant General Manager - Field Operations",
    image: "https://usminfra.com/assets/img/core-team/sasi.jpg",
  },
  {
    name: "Venkateshwarlu Palla",
    role: "Assistant General Manager - Projects",
    image: "https://usminfra.com/assets/img/core-team/Venkateswarulu.jpg",
  },
  {
    name: "Mantrala Sridhar",
    role: "Assistant General Manager - Projects",
    image: "https://usminfra.com/assets/img/core-team/Mantrala_Sridhar.jpg",
  },
  {
    name: "P. Dhanunjaya Reddy",
    role: "Sr. Software Team Manager",
    image: "https://usminfra.com/assets/img/core-team/dhanunjay.jpg",
  },
  {
    name: "CH. Praveen Kumar",
    role: "Sr. Manager Sales",
    image: "https://usminfra.com/assets/img/core-team/praveenKumar.jpg",
  },
  {
    name: "G. Naresh Rao",
    role: "Sr. Procurement Manager",
    image: "https://usminfra.com/assets/img/core-team/Naresh.jpg",
  },
  {
    name: "G. Samrat Rao",
    role: "Sr. Land Procurement Manager",
    image: "https://usminfra.com/assets/img/core-team/Samrat.jpg",
  },
  {
    name: "Avinash",
    role: "Sr. Legal Officer",
    image: "https://usminfra.com/assets/img/core-team/legalavinash.png",
  },
  {
    name: "S. Ramesh Babu",
    role: "Sr. HR Manager",
    image: "https://usminfra.com/assets/img/core-team/Ramesh-Babu.jpg",
  },
];

const Coreteam = () => {
  return (
    <div className="core-team-page">
      <section className="">
        <Container className="px-4">
          <Row>
            <Col md={12} className="mt-4">
              <SectionHeading text1="Core" text2="Team" />
              <p>
                USM Infra is a group of young and dynamic people. Our executive
                team has 45 years of proven experience in real estate,
                engineering, and design aspects. They create strategic
                approaches that aids in achieving the groups' vision. We have a
                core team with diverse skillsets, capabilities, and qualities to
                well-organize and fuel growth across our plotting and
                construction business divisions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="mt-3 gap-md-1 justify-content-center m-0">
          <h4 className="text-center mb-4 sub-heading">Directors</h4>

          {directors.map((director, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={8} className="mb-5 gx-5">
              <Card className="team-card1 h-100">
                <Card.Body>
                  <div className="team-thubmnail">
                    <img src={director.image} alt={director.name} />
                  </div>
                  <div className="team-content">
                    <h3>{director.name}</h3>
                    <p>{director.role}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <Row className="mt-5 gap-md-1 justify-content-center">
          <h4 className="text-center mb-4 sub-heading">Management Team</h4>

          {managementTeam.map((member, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={8} className="mb-5 gx-5">
              <Card className="team-card2 h-100">
                <Card.Body>
                  <div className="team-thubmnail">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-content">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Coreteam;
