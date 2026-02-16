import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Preloader.css";

const PageLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // When route changes, show loader immediately
    setLoading(true);

    // Delay hiding the loader to ensure page is ready
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]); // 👈 runs on every route change

  return (
    <div
      id="preloader"
      className={loading ? "visible" : "hidden"}
      style={{
        display: loading ? "flex" : "none",
      }}
    >
      <div id="status">
        <img
          src="https://usminfra.com/assets/img/usm-infra-sandalwood-farm-plots-logo.svg"
          alt="best place to buy open plots in hyderabad"
          className="preloader-logo"
        />
      </div>
    </div>
  );
};

export default PageLoader;
