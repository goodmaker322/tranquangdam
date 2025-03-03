import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl text-blue-600 hover:text-blue-700 transition" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-gray-900 hover:text-gray-700 transition" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl text-blue-500 hover:text-blue-600 transition" />
      </a>
    </div>
  );
};

export default SocialIcons;
