import { motion } from "framer-motion";
import about from "../images/about.png";
const About = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 lg:px-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Tiêu đề */}
      <h1 className="text-5xl md:text-6xl font-bold mb-10 text-center">About</h1>

      {/* Bố cục chính */}
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto space-y-10 md:space-y-0 md:space-x-16 w-full">

        {/* Phần About Me có hiệu ứng */}
        <motion.div
          className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl w-full md:w-[55vw] lg:w-[50vw] text-lg md:text-xl leading-relaxed"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p>I am a Software Engineering student at FPT University Hanoi with a strong passion for developing and deploying new applications.</p>
          <p className="mt-4">During my studies, I have gained valuable experience working as a Web Developer.</p>
          <p className="mt-4">I aspire to contribute to the creation of products that meet users' needs while continuously learning and acquiring new knowledge and skills to enhance both my personal and professional growth.</p>
        </motion.div>

        {/* Hình ảnh có hiệu ứng */}
        <motion.div
            className="w-[60vw] md:w-[30vw] lg:w-[25vw] h-[60vw] md:h-[30vw] lg:h-[25vw] rounded-full overflow-hidden flex items-center justify-center shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
        <img src={about} alt="Random Image" className="object-cover w-full h-full" />
        </motion.div>

      </div>
      
    </motion.div>
  );
};

export default About;
