import { useState } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import avatar from "../images/avatar.png";

const Home = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  // Hàm mở file CV
  const handleViewCV = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/CV.pdf";
    window.open(pdfUrl, "_blank");
  };
  


  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 lg:px-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-10 text-center">
        {isEnglish ? "Home" : "Trang chính"}
      </h1>

      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto space-y-10 md:space-y-0 md:space-x-16 w-full">
        
        {/* Hình ảnh có hiệu ứng, giữ nguyên tỉ lệ không bị méo */}
        <motion.div
          className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={avatar} alt="Avatar" className="w-full h-full object-contain rounded-lg" />
        </motion.div>

        {/* Phần About Me */}
        <motion.div
          className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl w-full md:w-[50vw] lg:w-[40vw]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {isEnglish ? "About me" : "Một chút về bản thân"}
          </h2>
          
          {/* Nội dung thay đổi theo ngôn ngữ */}
          {isEnglish ? (
            <>
              <p>I am a Software Engineering student at FPT University Hanoi with a strong passion for developing and deploying new applications.</p>
              <p className="mt-4">During my studies, I have gained valuable experience working as a Web Developer.</p>
              <p className="mt-4">I aspire to contribute to the creation of products that meet users' needs while continuously learning and acquiring new knowledge and skills to enhance both my personal and professional growth.</p>
            </>
          ) : (
            <>
              <p>Tôi là sinh viên ngành Kỹ thuật Phần mềm tại Đại học FPT Hà Nội với niềm đam mê mãnh liệt trong việc phát triển và triển khai các ứng dụng mới.</p>
              <p className="mt-4">Trong quá trình học tập, tôi đã tích lũy được nhiều kinh nghiệm quý giá khi làm việc với vai trò Web Developer.</p>
              <p className="mt-4">Tôi mong muốn đóng góp vào việc tạo ra những sản phẩm đáp ứng nhu cầu của người dùng, đồng thời không ngừng học hỏi và trau dồi kiến thức, kỹ năng để phát triển bản thân.</p>
            </>
          )}

          {/* Nút chuyển đổi ngôn ngữ */}
          <button
            onClick={toggleLanguage}
            className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {isEnglish ? "Switch to VietNamese" : "Chuyển sang Tiếng Anh"}
          </button>
        </motion.div>
      </div>

      {/* Nút View my CV */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <button onClick={handleViewCV}>
        <Button text={isEnglish ? "View my CV" : "Xem CV của tôi"} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
