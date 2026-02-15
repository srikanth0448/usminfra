import React from "react";
import SectionHeading from "../Heading/SectionHeading";

const TwoColumn = ({
  image,
  alt,
  className = "",
  content,
  reverse = false,
  heading1,
  heading2,
  heading3,
  whiteColor,
}) => {
  return (
    <div className="row g-5 justify-content-evenly align-items-stretch">
      {/* Image Column */}
      <div
        className={`col-lg-6 col-12 col-md-5 d-flex ${
          reverse ? "order-lg-2" : "order-lg-1"
        } order-2`}
      >
        <div className={`image-wrapper w-100 ${className}`}>
          <img src={image} alt={alt} />
        </div>
      </div>

      {/* Content Column */}
      <div
        className={`col-lg-6 col-12 col-md-5 d-flex ${
          reverse ? "order-lg-1" : "order-lg-2"
        } order-1`}
      >
        <div className="content-wrapper w-100">
          <SectionHeading
            text1={heading1}
            text2={heading2}
            text3={heading3}
            whiteColor={whiteColor}
          />
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumn;
