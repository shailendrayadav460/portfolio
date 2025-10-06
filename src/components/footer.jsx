"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 border-t-2 border-gray-300 py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Row 1: Contact + Quick Links */}
          <div className="grid grid-cols-2 gap-6 col-span-1 md:col-span-2">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-3">Get In Touch</h3>
              <div className="space-y-2">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shailendrayadaw2004@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-green-200 transition-colors"
                >
                  📧 shailendrayadaw2004@gmail.com
                </a>
                <a
                  href="tel:+919305815719"
                  className="block hover:text-blue-200 transition-colors"
                >
                  📱 +91 93058-15719
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sector+76,+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-purple-200 transition-colors"
                >
                  📍 Sector76, Noida
                </a>
              </div>
            </div>

            {/* Quick Links */}
            {/* Quick Links */}
<div className="flex flex-col items-end text-right md:items-start md:text-left">
  <h3 className="text-lg font-bold mb-3">Quick Links</h3>
  <div className="space-y-2">
    <Link
      href="/about"
      className="block hover:text-green-200 transition-colors"
    >
      About Me
    </Link>
    <Link
      href="/project"
      className="block hover:text-blue-200 transition-colors"
    >
      Projects
    </Link>
    <Link
      href="/contact"
      className="block hover:text-gray-300 transition-colors"
    >
      Contact
    </Link>
  </div>
</div>

          </div>

          {/* Row 2: Connect */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/shailendra-yadav-5b18aa222?utm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/shailendrayadav460"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-200 text-sm pt-6 border-t border-gray-300">
          <p>© 2025 Badal. Built with ❤️ using Next.js & TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
}
