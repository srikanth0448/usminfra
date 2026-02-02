import { Card } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { HiMiniChevronRight } from "react-icons/hi2";
import "./VideoContent.css";

const VideoContent = ({ thumbNail, videoUrl, text, readMoreLink }) => {
  return (
    <Card className="video-content-div">
      <Card.Body>
        <div class="video-wrapper position-relative">
          <div class="video-overlay position-absolute d-flex align-items-center justify-content-center">
            <a
              href={videoUrl}
              class="popup-youtube d-flex align-items-center justify-content-center text-white"
            >
              <FaPlay />
            </a>
          </div>
          <div class="video-thubmnail">
            <img src={thumbNail} alt="" />
          </div>
        </div>
        <div class="video-content text-center">
          <h3>{text}</h3>
          <a href={readMoreLink} class="btn btn-light mainarrow2">
            Read More <HiMiniChevronRight />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default VideoContent;
