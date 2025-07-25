import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_61eyju1",
        "template_7ofk82r",
        formRef.current,
        "TXN1gH5hEouwIyjVO"
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus("success");
          formRef.current.reset();
          setTimeout(() => setSubmitStatus("idle"), 3000);
        },
        () => {
          setIsSubmitting(false);
          setSubmitStatus("error");
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bonamgshankar@gmail.com",
      href: "mailto:bonamgshankar@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9110560147",
      href: "tel:+919110560147",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Peddapuram, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-zinc-900 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-blue-600/10 p-3 rounded-lg">
                    <info.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{info.label}</p>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/ch-d-g-shankar-bonam-002bb2321/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Shankars57"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:bonamgshankar@gmail.com"
                  className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>

            {submitStatus === "success" && (
              <div className="bg-blue-100 border border-blue-300 text-blue-800 px-4 py-3 rounded-lg mb-6">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6">
                Something went wrong. Please try again.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 resize-vertical"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
