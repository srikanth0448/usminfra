import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import SectionHeading from "../../components/Heading/SectionHeading";

const Customers = () => {
  const [customersData, setCustomersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Lightbox
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  // ================= FETCH DATA =================
  const fetchCustomers = async (pageNumber = 1, append = false) => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://120.138.10.167/testing/usminfrabackup/api/happy-customers?page=${pageNumber}`,
      );

      const data = response?.data?.data?.customers || [];
      const pagination = response?.data?.data?.pagination;

      setLastPage(pagination?.last_page || 1);
      setHasMore(pagination?.has_more);

      if (append) {
        setCustomersData((prev) => [...prev, ...data]);
      } else {
        setCustomersData(data);
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    fetchCustomers(nextPage, true);
    setPage(nextPage);
  };

  const handleLoadAll = async () => {
    try {
      setLoading(true);
      let allCustomers = [...customersData];

      for (let p = page + 1; p <= lastPage; p++) {
        const response = await axios.get(
          `https://120.138.10.167/testing/usminfrabackup/api/happy-customers?page=${p}`,
        );

        allCustomers = [
          ...allCustomers,
          ...(response?.data?.data?.customers || []),
        ];
      }

      setCustomersData(allCustomers);
      setHasMore(false);
    } catch (error) {
      console.error("Load All Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ================= LIGHTBOX =================

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const nextImage = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === customersData.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? customersData.length - 1 : prev - 1,
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
  }, [showModal, currentIndex, customersData]);

  return (
    <>
      {/* Overlay Loader */}
      {loading && (
        <div className="overlay-loader">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      <Container className="py-5">
        <div className="col-md-12 mt-3">
          <SectionHeading text1="Our Happy" text2="Customers" />
        </div>

        <Row>
          {customersData.map((customer, index) => (
            <Col lg={2} md={4} className="mb-2 p-1" key={customer.id || index}>
              <img
                src={customer.image}
                alt={customer.name}
                className="img-fluid rounded customer-img"
                onClick={() => openModal(index)}
              />
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          {hasMore ? (
            <>
              <Button
                variant="warning"
                className="me-3"
                onClick={handleLoadMore}
                disabled={loading}
              >
                Load More
              </Button>

              <Button variant="dark" onClick={handleLoadAll} disabled={loading}>
                Load All
              </Button>
            </>
          ) : (
            <p className="end-message mt-3">— End of Results —</p>
          )}
        </div>
      </Container>

      {/* ================= FULLSCREEN LIGHTBOX ================= */}
      {showModal && (
        <div className="lightbox-overlay">
          <button
            className="lightbox-close"
            onClick={() => setShowModal(false)}
          >
            ×
          </button>

          <button className="lightbox-arrow left" onClick={prevImage}>
            ❮
          </button>

          <div className={`lightbox-slide ${direction}`}>
            <img
              key={currentIndex}
              src={customersData[currentIndex]?.image}
              alt="customer"
              className="lightbox-image"
            />
          </div>

          <button className="lightbox-arrow right" onClick={nextImage}>
            ❯
          </button>

          <div className="lightbox-footer">
            <div className="lightbox-counter">
              {currentIndex + 1} of {customersData.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Customers;
