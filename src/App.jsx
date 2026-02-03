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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/usm-group" element={<AboutUsmGroup />} />
        <Route path="/core-team" element={<Coreteam />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/digital-service" element={<DigitalService />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
