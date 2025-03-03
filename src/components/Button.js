import { FaArrowRight } from "react-icons/fa";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105 duration-300"
    >
      {text} <FaArrowRight />
    </button>
  );
};

export default Button;
