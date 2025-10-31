import React from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "LearnHub",
      description:
        "LearnHub is an all-in-one collaborative learning platform where students can connect, learn, and grow together. It features curated YouTube playlists, real-time chat rooms, an AI-powered mentor, rich study materials, cheat sheets, and resume templates — all built to enhance productivity and community learning.",
      techStack: [
        "React",
        "TailwindCSS",
        "Nodejs",
        "ExpressJS",
        "MongoDB",
        "Youtube v3 API",
        "Socket.io",
      ],
      githubUrl: "https://github.com/Shankars57/LearnHub",
      liveUrl: "https://learn-hub-rho.vercel.app",
      category: "Fullstack",
      year: "2025",
      status: true,
    },
    {
      title: "Password Vault",
      description:
        "Password Vault is a secure web application that lets users create, store, manage, and access their passwords safely. It uses encryption to protect user data and provides an easy-to-use interface for organizing login details in one place.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/Shankars57/PasswordsVault",
      liveUrl: "https://passwords-vault-7.vercel.app/",
      category: "Full Stack",
      year: "2025",
      status: true,
    },
    {
      title: "Ping UP",
      description:
        "PingUp is a social media app where people can connect, share updates, and engage with friends in real time. It’s designed to be simple, interactive, and fun, making it easy for users to express themselves and stay connected.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/Shankars57/Connect_Social_Media",
      liveUrl: "https://pingup-gilt.vercel.app/",
      category: "Full Stack",
      year: "2025",
      status: true,
    },
    {
      title: "Digital Diner",
      description:
        "A full-stack restaurant ordering system with customer and admin panels, featuring order history, dynamic menu, and PostgreSQL storage.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
      githubUrl: "https://github.com/Shankars57/Digital_Diner",
      liveUrl: "https://digitial-diner.netlify.app/",
      category: "Full Stack",
      year: "2025",
      status: true,
    },
    {
      title: "AI-Based Blog Platform",
      description:
        "A modern blog application powered by AI-assisted content creation, featuring an admin panel for publishing, editing, and managing posts with real-time autosave.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "GeminiAI API"],
      githubUrl: "https://github.com/Shankars57/AI_BLOG_APP",
      category: "Full Stack",
      year: "2025",
      status: false,
    },
    {
      title: "House Rental Platform",
      description:
        "A property listing platform with detailed house pages, comment system, dynamic filters, and backend CRUD operations.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/Shankars57/House_Rental_Project",
      liveUrl: "https://house-rent-lac-delta.vercel.app/",
      category: "Full Stack",
      year: "2025",
      status: true,
    },
    {
      title: "Song Player",
      description:
        "A responsive and interactive web-based music player with playlist support, playback control, and a sleek UI.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Shankars57/Luna-s_MusicPlayer",
      liveUrl: "https://mellifluous-cobbler-860aa2.netlify.app/",
      category: "Frontend",
      year: "2024",
      status: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white relative">
      <style>{`
        @keyframes shimmer-diagonal {
          0% {
            transform: translate(-100%, -100%) rotate(45deg);
            opacity: 0;
          }
          30% {
            opacity: 0.3;
          }
          100% {
            transform: translate(100%, 100%) rotate(45deg);
            opacity: 0;
          }
        }

        .shimmer-layer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            rgba(255, 255, 255, 0) 100%
          );
           animation: shimmer-diagonal 2s infinite;
          z-index: 0;
          pointer-events: none;
        }
      `}</style>

      <div className="container md:w-[80%] mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills
            and passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="shimmer-layer absolute inset-0" />

              <div className="relative z-10 bg-gradient-to-br from-blue-600 to-purple-600 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.year}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
              </div>

              <div className="relative z-10 p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-100 px-3 py-1 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {project.status ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <p className="text-red-400 text-md">Not Deployed yet :(</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Shankars57"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "90%", transition: { duration: 2 } }}
            className="hidden md:flex w-[90%] m-auto h-[2px] text-red-600 mt-20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
