"use client";

import { motion } from "framer-motion";

export default function DesignSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }} // 👈 RIGHT side se start
      whileInView={{ opacity: 1, x: 0 }} // center pe aa jaye
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold">DEVELOPMENT</h1>
      <p className="text-[#9C9C9C]">
        I can design the site based on your needs and suggestions. I can also
        design the site from scratch and consult you during the job.
      </p>
    </motion.div>
  );
}
