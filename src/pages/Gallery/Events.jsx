import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Nav } from "react-bootstrap";
import { MdOutlineCheck } from "react-icons/md";
import axios from "axios";
import SectionHeading from "../../components/Heading/SectionHeading";

const Events = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [eventsData, setEventsData] = useState({
    events: [],
    gallery: [],
  });
  const [loading, setLoading] = useState(false);

  // Lightbox states
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ================= API CALL =================
  const fetchEvents = async (id) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://120.138.10.167/testing/usminfrabackup/api/events/${id}`,
      );

      const apiData = res.data.data || res.data;

      setEventsData({
        events: apiData.events?.sort((a, b) => a.id - b.id) || [],
        gallery: apiData.gallery?.sort((a, b) => a.id - b.id) || [],
      });

      if (!activeTab && apiData.events?.length > 0) {
        setActiveTab(apiData.events[0].id);
      }
    } catch (error) {
      console.error("Error fetching events", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(1);
  }, []);

  useEffect(() => {
    if (activeTab) fetchEvents(activeTab);
  }, [activeTab]);

  // ================= LIGHTBOX FUNCTIONS =================

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === eventsData.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? eventsData.gallery.length - 1 : prev - 1,
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showModal) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setShowModal(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal, currentIndex, eventsData.gallery]);

  return (
    <section className="events-section">
      <div className="col-md-12 d-flex justify-content-center">
        <SectionHeading text1="Events" />
      </div>

      <Container>
        <Row>
          {/* LEFT SIDE TABS */}
          <Col lg={4} md={4} className="mb-4 events-category">
            <Nav
              variant="pills"
              activeKey={String(activeTab)}
              onSelect={(selectedKey) => setActiveTab(Number(selectedKey))}
              className="flex-column event-tabs"
            >
              {eventsData.events?.map((tab) => (
                <Nav.Item key={tab.id}>
                  <Nav.Link eventKey={String(tab.id)}>
                    {tab.event_title}
                    {activeTab === tab.id && <MdOutlineCheck />}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>

          {/* RIGHT SIDE IMAGES */}
          <Col lg={8} md={8}>
            {loading ? (
              <div className="text-center my-5">
                <Spinner animation="border" />
              </div>
            ) : (
              <Row>
                {eventsData.gallery?.map((item, index) => (
                  <Col lg={3} md={6} sm={12} key={index} className="mb-4">
                    <div
                      className="event-card"
                      onClick={() => openModal(index)}
                    >
                      <img
                        src={item.image || item.thumbnail}
                        alt="event"
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>

      {/* ================= FULLSCREEN LIGHTBOX ================= */}
      {showModal && (
        <div className="lightbox-overlay">
          {/* Close */}
          <button
            className="lightbox-close"
            onClick={() => setShowModal(false)}
          >
            ×
          </button>

          {/* Left Arrow */}
          <button className="lightbox-arrow left" onClick={prevImage}>
            ❮
          </button>

          {/* Image */}
          <img
            src={
              eventsData.gallery[currentIndex]?.image ||
              eventsData.gallery[currentIndex]?.thumbnail
            }
            alt="large"
            className="lightbox-image"
          />

          {/* Right Arrow */}
          <button className="lightbox-arrow right" onClick={nextImage}>
            ❯
          </button>

          {/* Footer */}
          <div className="lightbox-footer">
            <div className="lightbox-title">
              {eventsData.events?.find((e) => e.id === activeTab)?.event_title}
            </div>
            <div className="lightbox-counter">
              {currentIndex + 1} of {eventsData.gallery.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
