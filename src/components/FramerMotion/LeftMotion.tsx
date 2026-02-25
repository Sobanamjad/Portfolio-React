"use client";

import { motion } from "framer-motion";

export default function DesignSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}  
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}           
      className="p-6"
    >
      <h1 className="text-3xl font-bold">DESIGN</h1>
      <p className="text-[#9C9C9C] mt-2">
        I can design the site based on your needs and suggestions. I can also
        design the site from scratch and consult you during the job.
      </p>
    </motion.div>
  );
}