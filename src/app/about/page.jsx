import Image from "next/image";
import images from "../../images/body.jpg"

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-10 border border-indigo-100">
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src={images.src}  // ✅ put body.jpg inside /public folder
            alt="Profile"
            width={180}
            height={180}
            className="rounded-full border-4 border-indigo-400 shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-indigo-600">
              Hi, Badal
            </h1>
            <p className="mt-3 text-gray-600 text-lg leading-relaxed">
              A passionate{" "}
              <span className="text-pink-500 font-semibold">
                Full Stack Developer
              </span>{" "}
              who loves building modern web applications with{" "}
              <span className="text-indigo-500 font-semibold">React</span>,{" "}
              <span className="text-blue-500 font-semibold">Next.js</span>, and{" "}
              <span className="text-teal-500 font-semibold">TailwindCSS</span>.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "React",
            "Next.js",
            "TailwindCSS",
            "Node.js",
            "MongoDB",
            "GitHub",
            "JavaScript",
            "TypeScript",
          ].map((skill, i) => (
            <div
              key={i}
              className="p-3 bg-gradient-to-r from-indigo-100 to-pink-100 text-center rounded-xl font-semibold text-gray-700 shadow-sm hover:scale-105 hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* About Text */}
        <div className="mt-10 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">About Me</h2>
          <p>
            I enjoy solving real-world problems and creating engaging user
            experiences. My focus is on writing clean, efficient, and scalable
            code. When I’m not coding, you’ll find me exploring new tech trends
            or working on creative side projects.
          </p>
        </div>
      </div>
    </section>
  );
}
