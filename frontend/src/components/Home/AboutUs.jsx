import React from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-5xl backdrop-blur-sm backdrop-filter rounded-3xl shadow-lg mt-10 mx-auto p-8 dark:bg-[#363636]   border-l-4 border-gray-500"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-6 ">
        <FaUsers className="text-green-500 text-4xl mr-3 dark:text-[#0F3BFE]" />
        <h2 className="text-3xl font-bold text-black   dark:text-[#0F3BFE]">
          About Us
        </h2>
      </div>
      <p className="text-lg text-black mb-4 dark:text-[#c9c9c9]">
        We are a dedicated team passionate about making knowledge accessible.
        Our platform is designed to facilitate seamless collaboration, allowing
        users to share notes and ideas effortlessly.
      </p>
      <p className="text-lg text-black mb-4 dark:text-[#c9c9c9]">
        Our vision is to create a global community where everyone can
        contribute, learn, and grow together. We believe that sharing knowledge
        empowers individuals and strengthens communities.
      </p>
      <p className="text-lg text-black mb-6 dark:text-[#c9c9c9] ">
        Join us in our mission to transform the way information is shared and
        foster a culture of learning and collaboration.
      </p>
      <div className="flex justify-center items-center">
        <button className="md:w-1/5 w-1/2 px-2 py-2  dark:bg-[#0F3BFE] bg-[#000000] text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
          Get Involved
        </button>
      </div>
    </motion.div>
  );
};

export default AboutUs;
