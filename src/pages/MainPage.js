import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const MainPage = () => {
  const location = useLocation();
  
  // Tạo ref cho từng section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Điều hướng cuộn đến đúng section khi thay đổi URL
  useEffect(() => {
    const scrollToSection = () => {
      switch (location.pathname) {
        case "/about":
          aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "/skills":
          skillsRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "/contact":
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          homeRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };
    scrollToSection();
  }, [location]);

  return (
    <div className="bg-gray-900 text-white w-full">
      {/* Section Home */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center px-4 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Home />
        </motion.div>
      </section>

      {/* Section About */}
      <section ref={aboutRef} className="min-h-screen flex items-center justify-center px-4 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <About />
        </motion.div>
      </section>

      {/* Section Skills */}
      <section ref={skillsRef} className="min-h-screen flex items-center justify-center px-4 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Skills />
        </motion.div>
      </section>

      {/* Section Contact */}
      <section ref={contactRef} className="min-h-screen flex items-center justify-center px-4 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Contact />
        </motion.div>
      </section>
    </div>
  );
};

export default MainPage;
