"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Code,
} from "lucide-react";

export default function ResumeViewer() {
  const [resumeData] = useState({
    name: "SHAILENDRA YADAV",
    title: "Frontend Developer",
    email: "shailendrayadaw2004@gmail.com",
    phone: "+91-9305815719",
    location: "Sector 76, Noida, Uttar Pradesh, India",
    linkedin: "linkedin.com/in/shailendra-yadav",
    summary:
      "Recent Electronics and Communication Engineering graduate with hands-on experience in web development. Proficient in HTML5, CSS3, JavaScript, and C Programming. Demonstrated ability to build responsive web applications and solve complex problems. Seeking an entry-level Frontend Developer position to contribute technical skills and grow within a dynamic organization.",
    technicalSkills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "C Programming",
      "Responsive Web Design",
      "DOM Manipulation",
      "Git",
      "Problem Solving",
      "Analytical Thinking",
    ],
    projects: [
      {
        name: "Interactive Dynamic Web Application",
        tech: "JavaScript, HTML5, CSS3",
        points: [
          "Developed a dynamic web page with interactive user interface using vanilla JavaScript",
          "Implemented DOM manipulation and event handling for enhanced user experience",
          "Ensured cross-browser compatibility and responsive design principles",
        ],
      },
      {
        name: "Responsive Portfolio Website",
        tech: "HTML5, CSS3",
        points: [
          "Designed and developed a fully responsive website using HTML5 and CSS3",
          "Applied modern UI/UX principles for optimal user experience",
          "Implemented mobile-first approach ensuring compatibility across all devices",
        ],
      },
    ],
    education: [
      {
        degree:
          "Bachelor of Technology in Electronics and Communication Engineering",
        school: "Feroze Gandhi Institute of Engineering and Technology",
        location: "Raibareli, Uttar Pradesh",
        year: "2024",
      },
      {
        degree: "Intermediate (Class XII)",
        school: "Government Inter College",
        location: "Pratapgarh, Uttar Pradesh",
        year: "2020",
        board: "UP Board",
      },
      {
        degree: "High School (Class X)",
        school: "St Anthony Inter College",
        location: "Pratapgarh, Uttar Pradesh",
        year: "2018",
        board: "UP Board",
      },
    ],
    certifications: [
      "JavaScript for Beginners - Great Learning",
      "HTML Fundamentals - Great Learning",
      "CSS for Beginners - Great Learning",
    ],
    achievements: [
      "Scored 55.6% in TCS iON National Qualifier Test (NQT) - Cognitive Skills, showcasing strong problem-solving abilities and analytical thinking",
    ],
    languages: ["English", "Hindi"],
    interests: ["Cricket", "Chess", "Music"],
  });

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Download Button */}
        <div className="flex justify-end mb-6 print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        {/* Resume Container */}
        <div
          id="resume-content"
          className="bg-white shadow-2xl rounded-xl overflow-hidden"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-3 tracking-tight">
                {resumeData.name}
              </h1>
              <p className="text-2xl mb-6 font-light opacity-95">
                {resumeData.title}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={18} className="opacity-90" />
                  <span>{resumeData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="opacity-90" />
                  <span>{resumeData.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="opacity-90" />
                  <span>{resumeData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={18} className="opacity-90" />
                  <span>{resumeData.linkedin}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-10 py-8">
            {/* Professional Summary */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <Briefcase className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Professional Summary
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {resumeData.summary}
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <Code className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Technical Skills
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {resumeData.technicalSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-gray-200 text-gray-800 rounded-lg text-sm font-medium hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <Code className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
              </div>
              <div className="space-y-5">
                {resumeData.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-pink-400 pl-5 pb-4"
                  >
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {project.name}
                      </h3>
                      <p className="text-sm font-medium text-purple-600">
                        {project.tech}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {project.points.map((point, pointIdx) => (
                        <li
                          key={pointIdx}
                          className="flex items-start gap-2 text-gray-700 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-2 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="space-y-4">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="border-l-4 border-gray-400 pl-5">
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700 text-sm">
                      {edu.school}, {edu.location}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {edu.board ? `${edu.board} | ` : ""} {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Certifications
                </h2>
              </div>
              <ul className="space-y-2">
                {resumeData.certifications.map((cert, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-2 flex-shrink-0"></span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Achievements */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Achievements
                </h2>
              </div>
              <ul className="space-y-2">
                {resumeData.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Languages & Interests */}
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b-2 border-blue-400">
                  Languages
                </h2>
                <p className="text-gray-700 text-sm">
                  {resumeData.languages.join(", ")}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b-2 border-pink-400">
                  Interests
                </h2>
                <p className="text-gray-700 text-sm">
                  {resumeData.interests.join(", ")}
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Info Card */}
        
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          body * {
            visibility: hidden;
          }
          
          #resume-content,
          #resume-content * {
            visibility: visible;
          }
          
          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          @page {
            margin: 0.5in;
            size: A4 portrait;
          }
        }

        * {
          font-family: Arial, Helvetica, sans-serif;
        }
      `}</style>
    </div>
  );
}
