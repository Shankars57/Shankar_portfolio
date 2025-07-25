import React, { useState, useEffect } from "react";
import "./pointer.css";
import { motion } from "framer-motion";

const Pointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x + 15,
        y: position.y + 15,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      }}
      className="cursor hidden md:flex"
    ></motion.div>
  );
};

export default Pointer;
