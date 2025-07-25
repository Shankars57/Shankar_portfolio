import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Experience = () => {
  const experiences = [
    {
      company: "APSSDC",
      role: "Machine Learning Intern (Sentiment Analysis)",
      duration: "May 1, 2024 – July 30, 2024",
      location: "Remote",
      description: [
        "Completed a 3-month internship focused on machine learning and NLP applications.",
        "Built a Sentiment Analysis web app to classify user opinions using pre-trained models and text preprocessing techniques.",
        "Explored libraries like scikit-learn, NLTK, and pandas for text classification and evaluation.",
        "Presented project findings and achieved high accuracy through real-world datasets.",
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
        "scikit-learn",
        "NLTK",
        "pandas",
      ],
    },
    {
      company: "SmartBridge",
      role: "MERN Stack Intern",
      duration: "May 19, 2025 – June 30, 2025",
      location: "Remote",
      description: [
        "Completed MERN stack training covering MongoDB, Express.js, React, and Node.js.",
        "Built a full-stack House Rental Platform with property filtering, detailed listings, and comment functionality.",
        "Practiced REST API integration, form validation, and authentication workflows.",
        "Collaborated on GitHub and deployed the app using modern CI/CD practices.",
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "PostgreSQL"],
    },
    {
      company: "Infonix System",
      role: "Web Development Intern",
      duration: "May 1, 2025 – June 1, 2025",
      location: "Remote",
      description: [
        "Created multiple responsive landing pages using HTML, CSS, and JavaScript.",
        "Strengthened frontend development skills with semantic markup and layout techniques.",
        "Practiced debugging, media queries, and cross-browser support fundamentals.",
        "Collaborated on improvements to UI/UX and optimized website loading times.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience & Internships
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A glimpse into the hands-on experiences I've gained through
            internships in full-stack development, web design, and machine
            learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-6 top-24 w-0.5 h-24 bg-gray-600"></div>
              )}
              <motion.div
                whileHover={{ scale: 1.015 }}
                className="group relative flex items-start space-x-6 overflow-hidden rounded-2xl transition-shadow duration-300"
              >
                {/* shimmer effect */}
                <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500 before:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.1),transparent)] before:animate-shimmer" />

                <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full items-center justify-center relative z-10">
                  <Briefcase className="text-white" size={20} />
                </div>

                <div className="flex-1 bg-zinc-900 rounded-2xl p-6 shadow-lg border border-gray-700 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-400">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h5 className="font-semibold text-white mb-2">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-red-100 text-red-800 px-3 py-1 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.hr initial={{width:0 }} whileInView={{width:"90%" ,  transition:{duration:2}}} 
      className="hidden md:flex w-[90%] m-auto h-[2px] bg-blue-600 mt-20" />
    </section>
  );
};

export default Experience;
