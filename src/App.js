// App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import PageWrapper from "./components/PageWrapper";
import './App.css';
import AboutImg from './Assets/aboutpic2.jpg';
import ServiceImg from './Assets/Building2.jpg';
import ContactImg from './Assets/consult1.jpeg';
import ProductDetails from "./components/ProductDetails";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* Home has its own hero section already */}
        <Route path="/" element={<Home />} />

        {/* Dynamic hero for other pages */}
        <Route
          path="/about"
          element={
            <PageWrapper
              title="About Us"
              subtitle="Excellence, Integrity, Innovation"
              bgImage={AboutImg}
            >
              <About />
            </PageWrapper>
          }
        />

        <Route
          path="/services"
          element={
            <PageWrapper
              title="Our Services"
              subtitle="Delivering quality solutions for every need"
              bgImage={ServiceImg}
            >
              <Services />
            </PageWrapper>
          }
        />

        <Route
          path="/projects"
          element={
            <PageWrapper
              title="Our Projects"
              subtitle="Showcasing over 20 years of excellence"
              bgImage="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
            >
              <Projects />
            </PageWrapper>
          }
        />

        <Route
          path="/contact"
          element={
            <PageWrapper
              title="Contact Us"
              subtitle="We’d love to hear from you"
              bgImage={ContactImg}
            >
              <Contact />
            </PageWrapper>
          }
        />
        <Route path="/projects/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
