import { FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center px-4">
      {/* Tên hiển thị lớn */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Trần Quang Đam</h2>

      {/* Khu vực chứa icon */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 text-lg mb-4">
        {/* Icon Email */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tranquangdam332002@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-gray-400 transition"
        >
          <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-xs sm:text-sm truncate">tranquangdam332002@gmail.com</span>
        </a>

        {/* Icon Facebook */}
        <a 
          href="https://www.facebook.com/profile.php?id=100043998285398" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-gray-400 transition"
        >
          <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
          <span className="text-xs sm:text-sm">Facebook</span>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-xs sm:text-sm">2025 Copyright by Trần Quang Đam</p>
    </footer>
  );
};

export default Footer;
