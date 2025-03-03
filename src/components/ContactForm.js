import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.form 
      initial={{ scale: 0.8, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      transition={{ duration: 1 }}
      className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-lg w-full"
    >
      <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
      <input type="text" placeholder="Your Name" className="w-full p-2 mt-4 rounded bg-gray-800 text-white"/>
      <input type="email" placeholder="Your Email" className="w-full p-2 mt-4 rounded bg-gray-800 text-white"/>
      <textarea placeholder="Your Message" className="w-full p-2 mt-4 rounded bg-gray-800 text-white"></textarea>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Send</button>
    </motion.form>
  );
};

export default ContactForm;
