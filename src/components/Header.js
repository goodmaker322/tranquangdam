import { Link, useLocation } from "react-router-dom";
import {
    FaHome,
    FaUser,
    FaCode,
    FaEnvelope,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref cho các section
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
    <header className="bg-black text-white py-4 px-6 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Trần Quang Đam</h1>

        {/* Nút mở menu trên mobile */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu trên màn hình lớn */}
        <nav className="hidden lg:block">
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

      {/* Drop menu trên mobile */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black text-white shadow-md py-4">
          <ul className="flex flex-col space-y-4 text-lg text-center">
            <li>
              <Link
                to="/"
                className="flex items-center justify-center gap-2 hover:text-gray-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center justify-center gap-2 hover:text-gray-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser /> About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="flex items-center justify-center gap-2 hover:text-gray-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaCode /> Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 hover:text-gray-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaEnvelope /> Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
