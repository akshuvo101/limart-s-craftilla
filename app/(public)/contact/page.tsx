"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    const text = `
📩 New Inquiry

👤 Name: ${form.name}
📧 Email: ${form.email}

📝 Message:
${form.message}
`;

    window.open(
      `https://wa.me/88017XXXXXXXX?text=${encodeURIComponent(text)}`
    );
  };

  return (
    <div className="bg-pink-50 min-h-screen py-12">

      <div className="max-w-6xl mx-auto px-4 space-y-12">

        {/* HEADER */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact Us 💌
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have questions or custom order requests? We’d love to hear from you!
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT - CONTACT INFO */}
          <div className="bg-white p-6 rounded-2xl shadow space-y-6">

            <h2 className="text-xl font-semibold text-gray-800">
              Get in Touch
            </h2>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="text-pink-500" />
              <span className="text-gray-700">+88017XXXXXXXX</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="text-pink-500" />
              <span className="text-gray-700">your@email.com</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin className="text-pink-500" />
              <span className="text-gray-700">
                Dhaka, Bangladesh
              </span>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/88017XXXXXXXX"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition mt-4"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

          </div>

          {/* RIGHT - FORM */}
          <div className="bg-white p-6 rounded-2xl shadow space-y-5">

            <h2 className="text-xl font-semibold text-gray-800">
              Send a Message
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition font-medium"
            >
              Send Message
            </button>

          </div>

        </div>

        {/* GOOGLE MAP */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <iframe
            src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[300px] rounded-xl"
            loading="lazy"
          />
        </div>

      </div>

    </div>
  );
}