"use client";

import { motion } from "framer-motion";

export default function MaintenanceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}     // 👇 neeche se start
      whileInView={{ opacity: 1, y: 0 }} // 👆 upar aa jaye
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="p-2"
    >
      <h1 className="text-3xl font-bold">MAINTENANCE</h1>
      <p className="text-[#9C9C9C] mt-2">
        I can design the site based on your needs and suggestions. I can also
        design the site from scratch and consult you during the job.
      </p>
    </motion.div>
  );
}