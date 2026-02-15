import "./Heading.css";

const SectionHeading = ({ text1, text2, text3, whiteColor = false }) => {
  return (
    <h2 className={`section-header ${whiteColor ? "text-white" : ""}`}>
      <span>{text1}</span>  {text2 && <>{text2}</>}{" "}
      {text3 && <span>{text3}</span>}
    </h2>
  );
};

export default SectionHeading;
