"use client";

import { motion } from "framer-motion";

export default function DesignSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }} // 👈 RIGHT side se start
      whileInView={{ opacity: 1, x: 0 }} // center pe aa jaye
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold">DEVELOPMENT</h1>
      <p className="text-[#9C9C9C] text-lg">
        I build robust, scalable full-stack web applications from scratch using
        HTML/CSS/JavaScript, PHP/Laravel for powerful backends, React/Next.js
        for dynamic frontends, and Payload CMS for flexible content management.
        I deliver secure authentication, APIs, databases, real-time features,
        and clean, efficient, optimized code — perfect for custom solutions,
        third-party integrations, or complete systems like a University
        Management System.
      </p>
    </motion.div>
  );
}
