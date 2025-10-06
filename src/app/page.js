"use client"; // Needed when using hooks in App Router

import { useState, useEffect } from "react";
import Image from "next/image";
import images from "../images/body.jpg";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter(); // ✅ router instance
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const skills = [
    { name: "React", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { name: "Next.js", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { name: "TailwindCSS", color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
    { name: "Node.js", color: "bg-green-100 text-green-700 border-green-200" },
    { name: "MongoDB", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
    { name: "GitHub", color: "bg-gray-100 text-gray-700 border-gray-200" },
    { name: "JavaScript", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
    
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack online store with payment integration and admin dashboard",
      tech: ["Next.js", "MongoDB", "Stripe"],
      gradient: "from-blue-400 to-cyan-400",
      emoji: "🛍️",
    },
    {
      title: "Task Management App",
      desc: "Real-time collaborative task manager with team features",
      tech: ["React", "Node.js", "Socket.io"],
      gradient: "from-purple-400 to-pink-400",
      emoji: "✅",
    },
    {
      title: "Portfolio CMS",
      desc: "Custom content management system for creatives",
      tech: ["Next.js", "TailwindCSS", "API"],
      gradient: "from-green-400 to-emerald-400",
      emoji: "📁",
    },
  ];

  const services = [
    { icon: "💻", title: "Web Development", desc: "Custom responsive websites", color: "bg-blue-50 border-blue-200" },
    { icon: "🎨", title: "UI/UX Design", desc: "Beautiful user interfaces", color: "bg-purple-50 border-purple-200" },
    { icon: "🚀", title: "Performance", desc: "Lightning-fast applications", color: "bg-pink-50 border-pink-200" },
    { icon: "📱", title: "Mobile First", desc: "Responsive on all devices", color: "bg-cyan-50 border-cyan-200" },
  ];
  // ✅ Navigation function
  const goToWorkPage = () => {
    router.push("/mywork"); // Navigate to WorkPage
  };
    const goToProjectPage = () => {
    router.push("/project"); // Navigate to WorkPage
  };
    const goToContactPage = () => {
    router.push("/contact"); // Navigate to WorkPage
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-5 sm:pt-0 lg:px-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: "2s" }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-purple-100">

            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-75"></div>
                <Image
                  src={images}
                  alt="Profile"
                  width={192}
                  height={192}
                  className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white object-cover shadow-xl"
                />
              </div>

              <div className="text-center md:text-left flex-1">
                <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                  Hi, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Badal</span>
                </h1>

                <div className="h-16 flex items-center justify-center md:justify-start">
                  <p className="text-2xl sm:text-3xl font-semibold text-gray-700">
                    {text}
                    <span className="text-purple-600 animate-pulse">|</span>
                  </p>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                  A passionate <span className="font-semibold text-pink-600">Full Stack Developer</span> who loves building modern web applications with
                  <span className="font-semibold text-blue-600"> React</span>,
                  <span className="font-semibold text-purple-600"> Next.js</span>, and
                  <span className="font-semibold text-cyan-600"> TailwindCSS</span>.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`${skill.color} px-4 py-3 rounded-xl font-semibold text-center border-2 hover:scale-105 transform transition-all duration-300 shadow-sm`}
                >
                  {skill.name}
                </div>
              ))}
            </div>

            {/* About Me */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border-2 border-blue-100">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">About Me</h2>
              <p className="text-gray-700 leading-relaxed">
                I enjoy solving real-world problems and creating engaging user experiences. My focus is on writing clean, efficient,
                and scalable code. When I&apos;m not coding, you&apos;ll find me exploring new tech trends or working on creative side projects.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={goToWorkPage}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                View My Work
              </button>
              <button className="px-8 py-4 bg-white text-gray-800 font-bold rounded-xl shadow-lg hover:shadow-xl border-2 border-purple-200 hover:border-purple-400 transform hover:scale-105 transition-all duration-300">
                <a
                  href="/about"
            
                >
                  See My Resume
                </a>

              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              What I Do
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`${service.color} rounded-2xl p-6 border-2 hover:scale-105 transform transition-all duration-300 text-center shadow-lg hover:shadow-xl`}
              >
                <div className="text-5xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> 

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-purple-200"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-7xl`}>
                  {project.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
            onClick={goToProjectPage}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "10+", label: "Major Projects", gradient: "from-blue-500 to-cyan-500" },
              { num: "20+", label: "Minner Projects", gradient: "from-purple-500 to-pink-500" },
              { num: "6+", label: "Month", gradient: "from-green-500 to-emerald-500" },
              { num: "100%", label: "Satisfaction", gradient: "from-orange-500 to-red-500" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-purple-200 transform hover:scale-105 transition-all duration-300"
              >
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.num}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-purple-200">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let&apos;s create something amazing together.
              I&apos;m always open to discussing new opportunities and collaborations.
            </p>
            <button onClick={goToContactPage}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
              Get In Touch 💬
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}



