import React from "react";
import { Heart, Code, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BCDGS</h3>
            <p className="text-slate-300 mb-4">
              Full Stack Developer passionate about creating innovative web
              solutions
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ch-d-g-shankar-bonam-002bb2321/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Shankars57"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:bonamgshankar@gmail.com"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(
                        `#${item.toLowerCase()}`
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-slate-300">
              <p>Peddapuram A.P, India</p>
              <p>bonamgshankar@gmail.com</p>
              <p>Available for opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 mb-4 md:mb-0">
              &copy; {currentYear} Bonam Chandra Durga Gowri Shankar. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Code size={16} className="text-blue-500" />
              <span>by BCDGS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
