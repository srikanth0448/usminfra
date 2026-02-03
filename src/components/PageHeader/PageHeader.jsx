import { Container } from "react-bootstrap";
import "./PageHeader.css";

const PageHeader = ({ bannerImgUrl, bannerHeading }) => {
  return (
    <section className="page-header-area">
      <div className="banner-content">
        <Container fluid className="p-0">
          <div
            className="bg-img"
            style={{
              backgroundImage: `url(${bannerImgUrl})`,
            }}
          >
            <h2>{bannerHeading}</h2>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PageHeader;
