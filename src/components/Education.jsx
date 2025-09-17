import React from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  BrainCircuit,
  Globe,
  Flame,
  Apple,
  Webcam,
} from "lucide-react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in CSE (AI & ML)",
      institution: "Aditya College of Engineering and Technology",
      location: "Surampalem, India",
      duration: "Jun 2022 – Present",
      gpa: "8.16 CGPA / 74.1% (still ongoing)",
      status: "Ongoing",
      highlights: [
        "Specialized in Artificial Intelligence and Machine Learning.",
        "Built 5+ major projects including a sentiment analysis model with 85% accuracy.",
        "Active participant in AI and Full-Stack hackathons and seminars.",
        "Strong foundation in Data Structures, DBMS, and Web Development.",
      ],
    },
    {
      degree: "Intermediate (MPC Stream)",
      institution: "Pragati Vidyala Junior College",
      location: "Samalkota, India",
      duration: "Jun 2020 – May 2022",
      gpa: "87.3%",
      status: "Completed",
      highlights: [
        "Specialized in Mathematics, Physics, and Chemistry.",
        "Consistently ranked among top 10% in board exams.",
        "Participated in inter-college coding and math competitions.",
      ],
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      institution: "Lutheran E.M. School",
      location: "Peddapuram, India",
      duration: "Jun 2019 – May 2020",
      gpa: "76%",
      status: "Completed",
      highlights: [
        "Built strong academic foundation in mathematics and problem-solving.",
        "Completed coursework with distinction in Science and Computer subjects.",
      ],
    },
  ];

  const certifications = [
    {
      title: "NLP with Python",
      issuer: "APSSDC",
      date: "2024",
      icon: <BrainCircuit size={24} />,
    },
    {
      title: "LeetCode 50days Badge",
      issuer: "LeetCode",
      date: "12-sept-2025",
      icon: <SiLeetcode />,
    },
    {
      title: "HTML/CSS/JavaScript Bootcamp",
      issuer: "Udemy",
      date: "2023",
      icon: <Globe />,
    },
    {
      title: "Java Programming Masterclass",
      issuer: "Udemy",
      date: "2024",
      icon: <Flame />,
    },
    {
      title: "Sentimental Analysis Internship - NLP",
      issuer: "APSSDC",
      date: 2024,
      icon: <Apple />,
    },
    {
      title: "Web Development Internship ",
      issuer: "Infonix systems",
      date: 2025,
      icon: <Calendar />,
    },
    {
      title: "MERN Stack Internship ",
      issuer: "Smart Bridge ",
      date: 2025,
      icon: <Webcam />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-black text-white relative">
      {/* SHIMMER CSS */}
      <style>
        {`
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

          .shimmer-box::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              45deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.07) 25%,
              rgba(255, 255, 255, 0.15) 50%,
              rgba(255, 255, 255, 0.07) 75%,
              rgba(255, 255, 255, 0) 100%
            );
            transform: translate(-100%, -100%) rotate(45deg);
            pointer-events: none;
            z-index: 0;
          }

          .group:hover .shimmer-box::before {
            animation: shimmer-diagonal 1.2s ease-in-out forwards;
          }
        `}
      </style>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center text-white">
              <BookOpen className="mr-3 text-blue-400" size={28} />
              Academic Education
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="relative mb-8 last:mb-0 group overflow-hidden"
              >
                <div className="shimmer-box absolute inset-0" />
                <div className="flex items-start space-x-6 relative z-10">
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full items-center justify-center">
                    <GraduationCap className="text-white" size={20} />
                  </div>

                  <div className="flex-1 bg-slate-900 rounded-2xl p-6 border border-slate-700 relative">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white">
                          {edu.degree}
                        </h4>
                        <h5 className="text-lg font-semibold text-blue-400 mb-2">
                          {edu.institution}
                        </h5>
                        <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4 text-sm">
                          <div className="flex items-center text-gray-300">
                            <Calendar size={16} className="mr-1" />
                            {edu.duration} ({edu.status})
                          </div>
                          <div className="flex items-center text-gray-300">
                            <MapPin size={16} className="mr-1" />
                            {edu.location}
                          </div>
                          <div className="flex items-center text-blue-400 font-semibold">
                            <Award size={16} className="mr-1" />
                            GPA: {edu.gpa}
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="mr-3 text-blue-500" size={28} />
              Certifications & Achievements
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden"
                >
                  <div className="shimmer-box absolute inset-0" />
                  <div className="bg-slate-800 hover:bg-slate-700 text-white rounded-xl p-6 border border-blue-800 relative z-10">
                    <div className="text-3xl mb-3 text-blue-400">
                      {cert.icon}
                    </div>
                    <h4 className="font-semibold mb-2">{cert.title}</h4>
                    <p className="text-gray-300 mb-2">{cert.issuer}</p>
                    <div className="flex items-center text-blue-400 text-sm font-medium">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "90%", transition: { duration: 2 } }}
        className="hidden md:flex w-[90%] m-auto h-[2px] text-blue-800 mt-20"
      />
    </section>
  );
};

export default Education;
