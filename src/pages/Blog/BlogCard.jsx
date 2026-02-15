import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiCalendarLine } from "react-icons/ri";

const BlogCard = ({ image, date, title, description, link }) => {
  return (
    <Card className="blog-card h-100">
      <div className="blog-thumbnail">
        <div className="img-wrapper">
          <Card.Img variant="top" src={image} alt={title} loading="lazy" />
        </div>
      </div>

      <Card.Body>
        {/* Meta Info */}
        <ul className="blog-meta list-unstyled d-flex align-items-center">
          <li className="d-flex align-items-center">
            <RiCalendarLine className="meta-icon" />
            <span>{date}</span>
          </li>
        </ul>

        {/* Title */}
        <Card.Title as="h5" className="blog-title">
          {title}
        </Card.Title>

        {/* Description */}

        <div
          className="blog-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Read More */}
        <Link to={link} className="read-more">
          Continue Reading
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
