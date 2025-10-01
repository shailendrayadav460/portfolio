"use client"; // required in Next.js App Router for hooks

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navItems = [
    { id: "", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsOpen(false);
  };

  return (
    <div className=" bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 shadow-md">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-3xl font-bold text-white"
              >
                MyBrand
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/${item.id}`}
                      onClick={() => handleLinkClick(item.id)}
                      className={`text-lg font-semibold transition-all duration-300 relative pb-1 ${
                        activeLink === item.id
                          ? "text-yellow-300"
                          : "text-white hover:text-yellow-200"
                      }`}
                      scroll={false} // prevents full page reload, smooth anchor scroll
                    >
                      {item.label}
                      {activeLink === item.id && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    onClick={() => handleLinkClick(item.id)}
                    className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                      activeLink === item.id
                        ? "text-yellow-300 bg-white/10"
                        : "text-white hover:bg-white/10 hover:text-yellow-200"
                    }`}
                    scroll={false}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
