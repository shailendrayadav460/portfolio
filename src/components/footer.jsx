"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 border-t-2 border-gray-300 py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Get In Touch</h3>
            <div className="space-y-2">
              <p>📧 hello@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 San Francisco, CA</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block hover:text-green-200 transition-colors">
                About Me
              </Link>
              <Link href="/project" className="block hover:text-blue-200 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="block hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/your-username"
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
