import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionHeading from "../../components/Heading/SectionHeading";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import "./AboutUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <section className="contactUs wood-pattern-bg py-5">
        <Container>
          <Row>
            {/* LEFT CONTENT */}
            <Col lg={6} sm={12}>
              <SectionHeading text1="Get In Touch" />

              <p>
                Your search for a secured property in Hyderabad ends here. Let
                us know your details. We contact you soon!
              </p>

              <hr />

              {/* Head Office */}
              <div className="contact-item mt-5 d-flex align-items-center">
                <a
                  href="https://www.google.com/maps/place/USM+INFRASTRUCTURES+PRIVATE+LIMITED/@17.4348032,78.4148282,15z"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon d-flex align-items-center justify-content-center">
                    <LuMapPin />
                  </span>
                </a>
                <div className="content">
                  <p>Head Office - Jubilee Hills</p>
                  <p>
                    Door No 8-2-293/82/A/270E, Road Number 10, Jubilee Hills,
                    Hyderabad, Telangana-500033
                  </p>
                </div>
                <div className="contimg">
                  <img
                    src="https://usminfra.com/assets/img/hofc.png"
                    alt="Head Office"
                  />
                </div>
              </div>

              {/* Tarnaka */}
              <div className="contact-item mt-4 d-flex align-items-center">
                <a
                  href="https://www.google.com/maps/place/USM+MyCity+Branch+Office"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon d-flex align-items-center justify-content-center">
                    <LuMapPin />
                  </span>
                </a>
                <div className="content">
                  <p>Branch Office - Tarnaka</p>
                  <p>
                    Venkat Plaza, 3rd Floor, 12-5-35/A/1&2, Street No. 6,
                    Tarnaka, Secunderabad, Telangana-500007
                  </p>
                </div>
                <div className="contimg">
                  <img
                    src="https://usminfra.com/assets/img/bofc.png"
                    alt="Branch Office"
                  />
                </div>
              </div>

              {/* Warangal */}
              <div className="contact-item mt-4 d-flex align-items-center">
                <a
                  href="https://www.google.com/maps/place/USM+Infra+Branch+Office+-+Warangal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon d-flex align-items-center justify-content-center">
                    <LuMapPin />
                  </span>
                </a>
                <div className="content">
                  <p>Branch Office - Warangal</p>
                  <p>
                    Kapil Kakatiya Tower, 3rd Floor, 1-8-552/B, Nakkala Gutta,
                    Hanamkonda, Telangana 506001
                  </p>
                </div>
                <div className="contimg">
                  <img
                    src="https://usminfra.com/assets/img/usm_warangal.png"
                    alt="Warangal Office"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="contact-item mt-4 d-flex align-items-center">
                <span className="icon d-flex align-items-center justify-content-center">
                  <MdOutlineEmail />
                </span>
                <div className="content">
                  <h5>Email</h5>
                  <p className="m-0">info@usminfra.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item mt-4 mb-2 d-flex align-items-center">
                <span className="icon d-flex align-items-center justify-content-center">
                  <IoCallOutline />
                </span>
                <div className="content">
                  <h5>Contact</h5>
                  <p className="m-0">
                    Collections and Information :<b> 905 924 2438</b>
                  </p>
                </div>
              </div>
            </Col>

            {/* RIGHT FORM */}
            <Col lg={6} sm={12} className="ps-lg-5">
              <Card className="contact-form mt-5 mt-lg-0">
                <Card.Body>
                  <h2 className="mb-4">Send A Message</h2>

                  <Form>
                    <Form.Floating className="mb-3">
                      <Form.Control type="text" placeholder="Name" required />
                      <label>Name*</label>
                    </Form.Floating>

                    <Form.Floating className="mb-3">
                      <Form.Control type="email" placeholder="Email" required />
                      <label>Email*</label>
                    </Form.Floating>

                    <Form.Floating className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        maxLength={10}
                        required
                      />
                      <label>Phone*</label>
                    </Form.Floating>

                    <Form.Floating className="mb-4">
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        maxLength={250}
                        style={{ height: "120px" }}
                        required
                      />
                      <label>Message*</label>
                    </Form.Floating>

                    <Form.Check
                      required
                      className="mb-3"
                      label={
                        <span>
                          By checking this box, I agree to receive SMS, RCS, and
                          WhatsApp messages from USM Infra. See our{" "}
                          <a
                            class="text-danger"
                            href="https://usminfra.com/privacypolicy"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a
                            class="text-danger"
                            href="https://usminfra.com/terms_and_conditions"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Terms of Service
                          </a>
                          .
                        </span>
                      }
                    />

                    <div className="d-grid">
                      <Button type="submit" className="btn-primary">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContactUs;
