"use client";

import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // ✅ Page load hote hi top pe scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://6855017f6a6ef0ed6630de24.mockapi.io/store/project");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const gradients = [
    "bg-gradient-to-br from-blue-400 to-cyan-500",
    "bg-gradient-to-br from-purple-400 to-pink-500",
    "bg-gradient-to-br from-green-400 to-emerald-500",
    "bg-gradient-to-br from-orange-400 to-red-500",
    "bg-gradient-to-br from-indigo-400 to-purple-500",
    "bg-gradient-to-br from-pink-400 to-rose-500"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <div className={`${gradients[index % gradients.length]} h-48 flex items-center justify-center`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
