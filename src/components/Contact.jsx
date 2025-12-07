import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "../animation";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const send = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("Message Sent Successfully ✔️");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send ❌"));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          className="text-4xl text-purple-700 font-bold text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          className="bg-[#E6E6FA] p-8 rounded-2xl shadow-lg border border-purple-200 max-w-xl mx-auto"
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
        >
          <form onSubmit={send} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handle}
              required
              className="w-full p-3 rounded-lg border border-purple-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handle}
              required
              className="w-full p-3 rounded-lg border border-purple-300"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handle}
              required
              className="w-full p-3 rounded-lg border border-purple-300"
              rows={5}
            ></textarea>

            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-green-600">{status}</p>
          )}

          <div className="text-center mt-6">
            <a
              href="https://www.instagram.com/anitha_vanamatla/"
              target="_blank"
              className="text-pink-600 hover:text-pink-700 flex justify-center items-center gap-2"
            >
              <FaInstagram size={24} /> Follow me on Instagram
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
