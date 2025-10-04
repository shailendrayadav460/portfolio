"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m23f7pk",     // <-- EmailJS Service ID
        "template_i4775c4",    // <-- EmailJS Template ID
        formData,              // Form data pass hoga
        "bwgzyfK3ODmI3v781"      // <-- EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Try again!");
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "shailendrayadaw2004@gmail.com",
      gradient: "from-blue-400 to-cyan-500",
      link: "mailto:shailendrayadaw2004@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9305815719",
      gradient: "from-purple-400 to-pink-500",
      link: "tel:+919305815719",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Sector-76, Noida",
      gradient: "from-green-400 to-emerald-500",
      link: "https://www.google.com/maps/search/?api=1&query=Sector+76,+Noida",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "Github",
      gradient: "from-gray-700 to-gray-900",
      url: "https://github.com/shailendrayadav460",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      gradient: "from-blue-500 to-blue-700",
      url: "https://linkedin.com/in/shailendra-yadav-5b18aa222?utm",
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      name: "Twitter",
      gradient: "from-sky-400 to-blue-500",
      url: "https://twitter.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 block"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white mb-4`}
              >
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600">{info.value}</p>
            </a>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Message
  </label>
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    rows="5"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
               focus:ring-2 focus:ring-purple-500 focus:border-transparent 
               outline-none transition resize-none 
               text-gray-800 placeholder-gray-400"
    placeholder="Tell me about your project..."
    required
  ></textarea>
</div>


                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Side Info */}
          <div className="space-y-8">
            {/* About Card */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Create Together</h3>
              <p className="text-purple-100 leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach
                out!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Available for freelance work</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Remote collaboration ready</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                    >
                      {social.icon}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl shadow-xl overflow-hidden h-64 border border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.925917520975!2d77.3910!3d28.5599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f7e6a82a8f%3A0x6d916a6c0b09c94a!2sSector%2076%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1696068931234!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
