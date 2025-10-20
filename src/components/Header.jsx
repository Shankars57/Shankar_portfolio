import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";

const variants = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
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
  initial: { y: -10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" },
  },
};

const variants2 = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.2,
      stiffness: 200,
      damping: 30,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const childVariants2 = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(item.href);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring" }}
              className={`font-bold text-xl ${
                isScrolled ? "text-gray-800" : "text-gray-100"
              }`}
            >
              BCDGS
            </motion.div>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              className="hidden md:flex items-center space-x-8"
            >
              {navItems.map((item) => (
                <motion.button
                  variants={childVariants}
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative lg:px-2 transition-colors duration-200 text-sm font-medium
                    ${
                      activeSection === item.href
                        ? "text-blue-600 font-semibold"
                        : isScrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-gray-200 hover:text-blue-400"
                    }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="underline"
                      className={`absolute w-full h-full inset-0 -z-10 rounded ${
                        isScrolled ? "bg-blue-100" : "bg-white/10"
                      }`}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            <div className="flex items-center space-x-4">
              <motion.button
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring" }}
                onClick={() => window.open("/Shankar_resume.pdf", "_blank")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 hidden md:flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </motion.button>
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <motion.div
              variants={variants2}
              initial="initial"
              animate="animate"
              className="md:hidden mt-4 pb-4 flex flex-col space-y-3"
            >
              {navItems.map((item) => (
                <motion.button
                  variants={childVariants2}
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left text-sm font-medium
                   transition-colors duration-200 ${
                     activeSection === item.href
                       ? "text-blue-600 font-semibold"
                       : "text-gray-400 hover:text-blue-600"
                   }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <button
                onClick={() => window.open("/Shankar_resume.pdf", "_blank")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center gap-2 w-fit"
              >
                <Download size={16} />
                Resume
              </button>
            </motion.div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
