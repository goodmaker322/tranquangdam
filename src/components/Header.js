import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";

const Header = () => {
  const location = useLocation();

  // Tạo ref để trỏ đến từng section trong MainPage
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Điều hướng cuộn chuột khi thay đổi URL
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
    <header className="bg-black text-white py-4 px-8 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Trần Quang Đam</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-gray-400 transition">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center gap-2 hover:text-gray-400 transition">
                <FaUser /> About
              </Link>
            </li>
            <li>
              <Link to="/skills" className="flex items-center gap-2 hover:text-gray-400 transition">
                <FaCode /> Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-2 hover:text-gray-400 transition">
                <FaEnvelope /> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
