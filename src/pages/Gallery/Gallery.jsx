import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Nav, Button } from "react-bootstrap";
import axios from "axios";
import SectionHeading from "../../components/Heading/SectionHeading";
import "./Gallery.css";

const galleryTitles = [
  { id: 1, gallery_title: "Serene Meadows", location: "Shadnagar" },
  { id: 2, gallery_title: "Silver Brooks", location: "Bibinagar Phase 2" },
  { id: 3, gallery_title: "Highway Heights", location: "Shamirpet" },
  { id: 4, gallery_title: "Go Ranch", location: "Aler" },
  { id: 5, gallery_title: "Grand Oaks", location: "Bibinagar Phase 1" },
  { id: 6, gallery_title: "Go Valley", location: "Salvapur" },
  { id: 7, gallery_title: "Rush Greens", location: "Near Khammam & Tiruvuru" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(1);

  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  // Lightbox
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ================= FETCH GALLERY =================
  const fetchGallery = async (projectId, pageNumber = 1, append = false) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://120.138.10.167/testing/usminfrabackup/api/projects/${projectId}?page=${pageNumber}`,
      );

      const apiData = res.data.data;
      const images = apiData.gallery || [];
      const pagination = apiData.pagination;

      setLastPage(pagination?.last_page || 1);

      if (append) {
        setGalleryData((prev) => [...prev, ...images]);
      } else {
        setGalleryData(images);
      }
    } catch (error) {
      console.error("Gallery Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial load & tab change
  useEffect(() => {
    setPage(1);
    fetchGallery(activeTab, 1, false);
  }, [activeTab]);

  // ================= LOAD MORE =================
  const handleLoadMore = () => {
    const nextPage = page + 1;
    fetchGallery(activeTab, nextPage, true);
    setPage(nextPage);
  };

  // ================= LOAD ALL =================
  const handleLoadAll = async () => {
    try {
      setLoading(true);

      let allImages = [...galleryData];

      for (let p = page + 1; p <= lastPage; p++) {
        const res = await axios.get(
          `https://120.138.10.167/testing/usminfrabackup/api/projects/${activeTab}?page=${p}`,
        );

        allImages = [...allImages, ...(res.data.data.gallery || [])];
      }

      setGalleryData(allImages);
      setPage(lastPage);
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
    setCurrentIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  return (
    <section className="events-section">
      <div className="col-md-12 d-flex justify-content-center">
        <SectionHeading text1="Gallery" />
      </div>

      <Container>
        {/* TABS */}
        <Nav
          variant="pills"
          activeKey={String(activeTab)}
          onSelect={(key) => setActiveTab(Number(key))}
          className="gallery-tabs mb-4"
        >
          {galleryTitles.map((tab) => (
            <Nav.Item key={tab.id}>
              <Nav.Link eventKey={String(tab.id)}>
                {tab.gallery_title}
                <small className="d-block text-muted">- {tab.location}</small>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* IMAGES */}
        {loading && page === 1 ? (
          <div className="text-center my-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <>
            <Row>
              {galleryData.map((item, index) => (
                <Col lg={2} md={4} sm={6} key={index} className="mb-2 p-1">
                  <div
                    className="gallery-card"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={item.thumbnail || item.image}
                      alt={item.alt || "gallery"}
                      className="img-fluid"
                    />
                  </div>
                </Col>
              ))}
            </Row>

            {/* BUTTONS */}
            <div className="text-center mt-4">
              {page < lastPage ? (
                <>
                  <Button
                    variant="warning"
                    className="me-3"
                    onClick={handleLoadMore}
                    disabled={loading}
                  >
                    Load More
                  </Button>

                  <Button
                    variant="dark"
                    onClick={handleLoadAll}
                    disabled={loading}
                  >
                    Load All
                  </Button>
                </>
              ) : (
                galleryData.length > 0 && (
                  <p className="mt-3 text-muted">— End of Gallery —</p>
                )
              )}
            </div>
          </>
        )}
      </Container>

      {/* LIGHTBOX */}
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

          <img
            src={galleryData[currentIndex]?.image}
            className="lightbox-image"
            alt=""
          />

          <button className="lightbox-arrow right" onClick={nextImage}>
            ❯
          </button>

          <div className="lightbox-footer">
            {currentIndex + 1} of {galleryData.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
