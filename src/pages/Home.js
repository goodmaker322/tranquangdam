import Button from "../components/Button";
import { motion } from "framer-motion";
import avatar from "../images/avatar.png";

const Home = () => {
  // Hàm mở file CV
  const handleViewCV = () => {
    window.open("/CV.pdf", "_blank"); // Mở CV trong tab mới
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 lg:px-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Tiêu đề Home */}
      <h1 className="text-5xl md:text-6xl font-bold mb-10 text-center">Home</h1>

      {/* Bố cục chính */}
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto space-y-10 md:space-y-0 md:space-x-16 w-full">
        
        {/* Hình ảnh có hiệu ứng */}
        <motion.div
          className="w-[80vw] md:w-[40vw] lg:w-[30vw] h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gray-700 rounded-lg flex items-center justify-center shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={avatar} alt="Random Image" className="object-cover w-full h-full rounded-lg" />
        </motion.div>

        {/* Phần About Me có hiệu ứng */}
        <motion.div
          className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl w-full md:w-[50vw] lg:w-[40vw]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">About me</h2>
          <p>I am a Software Engineering student at FPT University Hanoi with a strong passion for developing and deploying new applications.</p>
          <p className="mt-4">During my studies, I have gained valuable experience working as a Web Developer.</p>
          <p className="mt-4">I aspire to contribute to the creation of products that meet users' needs while continuously learning and acquiring new knowledge and skills to enhance both my personal and professional growth.</p>
        </motion.div>
      </div>

      {/* Nút View my CV */}
      <motion.div className="mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <button onClick={handleViewCV}>
          <Button text="View my CV" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
