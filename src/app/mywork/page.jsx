import React from 'react';

export default function WorkPage() {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A modern web application designed to streamline team collaboration and boost productivity.",
      tags: ["Web Dev", "React", "2024"],
      color: "green"
    },
    {
      id: 2,
      title: "Design System",
      description: "Created a comprehensive design system to maintain consistency across multiple products.",
      tags: ["UI/UX", "Design", "2024"],
      color: "red"
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Built a cross-platform mobile application with a focus on user experience and performance.",
      tags: ["Mobile", "Development", "2023"],
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: "bg-green-50",
        border: "border-green-500",
        title: "text-green-800",
        tag: "bg-green-200 text-green-800"
      },
      red: {
        bg: "bg-red-50",
        border: "border-red-500",
        title: "text-red-800",
        tag: "bg-red-200 text-red-800"
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-500",
        title: "text-blue-800",
        tag: "bg-blue-200 text-blue-800"
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-green-600 via-red-600 to-blue-600 bg-clip-text text-transparent">
            My Work
          </h1>
          <p className="text-gray-600 text-lg">Recent Projects & Experience</p>
        </header>

        {/* Work Grid */}
        <div className="grid gap-6">
          {projects.map((project) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <div
                key={project.id}
                className={`${colorClasses.bg} border-l-4 ${colorClasses.border} rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <h2 className={`text-2xl font-bold mb-3 ${colorClasses.title}`}>
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`${colorClasses.tag} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}