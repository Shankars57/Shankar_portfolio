import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import bg from "/bg.gif";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative min-h-screen sm:bg-none flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Bonam Chandra Durga <br />
            <span className="text-blue-400">Gowri Shankar</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="md:text-lg text-gray-300 mb-2"
          >
            AI/ML Engineer | Full-Stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Passionate about building intelligent solutions and crafting smooth
            web experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://www.linkedin.com/in/ch-d-g-shankar-bonam-002bb2321/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Shankars57"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:bonamgshankar@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 mb-16"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-xs md:text-lg bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-xs md:text-lg border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View My Work
            </button>
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
      >
        <ChevronDown className="animate-pulse" size={32} />
      </button>
    </section>
  );
};

export default Hero;
