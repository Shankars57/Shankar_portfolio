import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const variants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.2,
      stiffness: 500,
      damping: 50,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" },
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
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-800"
    >
      <div className="absolute inset-0 bg-gray-900/80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="animate-fade-in-up"
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bonam Chandra Durga <br />
              <span className="text-blue-400">Gowri Shankar</span>
            </motion.h1>

            <motion.p className="md:text-lg text-gray-300 mb-2">
              AI/ML Engineer | Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.9 }}
              className="text-lg md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              Passionate about building intelligent solutions and crafting smooth web experiences.
            </motion.p>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              variants={childVariants}
              href="https://www.linkedin.com/in/ch-d-g-shankar-bonam-002bb2321/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              variants={childVariants}
              href="https://github.com/Shankars57"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              variants={childVariants}
              href="mailto:bonamgshankar@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          <div className="flex justify-center space-x-4 mb-16">
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className=" text-xs md:text-lg bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105"
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
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
