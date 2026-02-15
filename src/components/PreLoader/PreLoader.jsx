import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Preloader.css";

const PageLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second

    return () => clearTimeout(timer);
  }, [location.pathname]); // 👈 runs on every route change

  if (!loading) return null;

  return (
    <div id="preloader" className="wood-pattern-bg">
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
