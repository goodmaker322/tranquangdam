import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.send(
        "service_nqtg7r2", // Service ID
        "template_iin837r", // Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "ClowoBuKSUg3s_xI9" // Public Key
      );

      console.log("Email sent successfully", response);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 lg:px-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-10 text-center">Contact</h1>

      <motion.div
        className="text-lg md:text-xl bg-gray-800 px-6 py-4 rounded-lg shadow-md w-full max-w-xl text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <p className="mb-2">Call Me: <span className="font-semibold">0914805823</span></p>
        <p>Email: <span className="font-semibold">tranquangdam332002@gmail.com</span></p>
      </motion.div>

      <motion.form
        onSubmit={sendEmail}
        className="flex flex-col space-y-6 mt-8 w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <input
          className="p-4 bg-gray-800 rounded-lg border border-gray-700 text-white text-lg"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="p-4 bg-gray-800 rounded-lg border border-gray-700 text-white text-lg"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="p-4 bg-gray-800 rounded-lg border border-gray-700 text-white text-lg"
          name="message"
          placeholder="Leave your message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white py-4 px-8 text-xl rounded-lg hover:bg-gray-800 transition shadow-md"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
