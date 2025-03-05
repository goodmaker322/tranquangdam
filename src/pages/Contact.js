import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  const [form, setForm] = useState({ name: "", user_email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.user_email || !form.message) {
      alert("Vui lòng nhập email và tin nhắn trước khi gửi!");
      setLoading(false);
      return;
    }

    try {
      const serviceID_admin = process.env.REACT_APP_EMAILJS_SERVICE_ADMIN;
      const serviceID_user = process.env.REACT_APP_EMAILJS_SERVICE_USER;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

      // 🕒 Lấy thời gian hiện tại
      const currentTime = new Date().toLocaleString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      console.log("📨 Gửi email Admin với to_email:", adminEmail);
      console.log("📨 Gửi email User với to_email:", form.user_email);
      console.log("🕒 Thời gian gửi:", currentTime);

      // Gửi email đến Admin
      await emailjs.send(
        serviceID_admin,
        "template_notices",
        {
          from_name: form.name || "Người dùng ẩn danh",
          user_email: form.user_email,
          message: form.message,
          to_email: adminEmail,
          reply_to: form.user_email,
          time: currentTime, // 🕒 Gửi thời gian cụ thể
        },
        publicKey
      );

      // Gửi email xác nhận đến người gửi
      await emailjs.send(
        serviceID_user,
        "template_confirm",
        {
          to_name: form.name || "Bạn",
          user_email: form.user_email,
          from_email: adminEmail,
          message: `
          Chào ${form.name || "bạn"},
          
          Cảm ơn bạn đã liên hệ! Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất.
          
          Trân trọng,
          Trần Quang Đam
        `,
          time: currentTime, // 🕒 Gửi thời gian cụ thể
        },
        publicKey
      );

      alert("Gửi thành công! Vui lòng kiểm tra email của bạn.");
    } catch (error) {
      console.error("Lỗi khi gửi email:", error);
      alert("Đã xảy ra lỗi khi gửi email, vui lòng thử lại sau.");
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
      <h1 className="text-5xl md:text-6xl font-bold mb-10 text-center">
        Contact{" "}
      </h1>{" "}
      <motion.div
        className="text-lg md:text-xl bg-gray-800 px-6 py-4 rounded-lg shadow-md w-full max-w-xl text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <p className="mb-2 flex items-center">
          <AiOutlinePhone className="mr-2 text-xl" />:{" "}
          <span className="font-semibold ml-1"> 0914805823 </span>{" "}
        </p>{" "}
        <p className="flex items-center">
          <AiOutlineMail className="mr-2 text-xl" />:{" "}
          <span className="font-semibold ml-1">
            tranquangdam332002 @gmail.com{" "}
          </span>{" "}
        </p>{" "}
      </motion.div>{" "}
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
          name="user_email"
          placeholder="Email"
          value={form.user_email}
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
        ></textarea>{" "}
        <button
          type="submit"
          className="bg-black text-white py-4 px-8 text-xl rounded-lg hover:bg-gray-800 transition shadow-md"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}{" "}
        </button>{" "}
      </motion.form>{" "}
    </motion.div>
  );
};

export default Contact;
