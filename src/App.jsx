import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AboutUsmGroup from "./pages/About/AboutUsmGroup";
import Coreteam from "./pages/About/Coreteam";
import Awards from "./pages/About/Awards";
import ContactUs from "./pages/About/ContactUs";
import DigitalService from "./pages/About/DigitalService";
import History from "./pages/sandalwood/History";
import Lifecycle from "./pages/sandalwood/lifecycle";
import Membership from "./pages/membership/Membership";
import ScrollToTop from "./components/BgPattern/Scrooltotop";
import Nricorner from "./Pages/Nricorner";
import PageLoader from "./components/PreLoader/PreLoader";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import Events from "./pages/Gallery/Events";
import Customers from "./pages/Gallery/Customers";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <Router>
      <PageLoader />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/usm-group" element={<AboutUsmGroup />} />
        <Route path="/core-team" element={<Coreteam />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/digital-service" element={<DigitalService />} />
        <Route path="/nri-corner" element={<Nricorner />} />
        <Route path="/History" element={<History />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
