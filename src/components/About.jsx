import React, { useRef } from "react";
import { School, Globe, LaptopIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  initial: { x: -70, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, type: "spring" },
  },
};

const childVariants2 = {
  initial: { x: 70, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, type: "spring" },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 bg-gradient-to-br from-black to-slate-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={
              isInView
                ? {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.4, type: "spring" },
                  }
                : ""
            }
            className="text-4xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
         
            <motion.div variants={childVariants}>
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="rounded-lg mb-4 w-48 h-48 object-cover mx-auto border-4 border-blue-500"
              />
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-3">Hi, I'm Shankar</h3>
                <p className="text-blue-100 leading-relaxed">
                  I’m a Full Stack Developer with a strong foundation in
                  software engineering. I enjoy building fast, modern,
                  user-focused web apps that solve real problems.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                variants={childVariants2}
                className="flex items-start space-x-4"
              >
                <div className="bg-white/10 p-3 rounded-lg hover:shadow-sm shadow-yellow-500">
                  <School className="text-yellow-400  " size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Education</h4>
                  <p className="text-gray-300">
                    Pursuing B.Tech in Computer Science and Engineering in
                    Specialization AI/ML at Aditya college of Engineering and
                    Technology , Surampalem. CGPA: 8.16/10.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={childVariants2}
                className="flex items-start space-x-4"
              >
                <div className="bg-white/10 p-3 rounded-lg hover:shadow-sm shadow-green-500">
                  <LaptopIcon className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Internship Experience
                  </h4>
                  <p className="text-gray-300">
                    Completed 3 internships: MERN stack at SmartBridge, Web Dev
                    at Infonix System, and Sentiment Analysis at APSSDC. Built
                    full-stack apps & ML projects.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={childVariants2}
                className="flex items-start space-x-4"
              >
                <div className="bg-white/10 p-3 rounded-lg hover:shadow-sm shadow-blue-500">
                  <Globe className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Projects & Skills
                  </h4>
                  <p className="text-gray-300">
                    Built projects like House Rental Platform, Digital Diner,
                    Portfolio Website, Task App, E-Commerce store and more.
                    Skilled in React, Node.js, Express, PostgreSQL, MongoDB, and
                    Socket.IO.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="mt-12 bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I started with a curiosity for how websites work, which evolved
              into a passion for full-stack development. Through continuous
              practice, internships, and real-world projects, I’ve grown into a
              developer who focuses on performance, UI/UX, and scalable backend
              systems. I’m driven by problem-solving, and I’m always eager to
              learn and build more.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.hr initial={{width:0 }} whileInView={{width:"90%" ,  transition:{duration:2}}} 
                 className="hidden md:flex w-[90%] m-auto h-[2px] text-blue-600 mt-20" />
    </motion.section>
  );
};

export default About;
