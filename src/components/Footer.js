import { FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      {/* Tên hiển thị lớn */}
      <h2 className="text-2xl font-semibold mb-4">Trần Quang Đam</h2>

      {/* Khu vực chứa icon */}
      <div className="flex justify-center space-x-20 text-lg mb-4">
        {/* Icon Email */}
        <a href="mailto:tranquangdam332002@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-gray-400 transition">
          <FaEnvelope className="w-6 h-6" />
          <span>Email</span>
        </a>

        {/* Icon Facebook */}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-gray-400 transition">
          <FaFacebook className="w-6 h-6 text-blue-500" />
          <span>Facebook</span>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-sm">2025 Copyright by Trần Quang Đam</p>
    </footer>
  );
};

export default Footer;
